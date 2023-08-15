package com.sms.usersmanagement.service;

import com.sms.usersmanagement.entity.Lecturer;
import com.sms.usersmanagement.entity.Login;
import com.sms.usersmanagement.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login fetchByUserNameAndPassword(String userName, String password){
        return loginRepository.findByUserNameAndPassword(userName, password);
    }

    public Login createlogin(Login l){
        return loginRepository.save(l);
    }

}
