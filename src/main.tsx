import React, { useState } from 'react'
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
import { AuthProvider } from './contexts/Auth';
import RequireAuth from './components/RequireAuth';
import SignIn from './pages/SignIn';
import { AppProvider } from './contexts/App';
import { AuthenticationData } from './dtos/Auth';

// import App from './App'

export default function App() {
  const [auth, setState] = useState({})
  return (
    <AuthProvider data={auth} setState={setState}>

      <Routes>
        <Route index element={<Wishes />} />
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/remembrance" element={<Remembrance />} />
          <Route path="/trade" element={<Trade />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>

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
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
