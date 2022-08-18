import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Employees.css'
import React from 'react';
import { useState,useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { Button, makeStyles } from '@mui/material';
import { minWidth } from '@mui/system';
import { styled } from '@mui/material/styles';
import { getValue } from '@testing-library/user-event/dist/utils';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontFamily:'Segoe UI'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily:'Segoe UI'
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const Employees = () => {
    const [employees,setEmployees]=useState([])
    const [searchName,setSearchName]=useState("")
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate();
    useEffect(()=>{
     setLoading(true)
     fetch('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees')
     .then(res=>res.json())
     .then(data=>
        {
            setEmployees(data)
            setLoading(false)
        }
        )

    },[])
   
    return (
            <div>
                    <div>
                    <input type="text" 
                    className="input-class"
                    placeholder="Search By ID"
                    onChange={(e)=>setSearchName(e.target.value)}
                    />
                    <select>
                       <option></option>
                    </select>
                    
                    </div>
                    <TableContainer>
                    <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow className="row-data">
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="right">First Name</StyledTableCell>
                                <StyledTableCell align="right">Last Name</StyledTableCell>
                                <StyledTableCell align="right">Date of Birth</StyledTableCell>
                                <StyledTableCell align="right">Address</StyledTableCell>
                                <StyledTableCell align="right">Date of Joining</StyledTableCell>
                                <StyledTableCell align="right">Salary</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                        employees.filter((value)=>{
                          if(searchName==="")
                          {
                            return value;
                          }
                          else if(value.id.toLowerCase().includes(searchName.toLowerCase()))
                          {
                            return value;
                          }
                        }).map((employee,index) => (
                            <StyledTableRow key={employee.id}>
                            <StyledTableCell component="th" scope="row">
                            <Button onClick={()=>navigate(`/details/${employee.first_name}`)} variant="contained">{employee.id}</Button>
                        
                            </StyledTableCell>
                            <StyledTableCell align="right">{employee.first_name}</StyledTableCell>
                            <StyledTableCell align="right">{employee.last_name}</StyledTableCell>
                            <StyledTableCell align="right">{employee.date_of_birth}</StyledTableCell>
                            <StyledTableCell align="right">{employee.address}</StyledTableCell>
                            <StyledTableCell align="right">{employee.date_of_joining}</StyledTableCell>
                            <StyledTableCell align="right">{employee.salary}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    
                </div>
    );
};

export default Employees;