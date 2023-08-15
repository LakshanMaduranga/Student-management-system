package com.example.ExamService.controller;


import com.example.ExamService.model.Exam;
import com.example.ExamService.model.Question;
import com.example.ExamService.service.ExamService;
import com.example.ExamService.service.QuestionService;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping(path="/questions")
    public List<Question> getAllQuestion()
    {
        return questionService.getAllQuestion();
    }


    @GetMapping(path="/questions/{id}")
    public Question getAllQuestionById(@PathVariable int id)
    {
        return questionService.getAllQuestionById(id);
    }

    @PostMapping(path="/questions")
    public Question addQuestion(@RequestBody Question q)
    {
        return questionService.addQuestion(q);
    }

    @PutMapping(path = "/questions")
    public Question updateQuestion(@RequestBody Question q)
    {
        return questionService.updateQuestion(q);
    }

    @DeleteMapping(path="/questions/{id}")
    public void deleteQuestionById(@PathVariable int id){
        questionService.deleteQuestionById(id);
    }


}
