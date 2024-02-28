package com.swiftrecharge.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiftrecharge.backend.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

}
