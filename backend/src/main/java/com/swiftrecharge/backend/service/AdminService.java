package com.swiftrecharge.backend.service;

import java.util.List;

import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.Plan;

public interface AdminService {

    List<AppUser> getAllUsers();

    AppUser registerNewAdmin(AppUser user);
    
    List<AppUser> searchUsers(String searchTerm);

    public List<Plan> findPlans();

    public List<Addon> getAddOn();

}
