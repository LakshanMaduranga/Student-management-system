package com.example.courseservice.service;

import com.example.courseservice.exception.NotFoundException;
import com.example.courseservice.model.Course;
import com.example.courseservice.model.Subject;
import com.example.courseservice.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Objects;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public Subject getSubjectById(int id) {
        return subjectRepository.findById(id)
                .orElseThrow(()->new NotFoundException(id));
    }

    public Subject addSubjects(Subject s) {
        return subjectRepository.save(s);
    }

    public Subject updateSubject(int id, Subject c) {
        Subject subjectCourse = subjectRepository.getSubjectsById(id);
        subjectCourse.setName(c.getName());
        subjectCourse.setCredit(c.getCredit());
        subjectCourse.setLecturerId(c.getLecturerId());
        subjectCourse.setName(c.getName());
        subjectRepository.save(subjectCourse);
        return subjectCourse;

    }

    public void deleteSubjectById(int id) {
        subjectRepository.deleteById(id);
    }

    public String getSubjectForGivenSubjectId(int id) {
        return subjectRepository.getSubjectById(id);
    }

    //tempory check for get data for given subject id
    public List<Object> getSubjectDataForGivenSubjectId(int id) {
        return subjectRepository.getSubjectDataForGivenSubjectId(id);
    }

    //get the subjects for given lecturer ID


    public List<String> getSubjectsForGivenLectId(int id) {
        return subjectRepository.getSubjectsForGivenLectId(id);
    }
}
