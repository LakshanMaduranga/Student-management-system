package com.example.courseservice.repository;

import com.example.courseservice.model.Course;
import com.example.courseservice.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;

import java.util.List;
import java.util.Objects;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {

    @Query("select s.name from Subject s where s.id=?1")
    public String getSubjectById(int id);

    //tempory check for get all subject details for given course id to JSON CHECK
    @Query("select s.name, s.id from Subject s where s.id=?1")
    public List<Object> getSubjectDataForGivenSubjectId(int id);

    // to get Subjects teach by given lecturer
    @Query("select s.id,s.name from Subject s where s.lecturerId=?1")
    public List<String> getSubjectsForGivenLectId(int lecturerId);

    @Query("Select s from Subject s where s.id=?1")
    public Subject getSubjectsById(int id);


}
