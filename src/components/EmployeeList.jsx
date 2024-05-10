/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './EmployeeList.css'
const EmployeeList = () => {
  return (
    <div >
      <strong className='employees'><p>EmployeeList</p>
      <p>Totla Count: 3 </p>
      <input type="search" name="" id="" placeholder='Search'/>
      <button ><Link to="/CreateEmployee">Create</Link></button>
     
      </strong><br/>
      <table>
        <thead>
              <tr>
                  <th>Unique Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>image not found</td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>123-456-7890</td>
                <td>Manager</td>
                <td>Male</td>
                <td>Finance</td>
                <td>2024-05-09</td>
                <td><button>Edit</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>image not found</td>
                <td>Jane Smith</td>
                <td>janesmith@example.com</td>
                <td>987-654-3210</td>
                <td>Developer</td>
                <td>Female</td>
                <td>IT</td>
                <td>2024-05-10</td>
                <td><button>Edit</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList