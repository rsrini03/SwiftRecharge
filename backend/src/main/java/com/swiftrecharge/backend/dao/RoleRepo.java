package com.swiftrecharge.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiftrecharge.backend.entity.Role;

public interface RoleRepo extends JpaRepository<Role, String> {

}
