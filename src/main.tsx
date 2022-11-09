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

import { LocalizationProvider } from '@mui/x-date-pickers';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// or for dayjs
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// or for luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// or for moment
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <App></App>
    </LocalizationProvider>
  </AuthProvider>,

  document.getElementById("root")
);
