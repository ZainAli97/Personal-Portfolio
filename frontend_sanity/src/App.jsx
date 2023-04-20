import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ExerciseDetail, Home } from "./Pages";
import { Navbar, Footer } from "./Components";

const App = () => (
    <>
        <Box
            width="400px">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    </>
);

export default App;
