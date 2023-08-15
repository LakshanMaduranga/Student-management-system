package com.example.ExamService.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="tbl_exam")
public class Exam

{
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int examId;

    @Column(name="exam_date")
    private String examDate;



    @Column(name="exam_description")
    private String examDescription;

    @Column(name="exam_type")
    private String examType;

    @Column(name="exam_pass_marks")
    private int examPassMarks;

    @Column(name="exam_total_questions")
    private int examTotalQuestions;


    @Column(name="course_id")
    private int courseId;

    @Column(name="subject_id")
    private int subjectId;

    public int getExamId() {
        return examId;
    }

    public void setExamId(int examId) {
        this.examId = examId;
    }

    public String getExamDate() {
        return examDate;
    }

    public void setExamDate(String examDate) {
        this.examDate = examDate;
    }

    public String getExamDescription() {
        return examDescription;
    }

    public void setExamDescription(String examDescription) {
        this.examDescription = examDescription;
    }

    public String getExamType() {
        return examType;
    }

    public void setExamType(String examType) {
        this.examType = examType;
    }

    public int getExamPassMarks() {
        return examPassMarks;
    }

    public void setExamPassMarks(int examPassMarks) {
        this.examPassMarks = examPassMarks;
    }

    public int getExamTotalQuestions() {
        return examTotalQuestions;
    }

    public void setExamTotalQuestions(int examTotalQuestions) {
        this.examTotalQuestions = examTotalQuestions;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }


    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }
}
