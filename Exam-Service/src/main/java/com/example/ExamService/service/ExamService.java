package com.example.ExamService.service;

import com.example.ExamService.exception.NotFoundException;
import com.example.ExamService.model.Exam;
import com.example.ExamService.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService {
    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getAllExam() {
        return examRepository.findAll();
    }

    public Exam getAllExamsById(int examId)
    {
        return examRepository.findById(examId)
                .orElseThrow(()->new NotFoundException(examId));
    }
    /*get exam by cid*/
    public List<Exam> getAllExamsByCourseId(int courseId)
    {
        return examRepository.getExamByCourseId(courseId);
    }

    public Exam addExam(Exam ex){
        return examRepository.save(ex);
    }

    public Exam updateExam(Exam exam, int id){
        return examRepository.findById(id)
                .map(exams -> {
                    exams.setExamDate(exam.getExamDate());
                    exams.setExamDescription(exam.getExamDescription());
                    exams.setExamType(exam.getExamType());
                    exams.setExamPassMarks(exam.getExamPassMarks());
                    exams.setExamTotalQuestions(exam.getExamTotalQuestions());
                    exams.setCourseId(exam.getCourseId());
                    exams.setSubjectId(exam.getSubjectId());
                    return examRepository.save(exams);
                }).orElseThrow(()->new NotFoundException(id));
    }
    public void  deleteExamById(int id)
    {
        examRepository.deleteById(id);
    }


}

