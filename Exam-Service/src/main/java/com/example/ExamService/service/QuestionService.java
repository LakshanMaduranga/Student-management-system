package com.example.ExamService.service;


import com.example.ExamService.model.Exam;
import com.example.ExamService.model.Question;
import com.example.ExamService.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    public List<Question> getAllQuestion() {
        return questionRepository.findAll();
    }

    public Question getAllQuestionById(int id)
    {
        Optional<Question> questionOptional=questionRepository.findById(id);
        return questionOptional.get();
    }

    public Question addQuestion(Question ex){
        return questionRepository.save(ex);
    }

    public Question updateQuestion(Question exam){
        return questionRepository.save(exam);
    }
    public void  deleteQuestionById(int id)
    {
        questionRepository.deleteById(id);
    }
}
