package com.sms.usersmanagement.controller;

import com.sms.usersmanagement.dto.StudentDto;
import com.sms.usersmanagement.entity.Student;
import com.sms.usersmanagement.service.StudentService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
    
    @Autowired
    private StudentService studentService;

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping(path = "/students")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
        
    @PostMapping(path = "/students")
    public Student createStudent(@RequestBody Student student){
        return studentService.createStudent(student);
    }
    
    @GetMapping(path = "/students/{studentId}")
    public Student getStudentById(@PathVariable int studentId){
        return studentService.getStudentById(studentId);
    }

    @PutMapping(path = "/students/{studentId}")
    public Student updateStudent(@RequestBody Student student, @PathVariable int studentId){
        return studentService.updateStudent(student, studentId);
    }

    @DeleteMapping(path = "/students/{studentId}")
    public String deleteStudentById(@PathVariable int studentId){
        return studentService.deleteStudentById(studentId);
    }

    @GetMapping(path="/students-courses-details")
    public List<StudentDto> getCourseDetailsWithStudent(){

        Student s=null;
        List<StudentDto> studentDtoList=new ArrayList<>();
        //List<Integer> idList= studentService.getAllCourseIds();
        List<Student> studentList=studentService.getAllStudents();
        for(int i=0;i<studentList.size();i++){

            StudentDto studentDto=new StudentDto();
            s=studentList.get(i);
            int courseId=Integer.parseInt(s.getCourse());


            String url="http://localhost:8081/courses/"+courseId+"/names";
            String[] courses=restTemplate.getForObject(url,String[].class);
            //System.out.println("Course code check"+courses[0]);
            studentDto.setCourseId(Integer.parseInt(s.getCourse()));
            studentDto.setCourseCode(courses[0]);
            studentDto.setStudentId(s.getId());
            studentDto.setFirstName(s.getFirstName());
            studentDto.setLastName(s.getLastName());
            studentDtoList.add(studentDto);


        }
        return studentDtoList;
    }
    
}
