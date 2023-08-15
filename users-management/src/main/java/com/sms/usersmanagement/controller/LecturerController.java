package com.sms.usersmanagement.controller;

import com.sms.usersmanagement.entity.Lecturer;
import com.sms.usersmanagement.entity.Student;
import com.sms.usersmanagement.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LecturerController {

    @Autowired
    private LecturerService lecturerService;
    @Autowired
    private RestTemplate restTemplate;


    @GetMapping(path="/lecturers")
    public List<Lecturer> getAllStudents(){

        return lecturerService.getAllLecturers();
    }
    //get lecturer by given Lecturer Id
    @GetMapping(path="/lecturers/{id}")
    public Lecturer getStudentByGivenId(@PathVariable int id){

        return lecturerService.getStudentByGivenId(id);
    }

    @PostMapping(path="/lecturers")
    public Lecturer createLecturer(@RequestBody Lecturer l){
        return lecturerService.createLecturer(l);
    }

    //this end point is to get Lecturer name for given id

    @GetMapping(path="lecturers/{id}/names")
    public String getLecturerNamesGivenId(@PathVariable int id){
        return lecturerService.getLecturerNameGivenId(id);
    }

    @PutMapping(path = "/lecturers/{lecturerId}")
    public Lecturer updateLecturer(@RequestBody Lecturer lecturer, @PathVariable int lecturerId){
        return lecturerService.updateLecturer(lecturer, lecturerId);
    }

    @DeleteMapping(path = "/lecturers/{lecturerId}")
    public String deleteLecturerById(@PathVariable int lecturerId){
        return lecturerService.deleteLecturerById(lecturerId);
    }

    //getting allsubject that relvent lecturer teaches

    @GetMapping(path="lecturers/{id}/subjects")
    public List<String> getSubjectForGivenLecId(@PathVariable int id){
        String url="http://localhost:8081/subjects/"+id+"/lecturers";
        List<String> subjectDetails=restTemplate.getForObject(url,List.class);
        return subjectDetails;

    }




}
