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
import Trade from './pages/Trade';

import { SWRConfig } from "swr";
import AuthProvider from './contexts/Auth';
import RequireAuth from './components/RequireAuth';
import SignIn from './pages/SignIn';

// import App from './App'

export default function App() {
  return (
    <Routes>
      <Route index element={<Wishes />} />
      <Route path="/login" element={<SignIn></SignIn>}></Route>
      <Route element={<RequireAuth />}>
        <Route path="/remembrance" element={<Remembrance />} />
        <Route path="/trade" element={<Trade />} />
      </Route>
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
