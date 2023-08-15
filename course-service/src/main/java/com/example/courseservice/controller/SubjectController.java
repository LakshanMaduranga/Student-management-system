package com.example.courseservice.controller;

import com.example.courseservice.model.Course;
import com.example.courseservice.model.Subject;
import com.example.courseservice.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @GetMapping(path = "/subjects")
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @GetMapping(path = "/subjects/{id}")
    public Subject getSubjectById(@PathVariable int id) {
        return subjectService.getSubjectById(id);
    }

    @PostMapping(path = "/subjects")
    public Subject addSubjects(@RequestBody Subject s) {
        return subjectService.addSubjects(s);
    }

    @PutMapping(path = "/subjects/{id}")
    public Subject updateCourses(@PathVariable int id, @RequestBody Subject s) {
        return subjectService.updateSubject(id, s);
    }

    @DeleteMapping(path = "/subjects/{id}")
    public void deleteSubjectById(@PathVariable int id) {
        subjectService.deleteSubjectById(id);
    }

    //transfferd from course cotroller (Mistakenly previously created on courseController)
    @GetMapping(path = "/courseSubjects/{id}/subjects")
    public String getSubjectNameForGivenSubjectId(@PathVariable int id) {
        return subjectService.getSubjectForGivenSubjectId(id);
    }

    //return set of subject details(//tempory check for get all subject details for given course id to JSON CHECK)
    @GetMapping(path = "/subject-names/{id}")
    public List<Object> getSubjectForGivenSubjectId(@PathVariable int id) {
        return subjectService.getSubjectDataForGivenSubjectId(id);
    }

    //get the subjects for given lecturer ID

    @GetMapping(path = "/subjects/{id}/lecturers")
    public List<String> getSubjectsForGivenLectId(@PathVariable int id) {
        return subjectService.getSubjectsForGivenLectId(id);
    }
}
