import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './untils/PrivateRoute';

import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ResetPasswordScreen from './screens/auth/ResetPasswordScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />

          <Route path="/dashboard" element={<DashboardScreen />} />
          
          {/* <Route path="/dashboard" element={ 
                  <PrivateRoute element={DashboardScreen} />
                }
              /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
