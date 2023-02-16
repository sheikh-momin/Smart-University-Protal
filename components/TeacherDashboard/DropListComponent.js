import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";
import DeleteRegistarCourse from "./DeleteRegistarCourse";


const DropListComponent = () => {
  const [semesterDrop, setSemesterDrop] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)
  

  

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/drop`)
        .then(res => res.json())
        .then(data => {
          setSemesterDrop(data)
        })
      setLoading(false)
    }

  }, [user, semesterDrop])
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h1>drop list</h1>
    </div>
  );
};

export default DropListComponent;