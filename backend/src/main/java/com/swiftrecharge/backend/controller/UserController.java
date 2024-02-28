package com.swiftrecharge.backend.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.entity.Plan;
import com.swiftrecharge.backend.service.AddonServiceImpl;
import com.swiftrecharge.backend.service.UserServiceImpl;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713/")
@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class UserController {

	private final UserServiceImpl userService;

	private final AddonServiceImpl addonService;

	@PostConstruct
	public void initRolesAndUSer() {
		userService.initRolesAndUser();
	}

	@GetMapping("/forAdmin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminRoute() {
		return "Admin Routes";
	}

	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/plan/{operatorName}")
	public List<Plan> viewPlan(@PathVariable String operatorName) {
		return userService.findPlansByOperator(operatorName);
	}

	@PreAuthorize("hasRole('CUSTOMER') or hasRole('ADMIN')")
	@GetMapping("/getAddons/{operatorName}")
	public List<Addon> getAddons(@PathVariable String operatorName) {
		return addonService.getAddOnByOperatorName(operatorName);
	}

}
