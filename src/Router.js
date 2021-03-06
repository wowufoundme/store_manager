import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please login" initial/>
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="List of Employees"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
