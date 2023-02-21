import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../Loader";
import DeleteRegistarCourse from "./DeleteRegistarCourse";

const DropListComponent = () => {
  const [semesterDrop, setSemesterDrop] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-university-protal-server-coral.vercel.app/drop`)
        .then((res) => res.json())
        .then((data) => {
          setSemesterDrop(data);
        });
      setLoading(false);
    }
  }, [user, semesterDrop]);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="mx-5 md:mx-40 mt-5">
      <div className="overflow-x-auto">
        <div className=" mt-3">
          <h1 className="text-center rounded bg-blue-600 text-white md:text-xl  py-3 font-serif">
            Dropped Semester List{" "}
          </h1>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Semester</th>
              <th>Date</th>
              <th>Causes</th>
              <th>Why Drop</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {semesterDrop?.map((drop) => (
              <tr>
                <td>{drop.email}</td>
                <td>{drop.semester}</td>
                <td>{drop.date}</td>
                <td>{drop.causes}</td>
                <td>{drop.whyDrop}</td>
                <td>
                  <DeleteRegistarCourse
                    semester={drop.semester}
                    email={drop.email}
                    drop={drop}
                  ></DeleteRegistarCourse>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropListComponent;
