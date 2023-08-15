package com.sms.usersmanagement.repository;

import com.sms.usersmanagement.entity.Lecturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LecturerRepository extends JpaRepository<Lecturer,Integer> {

    @Query("select l.firstName, l.lastName from Lecturer l where l.id=?1")
    public String getLecturerNameGivenId(int id);
}
