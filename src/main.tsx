import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Wishes from "./pages/Wishes";
import Remembrance from './pages/Remembrance';
import Birthday from './pages/Birthday';

import { SWRConfig } from "swr";

// import App from './App'

export default function App() {
  return (
    <Routes>
      <Route index element={<Birthday/>} />
      <Route path="/remembrance" element={<Remembrance/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Wishes />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <BrowserRouter>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <App />
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById("root")
);
