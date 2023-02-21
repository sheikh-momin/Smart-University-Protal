import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";


const StudentApplicationShow = () => {
  const { user } = useContext(AuthContext)
  const [application, setApplication] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/studentApplication`)
        .then(res => res.json())
        .then(data => {
          setApplication(data)
          setLoading(false)
        })
    }
  }, [user, application])

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete this ID?');
    if (proceed) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/studentApplication/${id}`, {
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
    return <Loader></Loader>
  }
  console.log(application);
  return (
    <div className='flex justify-center mx-10'>
      <div >
      {
          application?.map((result) => <div className='  mt-10'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium flex justify-around">
                <h2 className='font-mono font-xl font-semibold text-green-600'> Email:</h2>
                <p> {result.email}</p>
              </div>
              <div className="collapse-content">
                <h2 className='font-serif font-bold text-xl mt-5'>Semester: {result.semester }</h2>
                <h2 className='font-serif font-bold text-xl mt-5'>Instruction: {result.instruction }</h2>
                <h2 className='font-serif font-bold text-xl mt-5'>Subject: {result.applicationType}</h2>
                <p className='mt-5 font-serif font-lg'>{result.applicationBody}</p>
                <div>
                  <label onClick={() => handleDelete(result._id)} className="btn btn-secondary bg-red btn-xs">Delete</label>
                </div>
                
              </div>
            </div>
          </div>)
      }
        
      </div>
    </div>
  );
};

export default StudentApplicationShow;