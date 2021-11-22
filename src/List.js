import './App.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import View from './View.js';
import { useNavigate } from 'react-router';

function List() {
// const[det,setDet]=useState([])
  const [applist,setApplist]= useState([])
  useEffect( ()=>{
    display()
   },[])
  const display =async () =>{
    const res = await axios.get("http://localhost:9099/alllist");
    console.log(res.data);
    setApplist(res.data)
}
var history=useNavigate();
// console.log(applist)
 return(
   <div><br/>
     <table>
  <thead>
    <tr>
      <th scope="col">Loan Number</th>
      <th scope="col">Applicant Name</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Interest(P.A)</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
    {
      applist.map((e)=>{
        return(
          // <div>{e.details.data.name}</div>
          // <div>{e.details.data.pan_no}</div>
        
        //   <li class="table-row">
        //   <div class="col col-7" >{e.details.Loan_no}</div>
        //   <div class="col col-1" >{e.details.data.name}</div>
        //   <div class="col col-2" >{e.details.data.mobile}</div>
        //   <div class="col col-3" >{e.details.data.aadhar_no}</div>
        //   <div class="col col-5" >{e.details.data.address}</div>
        //   <div class="col col-4" >{e.details.data.loan_amount}</div>
        //   <div class="col col-6" >{e.details.data.mobile}</div>
        //   <div class="col col-7" >{e.details.Interest}</div>
              
        // </li>
        
  <tbody>
    <tr>
      <td data-label="Loan Number" style={{fontWeight:"bolder"}}>{e.details.Loan_no}</td>
      <td data-label="Applicant Name" style={{fontWeight:"normal"}}>{e.details.data.name}</td>
      <td data-label="Loan Amount">{e.details.data.loan_amount}</td>
      <td data-label="Interest(P.A)">{e.details.Interest}</td>
      <td data-label="Mobile No">{e.details.data.mobile_no}</td>
      <td><button className="view" onClick={()=>{history('/view',{state:e,replace:true})}}>View</button></td>
    </tr>
  </tbody>

        
        
          )
      })
    }</table>
   </div>
 
  );
}

export default List;
