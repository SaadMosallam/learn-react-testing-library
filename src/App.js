import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import SideNav from "./components/NavBar/SideNav";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Travel from "./components/Travel/Travel";
import Table from "./components/Table/Table";
import { employees } from "./utils";
import Vote from "./components/Vote/Vote";
import VoteEnhanced from "./components/Vote/Vote2";
import DrinkSearch from "./components/DrinkSearch/DrinkSearch";
import EmailForm from "./components/EmailForm/EmailForm";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <SideNav />
      </header>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    name="John Doe"
                    title="Software Engineer"
                    details="I love developing Apps using React"
                  />
                }
              />
              <Route path="/travel" element={<Travel />} />
              <Route path="/table" element={<Table employees={employees} />} />
              <Route path="/vote" element={<Vote totalGlobalLikes={10} />} />
              <Route
                path="/vote-enhanced"
                element={<VoteEnhanced totalGlobalLikes={10} />}
              />
              <Route path="/email" element={<EmailForm />} />
              <Route path="/drink" element={<DrinkSearch />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
