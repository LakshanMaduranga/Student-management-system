package com.sms.usersmanagement.service;

import com.sms.usersmanagement.entity.Student;
import com.sms.usersmanagement.exception.UserNotFoundException;
import com.sms.usersmanagement.repository.StudentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;
    
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
    
    public Student createStudent(Student student){
        return studentRepository.save(student);
    }
    
    public Student getStudentById(int studentId){
        return studentRepository.findById(studentId)
                .orElseThrow(()->new UserNotFoundException(studentId));
    }

    public Student updateStudent(Student updateStudent, int studentId){
        return studentRepository.findById(studentId)
                .map(student -> {
                    student.setFirstName(updateStudent.getFirstName());
                    student.setLastName(updateStudent.getLastName());
                    student.setDob(updateStudent.getDob());
                    student.setAge(updateStudent.getAge());
                    student.setCourse(updateStudent.getCourse());
                    student.setAddress(updateStudent.getAddress());
                    student.setParentName(updateStudent.getParentName());
                    student.setMobileNumber(updateStudent.getMobileNumber());
                    return studentRepository.save(student);
                }).orElseThrow(()->new UserNotFoundException(studentId));
    }

    public String deleteStudentById(int studentId){
        if (!studentRepository.existsById(studentId)){
            throw new UserNotFoundException(studentId);
        }else{
            studentRepository.deleteById(studentId);
            return "User with id " + studentId + " has been deleted success.";
        }
    }
    
}
