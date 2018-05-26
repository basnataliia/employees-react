import employeeOne from 'images/employee1.png';
import employeeTwo from 'images/employee2.png';
import employeeThree from 'images/employee3.png';

const employees = [
  {
    id: 'john-smith',
    fullName: 'John Smith',
    position: 'Web Developer',
    profilePic: employeeOne
  },
  {
    id: 'scott-allen',
    fullName: 'Scott Allen',
    position: 'HR Manager',
    profilePic: employeeTwo
  },
  {
    id: 'dan-wahlin',
    fullName: 'Dan Wahlin',
    position: 'Director of Marketing',
    profilePic: employeeThree
  }
];

class EmployeesApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, 1000);
    });
  }
}

export default EmployeesApi;
