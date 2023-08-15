package com.example.ExamService.repository;
import com.example.ExamService.model.Exam;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExamRepository extends JpaRepository<Exam,Integer> {

    @Query("Select e from Exam e where e.courseId=?1" )
    public List<Exam> getExamByCourseId(int courseId);
}
