import React, {  useState } from 'react';
import '../Styles/AddUser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddUser = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(
        {
            stuname:"",
            department:"",
            salary:""
        }
    )




    const handlechange = (e)=>{
        e.preventDefault();
setData({...data, [e.target.name]:e.target.value})
console.log(data)
    }

const handlesubmit = (e) => {
        e.preventDefault();
        // context.details.push(data);
        // console.log(context.details)
axios.post('http://localhost:8000/adduser', data)
.then((res)=>console.log("data submitted"))
.catch((err)=>console.log(err))
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
      onChange={handlechange}

    />
    <label htmlFor="department">Department : </label>
    <input
      type="text"
      name='department'
      placeholder="Enter Department"
      className="input-field"
      onChange={handlechange}

    />
    <label htmlFor="salary">Salary : </label>
    <input
    type="text"
    name='salary'
    placeholder="Enter Salary"
    className="input-field"
    onChange={handlechange}

  />
    <button type="submit" className="submit-button" onClick={handlesubmit}>Submit</button>
  </form>
    </div>
  )
}

export default AddUser
