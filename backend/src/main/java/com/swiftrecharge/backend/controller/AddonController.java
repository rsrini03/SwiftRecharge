package com.swiftrecharge.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swiftrecharge.backend.entity.Addon;
import com.swiftrecharge.backend.service.AddonServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/addons")
public class AddonController {

    @Autowired
    private AddonServiceImpl addonService;

    @GetMapping("/")
    public List<Addon> getAllAddons() {
        return addonService.getAllAddons();
    }

    @GetMapping("/{id}")
    public Addon getAddonById(@PathVariable Long id) {
        return addonService.getAddonById(id);
    }

    @GetMapping("getAddOns/{operatorName}")
    public List<Addon> getAddonByOperator(@PathVariable String operatorName) {
        return addonService.getAddOnByOperatorName(operatorName);
    }
    
    @PostMapping("/")
    public Addon createAddon(@RequestBody Addon addon) {
        return addonService.createAddon(addon);
    }

    @PutMapping("/{id}")
    public Addon updateAddon(@PathVariable Long id, @RequestBody Addon addon) {
        return addonService.updateAddon(id, addon);
    }

    @DeleteMapping("/{id}")
    public void deleteAddon(@PathVariable Long id) {
        addonService.deleteAddon(id);
    }
}
