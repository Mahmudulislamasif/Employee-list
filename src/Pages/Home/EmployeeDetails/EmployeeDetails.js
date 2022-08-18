import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './EmployeeDetails.css'
const EmployeeDetails = () => {
    const { id }=useParams();
    const [employeeDetails,setEmployeeDetails]=useState({})
    useEffect(()=>{
        fetch(`https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${id}`)
        .then(res=>res.json())
        .then(data=>setEmployeeDetails(data))
    },[id])
    return (
        <div>
            <div className="details-class">
            <h1>Name: {employeeDetails[0]?.first_name} {employeeDetails[0]?.last_name}</h1>
            <h1>Date of Birth: {employeeDetails[0]?.date_of_birth}</h1>
            <h1>Address: {employeeDetails[0]?.address}</h1>
            <h1>Date of Joining: {employeeDetails[0]?.date_of_joining}</h1>
            <h1>Salary: {employeeDetails[0]?.salary}</h1>
            <h1>Designation: {employeeDetails[0]?.designation}</h1>
            </div>
        </div>
    );
};

export default EmployeeDetails;