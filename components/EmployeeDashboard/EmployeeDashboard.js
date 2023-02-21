import EmployeeChart from "./EmployeeChart";
import EmployeeDetails from "./EmployeeDetails";
import { IoIosPeople } from 'react-icons/io';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { BiMessageSquareX } from 'react-icons/bi';

const EmployeeDashboard = () => {
  return (
    <div className="md:w-3/4 w-full bg-tranparent ">
      <section className="">
        <h2></h2>
        <div>
          <EmployeeDetails></EmployeeDetails>

          {/* student */}
          <div className="grid grid-cols-3 gap-4 md:w-9/12 md:mx-auto mx-5 text-black mt-10 mb-10">
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h2 className="md:text-xl">11000</h2>
              <h4 className="md:text-2xl">New Admission</h4>
              <progress
                className="progress progress-info lg:w-56 sm:24"
                value="100"
                max="100"
              ></progress>
              <h4 className="md:">10% higher than last month</h4>
            </div>
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h2 className="md:text-xl">60800</h2>
              <h4 className="md:text-2xl">Total Students</h4>
              <progress
                className="progress progress-accent lg:w-56 sm:24"
                value="100"
                max="100"
              ></progress>
              <h4 className="md:">8% higher than last month</h4>
            </div>
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h2 className="md:text-xl">12521</h2>
              <h4 className="md:text-2xl">Master</h4>
              <progress
                className="progress progress-secondary lg:w-56 sm:24"
                value="100"
                max="100"
              ></progress>
              <h4 className="md:">4% higher than last month</h4>
            </div>
          </div>

          {/* Teacher */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:w-9/12 md:mx-auto mx-5 text-black mt-10 mb-10">
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h1 className="md:text-4xl text-white"><IoIosPeople className="bg-orange-500 p-1 rounded-lg"></IoIosPeople></h1>
              <h4 className="md:text-xl mt-7">Total Employee</h4>
              <h2 className="md:text-3xl font-bold mt-5">1.5470</h2>
              <p>Task</p>
              <p className="mt-5"><span className="text-green-600">-25%</span> This Month</p>
            </div>

            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h1 className="md:text-4xl text-white"><BsFillBriefcaseFill className="bg-indigo-600 p-1 rounded-lg"></BsFillBriefcaseFill></h1>
              <h4 className="md:text-xl mt-7">Total Tasks</h4>
              <h2 className="md:text-3xl font-bold mt-12">2.5470</h2>
              <p>Task</p>
              <p className="mt-5"><span className="text-green-600">-25%</span> This Month</p>
            </div>

            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h1 className="md:text-4xl text-white"><BiMessageSquareCheck className="bg-teal-500 p-1 rounded-lg"></BiMessageSquareCheck></h1>
              <h4 className="md:text-xl mt-7">Completed Tasks</h4>
              <h2 className="md:text-3xl font-bold mt-5">1.2430</h2>
              <p>Task</p>
              <p className="mt-5"><span className="text-green-600">-25%</span> This Month</p>
            </div>
            <div className="bg-white md:p-8 p-2 rounded-xl">
              <h1 className="md:text-4xl text-white"><BiMessageSquareX className="bg-red-500 p-1 rounded-lg"></BiMessageSquareX></h1>
              <h4 className="md:text-xl mt-7">Completed Tasks</h4>
              <h2 className="md:text-3xl font-bold mt-5">1.2430</h2>
              <p>Task</p>
              <p className="mt-5"><span className="text-green-600">-25%</span> This Month</p>
            </div>

            <div className="bg-white md:p-8 p-2 rounded-xl col-span-2 md:text-xl">
              <h2>Complete Task Target</h2>
              <div className="grid justify-items-center mt-10"> 
                <div className="radial-progress text-purple-500" style={{ "--value": "60", "--size": "12rem", "--thickness": "2rem" }}>10,580</div>
              </div>
              
            </div>

          </div>

          {/* Employee */}
          <div className="md:grid  md:grid-cols-2 lg:grid-cols-4  gap-4 md:w-9/12 md:mx-auto mx-5 text-black mt-5 mb-10">
            <div className="bg-white md:p-8 p-2 rounded-xl mt-5 md:text-xl">
              <h2>Task Target Actual vs Prediction</h2>
              <div className="grid justify-items-center mt-20">
                <div className="radial-progress text-primary" style={{ "--value": "80", "--size": "12rem", "--thickness": "1rem" }}>80%</div>
              </div>
            </div>

            <div className="bg-white md:p-8 p-2  rounded-xl mt-5">
              <EmployeeChart ></EmployeeChart> 
            </div>

            <div className="bg-white md:p-8 p-2 col-span-2 rounded-xl mt-5">
              <h4 className="md:text-xl ">Top Employee</h4>
              <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full ">

                  <thead>
                    
                  </thead>
                  <tbody>

                    <tr>
                      
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Mominul Islam</div>
                            <div className="text-sm opacity-50">Counter Manager</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Daffodil International University

                      </td>
                      <td>194 Tasks</td>
                      <th>
                        <td className="text-green-500">1.230pts</td>
                      </th>
                    </tr>


                    

                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/330897836_935818007576155_7654230450954393259_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGsZ6Omif6d6NuTIXJUsA8DTf47tmemLRxN_ju2Z6YtHGxeJDz4b2sZEwvlJuoOsZ7Ol44jpdaqkf6gkPQXvDNt&_nc_ohc=HGveSY2iJO8AX_z-ZX5&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRPApiPny6fEHZP1X_X6yMnus4MpKqo5-cni5WLN_ij5Q&oe=6417064A" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Shahanaz Ahmed Nishi</div>
                            <div className="text-sm opacity-50">Counter Manager</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        International Islamic University Chittagong
                      </td>
                      <td>194 Tasks</td>
                      <th>
                        <td className="text-green-500">1.225pts</td>
                      </th>
                    </tr>


                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/254250688_2021837944646440_5971513430605485750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHerq6wWFdzL7TK0K_6bN6LNLaAZ1LcWmo0toBnUtxaankWraBTq5e8c-yMB5vLpFnioRrxz4CYYuP-OJCez4wr&_nc_ohc=jlGYHyMddKAAX_-OIil&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCl_gDMK42jhS8lqckH65KvB-7Dn4kZ77vGD3fWLjJNsQ&oe=63F421E0" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Tanvirul Islam</div>
                            <div className="text-sm opacity-50">Counter Manager</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Eastern University

                      </td>
                      <td>194 Tasks</td>
                      <th>
                        <td className="text-green-500">1.220pts</td>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/327828452_900645497862676_1184096148840845348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGViogt26_x02byeEP6NSF-wYzuw1pQVXbBjO7DWlBVdk3i95C1wGzc5_Ws_EhVqfbLXxY5D93iYko8jfAwYfCl&_nc_ohc=PbJ-mGkFKKYAX8dQ7f1&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRt4Cs5fIA4s5JGKNRu20OHbR0YwPUbdAl4eugMQvEKUg&oe=641703A2" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Afsana Tasnim Nishat</div>
                            <div className="text-sm opacity-50">Counter Manager</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Metropolitan University
                      </td>
                      <td>194 Tasks</td>
                      <th>
                        <td className="text-green-500">1.215pts</td>
                      </th>
                    </tr>
                    


                  </tbody>

                  

                </table>
              </div>
            </div>
            
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
