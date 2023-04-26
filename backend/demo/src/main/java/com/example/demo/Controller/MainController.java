package com.example.demo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;

@RestController
@CrossOrigin(origins = "*")
public class MainController {
  
  @GetMapping("/user/api")
  @ResponseBody
  public User viewUser() {
    User user = new User();
    user.setLastName("山田");
    user.setFirstName("太郎");
    user.setAge(23);
    return user;
  }
}