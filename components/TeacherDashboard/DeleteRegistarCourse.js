import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";


const DeleteRegistarCourse = ({ semester, email, drop }) => {
  const { user } = useContext(AuthContext)
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const [Request, setRequest] = useState('Accept Request')

 

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete this Student Course?');
    if (proceed) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/drop/${id}`, {
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
  
  return (
    <div>
      <button onClick={()=>handleDelete(drop._id)} className={`${Request =="Deleted" ? "disabled" : "btn btn-success"}`}>{Request}</button>
    </div>
  );
};

export default DeleteRegistarCourse;