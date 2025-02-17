import React from 'react'
import { BrowserRouter, Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'
import './index.css';

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')
  const baseUrl = import.meta.env.VITE_BASE_URL || '';

  return (
      <div className='text-default min-h-screen bg-white'>
        {!isEducatorRoute && <Navbar />}
        <Routes>
          <Route path={`${baseUrl}`} element={<Home />}/>
          <Route path={`${baseUrl}/course-list`} element={<CoursesList />}/>
          <Route path={`${baseUrl}/course-list/:input`} element={<CoursesList />}/>
          <Route path={`${baseUrl}/course/:id`} element={<CourseDetails />}/>
          <Route path={`${baseUrl}/my-enrollments`} element={<MyEnrollments />}/>
          <Route path={`${baseUrl}/player/:courseId`} element={<Player />}/>
          <Route path={`${baseUrl}/loading/:path`} element={<Loading />}/>
          <Route path={`${baseUrl}/educator`} element={<Educator/>}>
            <Route path='educator' element={<Dashboard/>}/>
            <Route path='add-courses' element={<AddCourse/>}/>
            <Route path='my-courses' element={<MyCourses/>}/>
            <Route path='student-enrolled' element={<StudentsEnrolled/>}/>
          </Route>
        </Routes>
      </div>
    
  )
}

export default App
