package com.swiftrecharge.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiftrecharge.backend.entity.Recharge;

public interface RechargeRepo extends JpaRepository<Recharge, Long> {

}
