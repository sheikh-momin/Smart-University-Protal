import React from 'react';

const TeacherCourse = () => {
    return (
        <div>
            <div className="overflow-x-auto w-1/2 mx-auto mt-10">
  <table className="table w-full">


    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th className='bg-blue-500 text-white'>Name</th>
                <th className='bg-blue-500 text-white'>Subject Code</th>
                <th className='bg-blue-500 text-white'>Enrolled Student</th>
                <th className='bg-blue-500 text-white'></th>
      </tr>
    </thead>
    <tbody>


      <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">C Programming</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">c1098</span>
        </td>
        <td>16</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">Networking</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">n124</span>
        </td>
        <td>19</td>
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
              <div className="font-bold">Database</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">d234</span>
        </td>
        <td>18</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            
             
            </div>
            <div>
              <div className="font-bold">Algoritthm</div>
              
            </div>
         
        </td>
        <td>
          
          <span className="">a76</span>
        </td>
        <td>16</td>
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

export default TeacherCourse;