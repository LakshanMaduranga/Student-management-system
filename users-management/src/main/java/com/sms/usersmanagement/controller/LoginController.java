package com.sms.usersmanagement.controller;

import com.sms.usersmanagement.entity.Lecturer;
import com.sms.usersmanagement.entity.Login;
import com.sms.usersmanagement.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping(path="/login-users")
    public Login userLogin(@RequestBody Login login) throws Exception{
        String tempUserName = login.getUserName();
        String tempPassword = login.getPassword();

        if(tempUserName != null && tempPassword != null){
            login = loginService.fetchByUserNameAndPassword(tempUserName, tempPassword);
        }
        if(login == null){
            throw new Exception("Input Login Information");
        }
        return login;
    }

    @PostMapping(path="/login")
    public Login createLecturer(@RequestBody Login l){
        return loginService.createlogin(l);
    }

}
