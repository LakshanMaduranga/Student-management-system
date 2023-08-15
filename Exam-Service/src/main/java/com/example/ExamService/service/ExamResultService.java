package com.example.ExamService.service;


import com.example.ExamService.model.Exam;
import com.example.ExamService.model.ExamResult;
import com.example.ExamService.repository.ExamResultRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamResultService
{
    @Autowired
    private ExamResultRepository examResultRepository;

    public List<ExamResult> getAllExamResults() {
        return examResultRepository.findAll();
    }

    public ExamResult getAllExamResultsById(int examId)
    {
        Optional<ExamResult> examResultOptional=examResultRepository.findById(examId);
        return examResultOptional.get();
    }

    public List<ExamResult> getAllStudentsResultByStudentId(int studentId)
    {

        return examResultRepository.getAllStudentsResultByStudentId(studentId);
    }



    public ExamResult addExamResult(ExamResult er){
        return examResultRepository.save(er);
    }

    public ExamResult updateExamResult(ExamResult examResult){
        return examResultRepository.save(examResult);
    }
    public void  deleteExamResultById(int id)
    {
        examResultRepository.deleteById(id);
    }



}
