package com.swiftrecharge.backend.service;

import java.util.List;

import com.swiftrecharge.backend.entity.Recharge;

public interface RechargeService {

    List<Recharge> getAllRecharges();

    Recharge getRechargeById(Long id);

    Recharge createRecharge(Recharge recharge);

    Recharge updateRecharge(Long id, Recharge recharge);

    void deleteRecharge(Long id);
    
}
