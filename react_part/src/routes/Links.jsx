import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import StudentEdit from '../components/StudentEdit';

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:id" element={<StudentEdit />} />
        </Routes>
    )
}
