package com.sms.usersmanagement.service;

import com.sms.usersmanagement.entity.Lecturer;
import com.sms.usersmanagement.entity.Student;
import com.sms.usersmanagement.exception.UserNotFoundException;
import com.sms.usersmanagement.repository.LecturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LecturerService {

    @Autowired
    private LecturerRepository lecturerRepository;

    public List<Lecturer> getAllLecturers(){
        return lecturerRepository.findAll();
    }
    public Lecturer getStudentByGivenId(int id){
        Optional<Lecturer> optionalLecturer=lecturerRepository.findById(id);
        return optionalLecturer.get();
    }

    public Lecturer updateLecturer(Lecturer updateLecturer, int lecturerId){
        return lecturerRepository.findById(lecturerId)
                .map(lecturer -> {
                    lecturer.setFirstName(updateLecturer.getFirstName());
                    lecturer.setLastName(updateLecturer.getLastName());
                    lecturer.setAddress(updateLecturer.getAddress());
                    lecturer.setContactNumber(updateLecturer.getContactNumber());
                    lecturer.setEmailAddress(updateLecturer.getEmailAddress());
                    lecturer.setAge(updateLecturer.getAge());
                    lecturer.setNic(updateLecturer.getNic());
                    lecturer.setQualification(updateLecturer.getQualification());
                    return lecturerRepository.save(lecturer);
                }).orElseThrow(()->new UserNotFoundException(lecturerId));
    }

    public String deleteLecturerById(int lecturerId){
        if (!lecturerRepository.existsById(lecturerId)){
            throw new UserNotFoundException(lecturerId);
        }else{
            lecturerRepository.deleteById(lecturerId);
            return "Lecturer with id " + lecturerId + " has been deleted success.";
        }
    }

    public Lecturer createLecturer(Lecturer l){
        return lecturerRepository.save(l);
    }

    public String getLecturerNameGivenId(int id){
            return lecturerRepository.getLecturerNameGivenId(id);
    }
}
