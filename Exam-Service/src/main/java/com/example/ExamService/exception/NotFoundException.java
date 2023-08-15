package com.example.ExamService.exception;

public class NotFoundException extends RuntimeException{

    public NotFoundException(int id){
        super("Could not found id "+id);
    }

}
