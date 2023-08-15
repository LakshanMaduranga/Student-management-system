package com.example.ExamService.repository;

import com.example.ExamService.model.Exam;
import com.example.ExamService.model.ExamResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExamResultRepository extends JpaRepository<ExamResult,Integer> {


    @Query("Select e from ExamResult e where e.studentId=?1" )
    public List<ExamResult> getAllStudentsResultByStudentId(int studentId);

}
