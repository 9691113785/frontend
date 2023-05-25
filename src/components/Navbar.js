import React from 'react';
import '../Styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { store } from '../App';

const Navbar = () => {
    const navigate = useNavigate();
    // const [getdataa, sgetdata] = useState([]);

// const context = useContext(store)
    const userdetails = () =>{
      // axios.get('http://localhost:8000/showdata').then((res)=>{
      //   console.log(res.data)
      //   sgetdata(res.data)
      // })
      // .catch((err)=>console.log(err))

      // context.setDetails(getdataa)
        navigate('/studentdetails')
    }
    const adduser = () =>{

            navigate('/adduser')
            
        
    }
    

  return (
    <div className='navbar'>
      <div className='logo'><img src='https://tse4.mm.bing.net/th?id=OIP.2CdqCLNa9XBGNpcEDpNCSwAAAA&pid=Api&P=0&h=180' alt='Error!'/></div>
      <div className='stu_route' onClick={userdetails}>User Details</div>
      <div className='add_user' onClick={adduser}>Add User</div>
    </div>
  )
}

export default Navbar
