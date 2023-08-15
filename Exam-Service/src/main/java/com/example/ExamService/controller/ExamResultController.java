package com.example.ExamService.controller;

import com.example.ExamService.model.Exam;
import com.example.ExamService.model.ExamResult;
import com.example.ExamService.service.ExamResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ExamResultController {

    @Autowired
    private ExamResultService examResultService;

    /*get all*/
    @GetMapping(path="/results")
    public List<ExamResult> getAllExams()
    {
        return examResultService.getAllExamResults();
    }


    @GetMapping(path="/results/{id}")
    public ExamResult getAllExamsById(@PathVariable int id)
    {
        return examResultService.getAllExamResultsById(id);
    }

    @GetMapping(path="/students/{id}/results")
    public List<ExamResult> getAllExamsByCourseId(@PathVariable int id)
    {
        return examResultService.getAllStudentsResultByStudentId(id);
    }


    @PostMapping(path="/results")
    public ExamResult addExamResult(@RequestBody ExamResult er)
    {
        return examResultService.addExamResult(er);
    }


    @PutMapping(path = "/results")
    public ExamResult updateExamResult(@RequestBody ExamResult examResult)
    {
        return examResultService.updateExamResult(examResult);
    }


    @DeleteMapping(path="/results/{id}")
    public void deleteExamById(@PathVariable int id){
        examResultService.deleteExamResultById(id);
    }


}
