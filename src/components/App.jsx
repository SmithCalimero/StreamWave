import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

/* THESE LINES CAN BE SIMPLIFIED WITH index.js AND WITH THE LINE BELOW THEM
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Movie from './Movie/Movie';
import MovieInformation from './MovieInformation/MovieInformation';
import Actor from './Actor/Actor';
*/

import { Navbar, Profile, Movie, MovieInformation, Actor } from './index';

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="movie/:id" element={<MovieInformation />} />
        <Route path="actor/:id" element={<Actor />} />
      </Routes>
    </main>
  </div>
);

export default App;
