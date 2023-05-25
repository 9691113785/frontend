import React, { useContext, useState } from 'react';
import '../Styles/AddUser.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { store } from '../App';
const EditUser = () => {
    const context = useContext(store);
    const navigate = useNavigate();
    
    const location = useLocation();
    const index = location.state.dataa;
    console.log(index);
    console.log(context.details[0].stuname)

    const [user, setUser] = useState({
        stuname:context.details[index].stuname,
        department:context.details[index].department,
        salary:context.details[index].salary,

    })

    const onchangehandler = (e) =>{
        e.preventDefault();
        setUser({...user, [e.target.name]:e.target.value})
console.log(user)
    }

    const onsubmithandler = (e) =>{
        e.preventDefault();
        context.details[index]=user;
        navigate('/studentdetails')
    }
  
  return (
    <div className='form_container'>
    <form>
    <label htmlFor="stuname">Name : </label>
    <input
      type="text"
      name='stuname'
      placeholder="Enter Name.."
      className="input-field"
      value={user.stuname}
      onChange={onchangehandler}
    />
    <label htmlFor="department">Department : </label>
    <input
      type="text"
      name='department'
      placeholder="Enter Department"
      className="input-field"
      value={user.department}
      onChange={onchangehandler}
    />
    <label htmlFor="salary">Salary : </label>
    <input
    type="text"
    name='salary'
    placeholder="Enter Salary"
    className="input-field"
    value={user.salary}
    onChange={onchangehandler}
  />
    <button type="submit" onClick={onsubmithandler} className="submit-button">Update</button>
  </form>
    </div>
  )
}

export default EditUser
