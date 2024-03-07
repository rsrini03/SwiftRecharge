import './input.css';
import React, { Suspense, lazy } from 'react';
import Loader from './Components/Loader';
import UserLayout from './Layout/UserLayout';
import DashBoard from './Components/Pages/admin/DashBoard';
import { Routes, Route } from 'react-router-dom';
import DropDown from './Components/Pages/DropDown';
import Form from './Components/Pages/Form';
import Login from "./Components/Pages/Login"
import SignUp from "./Components/Pages/SignUp"
import Features from './Components/Pages/Features';
import PlanDetails from './Components/Pages/PlanDetails';
import AddPlan from './Components/Pages/admin/AddPlan';
import ConatctUs from './Components/Pages/ConatctUs';
import AdminForm from './Components/Pages/admin/AdminForm';
import Verify from './Components/Pages/Verify';
import History from './Components/Pages/History';

const LazyHome = lazy(() => import('./Components/Pages/Home'));
// const LazySignin = lazy(() => import('./Components/Pages/Login'));
// const LazySignup = lazy(() => import('./Components/Pages/SignUp'));
const LazyProfile = lazy(() => import('./Components/Pages/Profile'));
const LazyForm = lazy(() => import('./Components/Pages/Form'));
const LazyPlans = lazy(() => import('./Components/Pages/PlanDetails'));
const LazyVerify = lazy(() => import('./Components/Pages/Verify'));
const LazyHistory = lazy(() => import('./Components/Pages/History'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<UserLayout component={LazyHome} />} />
        <Route path="/profile" element={<UserLayout component={LazyProfile} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/drop" element={<DropDown />} />
        <Route path="/form" element={<UserLayout component={LazyForm} />} />
        <Route path='/plans' element={<UserLayout component={LazyPlans} />} />
        <Route path='/verify' element={<UserLayout component={LazyVerify} />} />
        {/* <Route path='/history' element={<UserLayout component={LazyHistory} />} /> */}
        <Route path='/addplans' element={<AddPlan />} />
        <Route path='/contact' element={<ConatctUs />} />
        <Route path='/addon' element={<AdminForm />} />
        <Route path='/history' element={<UserLayout component={LazyHistory} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
