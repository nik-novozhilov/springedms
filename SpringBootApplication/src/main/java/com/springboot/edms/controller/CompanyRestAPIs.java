package com.springboot.edms.controller;

import com.springboot.edms.model.User;
import com.springboot.edms.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CompanyRestAPIs {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/api/company")
	@ResponseBody
	public List<User> getCompanyList() {
		List<User> list = userRepository.findAll();
		return list;
	}
}
