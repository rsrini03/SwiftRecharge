package com.swiftrecharge.backend.service;

import org.springframework.stereotype.Service;

import com.swiftrecharge.backend.dao.RechargeRepo;
import com.swiftrecharge.backend.entity.Recharge;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RechargeServiceImpl implements RechargeService {

    private final RechargeRepo rechargeRepository;

    @Override
    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }

    @Override
    public Recharge getRechargeById(Long id) {
        return rechargeRepository.findById(id).orElse(null);
    }

    @Override
    public Recharge createRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public Recharge updateRecharge(Long id, Recharge recharge) {
        recharge.setRechargeId(id);
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteRecharge(Long id) {
        rechargeRepository.deleteById(id);
    }
}
