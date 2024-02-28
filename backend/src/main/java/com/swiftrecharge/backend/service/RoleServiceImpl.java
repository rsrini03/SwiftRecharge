package com.swiftrecharge.backend.service;

import org.springframework.stereotype.Service;

import com.swiftrecharge.backend.dao.RoleRepo;
import com.swiftrecharge.backend.entity.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService{
	
	private final RoleRepo roleRepo;

	@Override
	public Role registerNewRole(Role role) {
		return roleRepo.save(role);
	}

}
