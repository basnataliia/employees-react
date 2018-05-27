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

const generateId = (employee) => {
  return employee.fullName.toLowerCase() + '-' + employee.position.toLowerCase();
};

class EmployeesApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, 1000);
    });
  }

  static saveEmployee(employee) {
      employee = Object.assign({}, employee);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate server-side validation
            const minEmployeeNameLength = 1;
            if (employee.fullName.length < minEmployeeNameLength) {
              reject(`Full Name must be at least ${minEmployeeNameLength} characters.`);
            }

            if (employee.id) {
              const existingEmployeeIndex = employees.findIndex(a => a.id == employee.id);
              employees.splice(existingEmployeeIndex, 1, employee);
            } else {
              employee.id = generateId(employee);
              employees.push(employee);
            }

            resolve(employee);
          }, 500);
        });
      }

    static deleteEmployee(employeeId) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const indexOfEmployeeToDelete = employees.findIndex(employee => {
            employee.id == employeeId;
          });
          employees.splice(indexOfEmployeeToDelete, 1);
          resolve();
        }, 300);
      });
    }
}

export default EmployeesApi;
