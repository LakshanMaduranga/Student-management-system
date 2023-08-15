package com.example.ExamService.controller;


import com.example.ExamService.model.Exam;
import com.example.ExamService.service.ExamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ExamController {
    @Autowired
    private ExamService examService;

    @GetMapping(path="/exams")
    public List<Exam> getAllExams()
    {
        return examService.getAllExam();
    }


    @GetMapping(path="/exams/{id}")
    public Exam getAllExamsById(@PathVariable int id)
    {
        return examService.getAllExamsById(id);
    }

    @GetMapping(path="/courses/{id}/exams")
    public List<Exam> getAllExamsByCourseId(@PathVariable int id)
    {
        return examService.getAllExamsByCourseId(id);
    }


    @PostMapping(path="/exams")
    public Exam addExam(@RequestBody Exam ex)
    {
        return examService.addExam(ex);
    }

    @PutMapping(path = "/exams/{id}")
    public Exam updateExam(@RequestBody Exam exam, @PathVariable int id)
    {
        return examService.updateExam(exam, id);
    }

    @DeleteMapping(path="/exams/{id}")
    public void deleteExamById(@PathVariable int id){
        examService.deleteExamById(id);
    }


}
