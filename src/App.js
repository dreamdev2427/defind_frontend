import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import LoginWithEmail from "./pages/LoginWithEmail";
import LockLP from "./pages/LockLP";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import DetailedProject from "./pages/DetailedProject";
import Calendar from "./pages/Calendar";
import Training from "./pages/Training";
import News from "./pages/News";
import CourseDetailed from "./pages/Training/CourseDetailed";
import NewsDetailed from "./pages/News/NewsDetailed";

import "./App.css";

function App() {
  return (
    <div className="App bg-[#0E0E16] ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login_with_email" element={<LoginWithEmail />} />
          <Route path="/lock_lp" element={<LockLP />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detailed_project" element={<DetailedProject />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/training" element={<Training />} />
          <Route path="/detailed_course" element={<CourseDetailed />} />
          <Route path="/news" element={<News />} />
          <Route path="/detailed_news" element={<NewsDetailed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
