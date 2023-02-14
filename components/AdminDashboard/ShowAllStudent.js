import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ShowAllStudent = () => {
  const [showAllStudent, setShowAllStudent] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/studentDetails')
            .then(res => res.json())
            .then(data => setShowAllStudent(data))
    }, [])

    return (
        <div>
            {
              console.log(showAllStudent)
            }
            <div className="overflow-x-auto w-1/2 mx-auto">
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
          <Link href={`studentDetails/${student._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>

            
          </th>
        </tr>)
      }


      <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">tan@vir.com</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">Tanvir</span>
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">emon@leader.com</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">Emon</span>
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">ni@shi.com</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">Nishi</span>
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">ni@shat.com</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">Nishat</span>
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

      
      

      
    </tbody>

    
    
  </table>
</div>
        </div>
    );
};

export default ShowAllStudent;