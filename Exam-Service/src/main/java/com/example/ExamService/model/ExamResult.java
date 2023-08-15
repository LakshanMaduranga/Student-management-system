package com.example.ExamService.model;

import javax.persistence.*;

@Entity
@Table(name="tbl_exam_student")

public class ExamResult
{


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="student_id")
    private int studentId;

    @Column(name="exam_id")
    private int examId;

    @Column(name="result_score")
    private int resultScore;


    @Column(name="result_status")
    private String resultStatus;

    public void examStudent(int id,int studentId,int examId)
    {
        this.examId=examId;
        this.studentId=studentId;
        this.id=id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getExamId() {
        return examId;
    }

    public void setExamId(int examId) {
        this.examId = examId;
    }

    public int getResultScore() {
        return resultScore;
    }

    public void setResultScore(int resultScore) {
        this.resultScore = resultScore;
    }

    public String getResultStatus() {
        return resultStatus;
    }

    public void setResultStatus(String resultStatus) {
        this.resultStatus = resultStatus;
    }
}

