package com.swiftrecharge.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swiftrecharge.backend.entity.AppUser;
import com.swiftrecharge.backend.entity.JwtRequest;
import com.swiftrecharge.backend.entity.JwtResponse;
import com.swiftrecharge.backend.service.JwtService;
import com.swiftrecharge.backend.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class JwtController {

	private final JwtService jwtService;

	private final UserServiceImpl userService;

	@PostMapping("/login")
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		return jwtService.createJwtToken(jwtRequest);
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody AppUser user) {
		return userService.registerNewUser(user);
	}

	@GetMapping("/sam")
	public String sam() {
		return "Shree";
	}

}
