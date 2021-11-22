import './App.css';
import {useForm} from "react-hook-form";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Form() {
  const storedValue= JSON.parse(localStorage.getItem("Forms Filled"));
  console.log("stored",storedValue)
  
  const name = localStorage.getItem('Forms Filled');
  var prefilledvalue;
  if(name){
    prefilledvalue={
      name:storedValue.name,
       mobile_no:storedValue.mobile_no,
       address: storedValue.address,
       annual_income: storedValue.annual_income,
       bank_branch:storedValue.bank_branch,
       email_id: storedValue.email_id,
       employment_role: storedValue.employment_role ,
       office_address: storedValue.office_address,
       pan_no:storedValue.pan_no,
       state: storedValue.state,
       aadhar_no:storedValue.aadhar_no,
       pincode:storedValue.pincode
    } 
  }else{
    prefilledvalue={
      name:"",
       mobile_no:"",
       address: "",
       annual_income: "",
       bank_branch:"",
       email_id:"" ,
       employment_role: "",
       office_address:"",
       pan_no:"",
       state:"",
       aadhar_no:"",
       pincode:""
  }
  }
  const {register,getValues,handleSubmit,formState:{errors,reset}} = useForm({
    defaultValues:prefilledvalue
  });
  const onreset=(data)=>{
   localStorage.clear();
 reset(data);
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    history('/List')
  };

 
const history=useNavigate();


const loan_amount = {...register("loan_amount",
{ required: "Loan Amount is Required",
//  pattern:{
//   value:/^[1-9]$/,message:"Not Valid"}
 }
)};

const [amount, setAmount] = useState();
    
  
  //  var a=watchloan
    // if(a<=20000){
    //   setAmount((a*5*1)/100);
    // }
    // if(a>=20001 || a<=100000){
    //   setAmount((a*rate_for_1L*1)/100)
    // }
    // if(a>=100001||a<=2500000){
    //   setAmount((a*rate_for_25L*1)/100)
    // }

const handleLoan=(e)=>{
  // console.log(e.target.value)
  let s= e.target.value;
  if(s<=20000){
      setAmount((s*5*1)/100);
     }
     if(s>=20001 && s<=100000){
         setAmount((s*6.5*1)/100)
       }
       if(s>=100001 && s<=9999999){
         setAmount((s*8*1)/100)
       }
}


const [prevloannumber,setPrevloannumber]= useState([])
    useEffect( ()=>{
      display()
     
    },[])
  const [branches,setBranches]= useState([])
    
  const display =async () =>{
    const res = await axios.get("http://localhost:9099/getlast");
    console.log(res.data);
    setPrevloannumber(res.data);
    const bran=await axios.get("http://localhost:9099/getbranch");
    // console.log(bran);
    setBranches(bran.data);
}
   

  var prevserial=prevloannumber.serialno;
  var newserial=Number(prevserial)+1;
  console.log(prevloannumber);
  console.log(newserial);


  var today=new Date();
  var month=Number(today.getMonth().toString())+1;
    var Loan_Number="LN"+today.getFullYear().toString()+month+newserial;
    console.log(Loan_Number)

    const onSubmit = (data) => {

      console.log(data)
      axios.post("http://localhost:9099/newloan",{
        serialno:newserial,
        data,
        Loan_no:Loan_Number,
        Interest:amount }).then((res)=>{ setOpen(true)
        })
      }
      let optionItems = branches.map((branch) =>
      <option key={branch.branchname}>{branch.branchname}</option>
  );
     
      return (
    <div>
      <div className="loanform">
      <form onSubmit={handleSubmit(onSubmit)} method="POST" id="bank_loan_form">
        <div className="cont">
        <div className="detailstitle">
          Personal Details
        </div>
        <div className="detailsinput">
        <div className="row" >
       
      
        <div className="fields">
            <label>Name(as per AadharCard) *</label>
            <input
            type="text"
            {...register("name", { required: "Name is Required",
            pattern:  { value:/^[a-z,A-z, ,]*$/,message:"Only Alphabets are allowed"}})} 
            />
        {errors.name &&(<div className="errordiv">{errors.name.message}</div>)}
       </div>
    
      
          <div className="fields">
            <label>Mobile No.</label>
            <input
            type="text"
            {...register("mobile_no", { required: "Mobile No is Required",
            pattern:  { value:/^[6-9]\d{9}$/,message:"Invalid Mobile No."}})} />
         {errors.mobile_no && (<div className="errordiv">{errors.mobile_no.message}</div>)}
          </div>
        
          <div className="fields">
        <label>Aadhar No. *</label>
        <input
           type="text"
       
           {...register("aadhar_no", { required: "Aadhar No is Required",
           pattern:  { value:/^[2-9]\d{3}[\s-]?\d{4}[\s-]?\d{4}$/,message:"Invalid Aadhar No."}})} />
        {errors.aadhar_no && ( <div className="errordiv">{errors.aadhar_no.message}</div>)}
        </div>

        <div className="fields">
        <label>Pan No. *</label>
        <input
           type="text"
           {...register("pan_no", { required: "Pan No is Required",
           pattern:  { value:/^[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/,message:"Invalid Pan No."}})} />
         {errors.pan_no && ( <div className="errordiv">{errors.pan_no.message}</div>)}
        </div> 
        <div className="row" >
          <div className="fields">
               <label>Address *</label>
               <input
               type="text"
                {...register("address", { required: "Address is Required"})}/>
                {errors.address && (  <div className="errordiv">{errors.address.message}</div>)}
          </div> 
          
          <div className="fields">
               <label>State  *</label>
               <input
                type="text"
               {...register("state", { required: "State is Required"})}/>
               {errors.state && (<div className="errordiv">{errors.state.message}</div>)} 
          </div>
           
          <div className="fields">
              <label>Pincode </label>
              <input type="text" {...register("pincode")}/>
             <div className="errordiv">{}</div> 
         </div>

         <div className="fields">
             <label>Email Addres</label>
             <input
              type="text"
             {...register("email_id", { required:'' ,
             pattern:  { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,message:"Invalid Email Address"}})} />
             {errors.email_id && ( <div className="errordiv"> {errors.email_id.message}</div> )}   
         </div> 
        </div>
        
        </div>
        </div>
        </div>
        
        <div className="cont">
        <div className="detailstitle">
          Employment Details
        </div>
        <div className="detailsinput">
        <div className="row" >
            <div className="fields">
                <label>Employment Role *</label>
               <input
                type="text"
                {...register("employment_role", { required: "Employment Role is Required",
                pattern:  { value:/^[a-z,A-z, ,]*$/,message:"Only Alphabets are allowed",max:{value:30,message:"Not more than 30 characters"}}})} />
               {errors.employment_role && ( <div className="errordiv"> {errors.employment_role.message}</div>)}
            </div>
    
            <div className="fields">
               <label>Annual Income (INR)*</label>
               <input
               type="text"
               {...register("annual_income", { required: "Annual Income is Required",
                pattern:  { value:/^[0-9]{5,8}$/,message:"Not less than 5 digits  "}})} />
               {errors.annual_income && (<div className="errordiv"> {errors.annual_income.message}</div>)}
             </div>
  
             <div className="fields">
                <label>Office Address</label>
               <input
                type="text"
               {...register("office_address", { required: ""})}/>
               {errors.office_address && (<div className="errordiv">{errors.office_address.message}</div>)}
              </div> 
        </div>
        </div>
        </div>


        <div className="cont">
        <div className="detailstitle">
          Loan Details
        </div>
        <div className="detailsinput">
        <div className="row" >
            <div className="fields">
                <label>Expected Loan Amount *</label>
                <input
                type="text"
                maxLength="7"
            
                {...loan_amount}
              onChange={handleLoan}
                />
                {errors.loan_amount && (<div className="errordiv">{errors.loan_amount.message}</div>)}
            </div>
            
            <div className="fields">
                <label>Interest P.A</label>
                <p className="interest" >Rs.{amount}</p>
                 <div className="errordiv">{}</div>
             </div>
   

             <div className="fields">
                <label>Bank Branch & Code *</label>
               <select  
                {...register("bank_branch", { required: "Branch Name is Required"})} >
                <option value="" selected>Select Branch</option>
                {optionItems}
               </select>
                {errors.bank_branch && ( <div className="errordiv">{errors.bank_branch.message}</div>)}
                </div>
          </div>
          </div>
          </div>
       
        <div className="btn">
          <button type="reset" onSubmit={handleSubmit(onreset)}>Reset</button>
         
          <button  type="button"onClick={() => {const values = getValues(); localStorage.setItem("Forms Filled",JSON.stringify(values))} }>Save</button>
          <button type="submit">Submit</button>
        </div>
       
        <br/><br/>
    
        </form>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Thank You!!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         <p style={{color:'black'}}> Your Loan Application has been Submitted Succussfully.<br/>
         <p style={{fontWeight:'bolder',color:'black'}}>{Loan_Number} </p>is your Application Number</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
        
      </div> 
     
   </div>

  );
}

export default Form;


