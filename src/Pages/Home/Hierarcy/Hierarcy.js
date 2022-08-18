import React, { useEffect, useState } from 'react';

const Hierarcy = () => {
    const [employees,setEmployees]=useState([])
    useEffect(()=>{
        
        fetch('https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees')
        .then(res=>res.json())
        .then(data=>
           {
               setEmployees(data)
               
           }
           )
   
       },[])
    return (
        <div>
            {
                employees.map((employee)=><h1>{employee.first_name} {employee.last_name} {employee.manager_id}</h1>)
            }
        </div>
    );
};

export default Hierarcy;