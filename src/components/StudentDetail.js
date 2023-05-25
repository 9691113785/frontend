import React, { useContext } from 'react'
import { store } from '../App';
import '../Styles/StudentDetail.css'
import { Link, useNavigate } from 'react-router-dom';

const StudentDetail = () => {
    const navigate = useNavigate();

    const context = useContext(store);

    const handledelete = (index) => {
        context.details.splice(index,1);
        // const user = {stuname:stuname}
       
        //   axios.post('http://localhost:8000/delete', user)
        // .then((res)=>console.log("data deleted"))
        // .catch((err)=>console.log(err))


        navigate('/studentdetails')

    }
    
    
  return (
    <div>
    <h1 className='user_heading'>User Details</h1>

    <table className="table">
      <thead>
        <tr>
          <th>User Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      
        {context.details && context.details.map((item,index) => {

            return(
                <tr key={index}>
                <td>{item.stuname}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>
                  <button onClick={()=>{handledelete(index)}}>Delete</button>
                  <Link to='/edituser' state={{dataa:index}}><button >Edit</button></Link>
                </td>
              </tr>

            )
        
         
        })}
      </tbody>
    </table>
    
    
   
    </div>
  )
}

export default StudentDetail
