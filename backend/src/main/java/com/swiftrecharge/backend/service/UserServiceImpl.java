package com.swiftrecharge.backend.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.swiftrecharge.backend.dao.AppUserRepo;
import com.swiftrecharge.backend.dao.PlanRepo;
import com.swiftrecharge.backend.dao.RoleRepo;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Plan;
import com.swiftrecharge.backend.entity.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final AppUserRepo userRepo;

	private final PlanRepo planRepo;

	private final RoleRepo roleRepo;

	private final PasswordEncoder passwordEncoder;

	@Override
	public ResponseEntity<?> registerNewUser(AppUser user) {
		String name = user.getUserName();
		String email = user.getEmail();

		AppUser existingUserEmail = userRepo.findByEmail(email);
		AppUser existingUser = userRepo.findByUserName(name);


		if (existingUser != null || existingUserEmail != null) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).header("message", "User already exists with this email")
					.build();
		}

		Role role = roleRepo.findById("CUSTOMER").orElseThrow(() -> new RuntimeException("Role 'USER' not found"));
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		user.setMobileNumber(user.getMobileNumber());
		AppUser savedUser = userRepo.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}

	public void initRolesAndUser() {
		
		Role adminRole = new Role();
		adminRole.setRoleName("ADMIN");
		adminRole.setRoleDescription("Admin Role");
		roleRepo.save(adminRole);

		Role userRole = new Role();
		userRole.setRoleName("CUSTOMER");
		userRole.setRoleDescription("Customer Role");
		roleRepo.save(userRole);

		AppUser admin = new AppUser();
		admin.setUserName("Srini");
		admin.setUserPassword(getEncodedPassword("srini12345"));
		admin.setMobileNumber(7904161298L);
		admin.setEmail("rsrini169@gmail.com");
		admin.setLocation("Coimbatore");
		Set<Role> roles = new HashSet<>();
		roles.add(adminRole);
		admin.setRole(roles);
		userRepo.save(admin);

	}

	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}

	@Override
	public AppUser findUserNameByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public List<Plan> findPlansByOperator(String operatorName){
		return planRepo.findByOperatorName(operatorName);
	}

}
