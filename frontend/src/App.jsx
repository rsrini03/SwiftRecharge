import './input.css';
import React, { Suspense, lazy } from 'react';
import Loader from './Components/Loader';
import UserLayout from './Layout/UserLayout';
import DashBoard from './Components/Pages/admin/DashBoard';
import { Routes, Route } from 'react-router-dom';
import DropDown from './Components/Pages/DropDown';

const LazyHome = lazy(() => import('./Components/Pages/Home'));
const LazySignin = lazy(() => import('./Components/Pages/Login'));
const LazySignup = lazy(() => import('./Components/Pages/SignUp'));
const LazyProfile = lazy(() => import('./Components/Pages/Profile'));

function App() {
  return (
    <DelayedFallback>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<UserLayout component={LazyHome} />} />
          <Route path="/profile" element={<UserLayout component={LazyProfile} />} />
          <Route path="/login" element={<UserLayout component={LazySignin} />} />
          <Route path="/signup" element={<UserLayout component={LazySignup} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/drop" element = {<DropDown/>}/>
        </Routes>
      </Suspense>
    </DelayedFallback>
  );
}

// Component for delaying the fallback
const DelayedFallback = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulating a delay of 1.5 seconds before setting loading to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
};

export default App;
