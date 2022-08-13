import ReactDOM from 'react-dom'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Wishes from "./pages/Wishes";
import Remembrance from './pages/Remembrance';
import Trade from './pages/Trade';

import { AuthProvider } from './contexts/Auth';
import RequireAuth from './components/RequireAuth';
import SignIn from './pages/SignIn';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Wishes />} />
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/remembrance" element={<Remembrance />} />
          <Route path="/trade" element={<Trade />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Wishes />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <AuthProvider>
    <App></App>
  </AuthProvider>,

  document.getElementById("root")
);
