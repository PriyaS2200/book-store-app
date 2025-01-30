import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { PrivateRoute } from './components/PrivateRoute'
import { Login } from './pages/Login'
import { BookDetail } from './pages/BookDetail'
import { AddBook } from './pages/AddBook'
import { EditBook } from './pages/EditBook'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={
          <PrivateRoute>
            <Books />
          </PrivateRoute>
        } />
        <Route path="/books/:id" element={
          <PrivateRoute>
            <BookDetail />
          </PrivateRoute>
        } />
        <Route path="/add" element={
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        } />
        <Route path="/edit/:id" element={
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
