import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Loader';

const ShowAllStudent = () => {
  const [showAllStudent, setShowAllStudent] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);
  const [loading, setLoading] = useState([]);
  const {user} =useContext(AuthContext)
    
    useEffect(() => {
        fetch('https://smart-university-protal-server-coral.vercel.app/studentDetails')
            .then(res => res.json())
            .then(data => setShowAllStudent(data))
            setLoading(false);
    }, [showAllStudent])


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete this ID?');
    if (proceed) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/studentDetails/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${user}`
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success('Deleted Successfully');
          }
        })
    }
  };


    if (loading) {
      return <Loader></Loader>;
    }
    const itsClicked= (_id)=>{
      console.log('its clicked',_id)
      
        fetch(`https://smart-university-protal-server-coral.vercel.app/studentDetails/${_id}`)
            .then(res => res.json())
            .then(data => setStudentDetails(data))
            console.log(studentDetails)
           
    

    }

    return (
        <div className='flex justify-center'>
            {
              console.log(showAllStudent)
            }
        <div className="overflow-x-auto md:w-1/2">
  <table className="table w-full">


    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>Email</th>
        <th>Name</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>


      {
        showAllStudent.map(student=><tr>
        
          <td>
            <div className="flex items-center space-x-3">
              
               
              </div>
              <div>
                <div className="font-bold">{student.email}</div>
                
              </div>
           
          </td>
          <td>
            
            <span className="">{student.name}</span>
          </td>
          
          <th>
          <label onClick={()=>itsClicked(student._id)} htmlFor="my-modal" className="btn btn-ghost btn-xs mr-5">User Info</label>
            <label onClick={() => handleDelete(student._id)} className="btn btn-secondary bg-red btn-xs">Delete</label>
          {/* The button to open modal */}
{/* <label htmlFor="my-modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div className="card   ">
  <figure><img className='h-48' src={studentDetails.img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name:{studentDetails.name}</h2>
    <p>Contact :{studentDetails.contact}</p>
    <p>Address :{studentDetails.address}</p>
    <p>BloodGroup :{studentDetails.bloodGroup}</p>
    
  </div>
</div>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Done</label>
    </div>
  </div>
</div>

            
          </th>
        </tr>)
      }


      
      
      

      
    </tbody>

    
    
  </table>
</div>
        </div>
    );
};

export default ShowAllStudent;