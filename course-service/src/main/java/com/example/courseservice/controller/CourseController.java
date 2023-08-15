package com.example.courseservice.controller;

import com.example.courseservice.model.Course;
import com.example.courseservice.model.Subject;
import com.example.courseservice.model.SubjectCourse;
import com.example.courseservice.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping(path = "/courses")
    public List<Course> getAllCourses() {
        return courseService.getAllCourse();
    }

    @GetMapping(path = "/courses/{id}")
    public Course getAllCoursesById(@PathVariable int id) {
        return courseService.getAllCourseById(id);
    }

    @PostMapping(path = "/courses")
    public Course addCourse(@RequestBody Course c) {
        return courseService.addCourse(c);
    }

    @PutMapping(path = "/courses/{id}")
    public Course updateCourses(@PathVariable int id, @RequestBody Course c) {
        return courseService.updateCourse(id, c);
    }

    @DeleteMapping(path = "/courses/{id}")
    public void deleteCourseById(@PathVariable int id) {
        courseService.deleteCourseById(id);
    }

    @GetMapping(path = "/course-subjects")
    public List<SubjectCourse> getAllCourseSubjectDetails() {
        return courseService.getCoursesWithSubjects();
    }

    @PostMapping(path = "/course-subjects")
    public SubjectCourse addCourseSubjectDetails(@RequestBody SubjectCourse sb) {
        return courseService.addCourseSubjectDetails(sb);
    }

    @GetMapping(path = "/courses/{id}/subjects")
    public List<String> getSubjectForGivenCourseId(@PathVariable int id) {
        List<String> subNameList = new ArrayList<>();

        List<String> idList = courseService.getAllSubjectsForGivenCourse(id);
        for (int i = 0; i < idList.size(); i++) {
            int subjectId = Integer.parseInt(idList.get(i));
            String url = "http://localhost:8081/course-subjects/" + subjectId + "/subjects";
            String subjectName = restTemplate.getForObject(url, String.class);
            subNameList.add(subjectName);
        }
        return subNameList;
    }

    @GetMapping(path = "/courses/{id}/subjectdetails")
    public List<Object> getBothSubjectIdNameForGivenCourse(@PathVariable int id) {
        List<Object> subNameList = new ArrayList<>();
        List<String> idList = courseService.getAllSubjectsForGivenCourse(id);
        for (int i = 0; i < idList.size(); i++) {
            int subjectId = Integer.parseInt(idList.get(i));
            String url = "http://localhost:8081/subject-names/" + subjectId;
            Object subjectName = restTemplate.getForObject(url, Object[].class);
            subNameList.add(subjectName);
        }
        return subNameList;
    }

    @GetMapping(path="/courses/{id}/names")
    public List<String> getCourseNameById(@PathVariable int id){
        return courseService.getCourseNameById(id);

    }
}
