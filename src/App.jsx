import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './assets/components/Navigation';
import Add from './assets/pages/Add';
import SingleMoviePage from './assets/pages/SingleMoviePage';
import Watched from './assets/pages/Watched';
import WatchList from './assets/pages/WatchList';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
            <Route path={`/watched/:id`} element={<SingleMoviePage />} />
            <Route path={`/watchlist/:id`} element={<SingleMoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
