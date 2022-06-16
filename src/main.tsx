import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { SWRConfig } from "swr";
import Wishes from './pages/Wishes';

// import App from './App'

export default function App() {
  return (
    <Routes>
      <Route index element={<Wishes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
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
