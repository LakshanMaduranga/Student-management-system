package com.sms.usersmanagement.repository;

import com.sms.usersmanagement.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

    public Login findByUserNameAndPassword(String userName, String password);
}
