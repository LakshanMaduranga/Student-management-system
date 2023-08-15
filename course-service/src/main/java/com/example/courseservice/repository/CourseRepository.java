package com.example.courseservice.repository;

import com.example.courseservice.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface CourseRepository extends JpaRepository<Course, Integer> {

    @Query("Select c from Course c where c.id=?1")
    public Course getCourseById(int id);

    @Query("Select c.courseCode from Course c where c.id=?1")
    public List<String> getCourseNameById(int id);

}
