import './App.css';
import React, { useState,useEffect } from 'react';
import {Link,useNavigate,useLocation} from "react-router-dom";

function View(props) {

    const navigate=useNavigate()
    const location=useLocation();
    console.log(location.state);
return(
    <div>
<table>
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Details</th>
    </tr>
  </thead>                
  <tbody>
    <tr>
      <td style={{fontWeight:"bolder"}} >Loan Number</td>
      <td >{location.state.details.Loan_no}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Applicant Name</td>
      <td>{location.state.details.data.name}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Mobile No.</td>
      <td>{location.state.details.data.mobile_no}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Aadhar No.</td>
      <td>{location.state.details.data.aadhar_no}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>PAN No.</td>
      <td>{location.state.details.data.pan_no}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Address</td>
      <td>{location.state.details.data.address},{location.state.details.data.state}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Email Address</td>
      <td>{location.state.details.data.email_id}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Employment Role</td>
      <td>{location.state.details.data.employment_role}</td>
    </tr> <tr>
      <td style={{fontWeight:"bolder"}}>Annual Income</td>
      <td>{location.state.details.data.annual_income}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Office Address</td>
      <td>{location.state.details.data.office_address}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Loan Amount</td>
      <td>{location.state.details.data.loan_amount}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Interest</td>
      <td>{location.state.details.Interest}</td>
    </tr>
    <tr>
      <td style={{fontWeight:"bolder"}}>Bank Branch-Code</td>
      <td>{location.state.details.data.bank_branch}</td>
    </tr>


  </tbody>
    </table>
    <div className="btn">
          <button onClick={()=>{navigate('/list')}} >Back</button>
        </div>
        <br/><br/>
        </div>

);
}
export default View;