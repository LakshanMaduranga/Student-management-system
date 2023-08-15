package com.example.courseservice.model;

import javax.persistence.*;

@Entity
@Table(name = "subject_course")
public class SubjectCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    @Column(name = "course_id")
    private int courseId;

    @Column(name = "subject_id")

    private int subjectId;

    public SubjectCourse() {
    }

    public SubjectCourse(int id, int courseId, int subjectId) {
        this.id = id;
        this.courseId = courseId;
        this.subjectId = subjectId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
