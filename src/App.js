import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from './students/Students';
import NewStudent from './students/NewStudent';
import UpdateStudent from './students/UpdateStudent';
import ViewStudent from './students/ViewStudent';
import Courses from './courses/Courses';
import NewCourse from './courses/NewCourse';
import ViewCourse from './courses/ViewCourse';
import UpdateCourse from './courses/UpdateCourse';
import Subject from './subjects/Subjects';
import NewSubject from './subjects/NewSubject';
import UpdateSubject from './subjects/UpdateSubject';
import ViewSubject from './subjects/ViewSubject';
import ViewCourseSubjects from './courses/ViewCourseSubjects';
import AddCourseSubject from './courses/AddCourseSubject';
import Lecturers from './lecturers/Lecturers';
import NewLecturer from './lecturers/NewLecturer';
import ViewLecturer from './lecturers/ViewLecturer';
import UpdateLecturer from './lecturers/UpdateLecturer';
import Exams from './exam/Exams';
import NewExam from './exam/NewExam';
import ViewExam from './exam/ViewExam';
import ViewExamStudent from './exam/ViewExam';
import UpdateExam from './exam/UpdateExam';
import Login from './login/login';
import LecturerHome from './pages/LecturerHome';
import ProfileView from './pages/ProfileView';
import LecturerLogin from './lecturers/LecturerLogin';
import StudentHome from './pages/StudentHome';
import ExamsView from './exam/ExamsView';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/admin" element={<Home />} />
          <Route exact path="/" element={<Login />} />

          {/* Students Routing */}
          <Route exact path="/student" element={<Students />} />
          <Route exact path="/new_student" element={<NewStudent />} />
          <Route exact path="/update_student/:id" element={<UpdateStudent />} />
          <Route exact path="/view_student/:id" element={<ViewStudent />} />

          {/* Courses Routing */}
          <Route exact path="/course" element={<Courses />} />
          <Route exact path="/new_course" element={<NewCourse />} />
          <Route exact path="/view_course/:id" element={<ViewCourse />} />
          <Route exact path="/update_course/:id" element={<UpdateCourse />} />
          <Route exact path="/course_subject/:id" element={<ViewCourseSubjects />} />
          <Route exact path="/course_subject" element={<AddCourseSubject />} />

          {/* Subjects Routing */}
          <Route exact path="/subject" element={<Subject />} />
          <Route exact path="/new_subject" element={<NewSubject />} />
          <Route exact path="/update_subject/:id" element={<UpdateSubject />} />
          <Route exact path="/view_subject/:id" element={<ViewSubject />} />

          {/* Lecturer Routing */}
          <Route exact path="/lecturer" element={<Lecturers />} />
          <Route exact path="/new_lecturer" element={<NewLecturer />} />
          <Route exact path="/view_lecturer/:id" element={<ViewLecturer />} />
          <Route exact path="/update_lecturer/:id" element={<UpdateLecturer />} />
          <Route exact path="/lecturer_login/:id" element={<LecturerLogin />} />


          {/* Exams Routing */}
          <Route exact path="/exam" element={<Exams />} />
          <Route exact path="/new_exam" element={<NewExam />} />
          <Route exact path="/view_exam/:id" element={<ViewExam />} />
          <Route exact path="/update_exam/:id" element={<UpdateExam />} />
          <Route exact path="/exams" element={<ExamsView />} />
          <Route exact path="/view_exam_student/:id" element={<ViewExamStudent />} />


          {/* Login Routing */}
          <Route exact path="/profile/:id" element={<ProfileView />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/lecturer_home/:id" element={<LecturerHome />} />
          <Route exact path="/student_home/:id" element={<StudentHome />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
