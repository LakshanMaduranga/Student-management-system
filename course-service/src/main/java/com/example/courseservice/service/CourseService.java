package com.example.courseservice.service;

import com.example.courseservice.model.Course;
import com.example.courseservice.model.Subject;
import com.example.courseservice.model.SubjectCourse;
import com.example.courseservice.repository.CourseRepository;
import com.example.courseservice.repository.CourseSubjectRepository;
import com.example.courseservice.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepo;
    @Autowired
    private CourseSubjectRepository courseSubjectRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    public List<Course> getAllCourse() {
        return courseRepo.findAll();

    }

    public Course getAllCourseById(int id) {
        Optional<Course> userOptional = courseRepo.findById(id);
        return userOptional.get();
    }

    public Course addCourse(Course c) {
        return courseRepo.save(c);
    }

    public Course updateCourse(int id, Course c) {
        Course updateCourse = courseRepo.getCourseById(id);
        updateCourse.setCourseCode(c.getCourseCode());
        updateCourse.setDescription(c.getDescription());
        updateCourse.setName(c.getName());
        courseRepo.save(updateCourse);
        return updateCourse;

    }

    public void deleteCourseById(int id) {
        courseRepo.deleteById(id);
    }

    public List<SubjectCourse> getCoursesWithSubjects() {
        return courseSubjectRepository.findAll();
    }

    public SubjectCourse addCourseSubjectDetails(SubjectCourse sb) {
        return courseSubjectRepository.save(sb);
    }

    public List<String> getAllSubjectsForGivenCourse(int id) {
        return courseSubjectRepository.getAllSubjectsForGivenCourse(id);
    }

    public List<String> getCourseNameById(int id){

        return courseRepo.getCourseNameById(id);
    }

}
