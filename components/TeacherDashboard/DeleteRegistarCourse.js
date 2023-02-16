import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";


const DeleteRegistarCourse = ({ semester, email }) => {
  const { user } = useContext(AuthContext)
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const [Request, setRequest] = useState('Accept Request')

 

  const handleDeleteRegisterCourse = () => {
    const proceed = window.confirm('Are you sure you want to delete this Courses?');
    setRequest('Deleted')
  }
  return (
    <div>
      <button onClick={handleDeleteRegisterCourse} className={`${Request =="Deleted" ? "disabled" : "btn btn-success"}`}>{Request}</button>
    </div>
  );
};

export default DeleteRegistarCourse;