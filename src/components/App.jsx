import { Routes, Route, Navigate } from "react-router";
import { Suspense } from 'react';

import Navigation from "./Navigation/Navigation";
import About from "./About.jsx";
import WhatIf from "./WhatIf";


export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-if" element={<WhatIf />} />
        </Route>

      </Routes>
      </Suspense>
    </div>

  );
};
