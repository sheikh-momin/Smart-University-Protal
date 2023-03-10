import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../Loader';

const ShowAllTeacher = () => {
  const [showAllTeacher, setShowAllTeacher] = useState([]);
  const [teacherDetails,setTeacherDetails]=useState([]);
  const [loading, setLoading] = useState([]);
  const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://smart-university-protal-server-coral.vercel.app/teacherDetails')
            .then(res => res.json())
            .then(data => setShowAllTeacher(data))
            setLoading(false);
    }, [showAllTeacher])

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete this ID?');
    if (proceed) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/teacherDetails/${id}`, {
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
      
        fetch(`https://smart-university-protal-server-coral.vercel.app/teacherDetails/${_id}`)
            .then(res => res.json())
            .then(data => setTeacherDetails(data))
            console.log(teacherDetails)
           
    

    }

    return (
        <div>
            
        <div className="overflow-x-auto md:w-1/2 mx-auto">
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
        showAllTeacher.map(teacher=><tr>
        
          <td>
            <div className="flex items-center space-x-3">
              
               
              </div>
              <div>
                <div className="font-bold">{teacher.email}</div>
                
              </div>
           
          </td>
          <td>
            
            <span className="">{teacher.name}</span>
          </td>
          
          <th>
          <label onClick={()=>itsClicked(teacher._id)} htmlFor="my-modal" className="btn btn-ghost btn-xs mr-5">User Info</label>
            <label onClick={() => handleDelete(teacher._id)} className="btn btn-secondary bg-red btn-xs">Delete</label>
          {/* The button to open modal */}
{/* <label htmlFor="my-modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div className="card   ">
  <figure><img className='h-48' src={teacherDetails.img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name:{teacherDetails.name}</h2>
    <p>Contact :{teacherDetails.contact}</p>
    <p>Designation :{teacherDetails.designation}</p>
    <p>Department :{teacherDetails.department}</p>
    
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

export default ShowAllTeacher;