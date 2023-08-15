package com.example.courseservice.repository;

import com.example.courseservice.model.Subject;
import com.example.courseservice.model.SubjectCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseSubjectRepository extends JpaRepository<SubjectCourse, Integer> {


    @Query("Select s.subjectId from SubjectCourse s where s.courseId=?1")
    public List<String> getAllSubjectsForGivenCourse(int id);

}
