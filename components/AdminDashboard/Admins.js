import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import Chart1 from "../../components/AdminDashboard/Chart1";
import Chart2 from "./Chart2";

const Admins = () => {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 md:w-10/12 md:mx-auto mx-5 text-black mt-10 mb-10">
          <div className="bg-white md:p-8 p-2 rounded-xl">
            <div className="flex gap-36 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
                alt=""
                className="w-20 h-20"
              />
              <div>
                <p className="text-xl ">New Students</p>
                <h2 className="md:text-xl text-green-600 text-right">758</h2>
              </div>
            </div>
            <div className="flex items-center">
              <BsArrowUpRight className="text-2xl text-green-600 mt-4 mr-2"></BsArrowUpRight>
              <h2 className="text-xl mt-4 text-left">
                10% Higher Than Last Month
              </h2>
            </div>
          </div>
          <div className="bg-white md:p-8 p-2 rounded-xl">
            <div className="flex gap-36 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4207/4207253.png"
                alt=""
                className="w-20 h-20"
              />
              <div>
                <p className="text-xl ">Total Courses</p>
                <h2 className="md:text-xl text-green-600 text-right">125</h2>
              </div>
            </div>
            <div className="flex items-center">
              <BsArrowDownRight className="text-2xl text-orange-600 mt-4 mr-2"></BsArrowDownRight>
              <h2 className="text-xl mt-4 text-left">7% less Than Last Year</h2>
            </div>
          </div>
          <div className="bg-white md:p-8 p-2 rounded-xl">
            <div className="flex gap-36 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3048/3048712.png"
                alt=""
                className="w-20 h-20"
              />
              <div>
                <p className="text-xl ">Total Teachers</p>
                <h2 className="md:text-xl text-green-600 text-right">89</h2>
              </div>
            </div>
            <div className="flex items-center">
              <BsArrowUpRight className="text-2xl text-green-600 mt-4 mr-2"></BsArrowUpRight>
              <h2 className="text-xl mt-4 text-left">
                10% Higher Than Last Month
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="card w-96 shadow-xl m-5 h-[400px]">
          <figure className="px-2 pt-5 m">
            <img
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=oKhmIHMJ-6IAX8kdbtY&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfB5TW6XH6__U4h27Un1-8ruzV-qMWpMje86QTKV-KVGHw&oe=63F4999A"
              alt="Shoes"
              className="rounded-xl w-56 h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="">Mominul Islam</h2>
            <p className="text-xl">Daffodil University</p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-96 shadow-xl m-5 h-[400px]">
          <figure className="px-2 pt-5 m">
            <img
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/254250688_2021837944646440_5971513430605485750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHerq6wWFdzL7TK0K_6bN6LNLaAZ1LcWmo0toBnUtxaankWraBTq5e8c-yMB5vLpFnioRrxz4CYYuP-OJCez4wr&_nc_ohc=jlGYHyMddKAAX_-OIil&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfCl_gDMK42jhS8lqckH65KvB-7Dn4kZ77vGD3fWLjJNsQ&oe=63F421E0"
              alt="Shoes"
              className="rounded-xl w-56 h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="">Tanvirul Islam</h2>
            <p className="text-xl">Eastern University</p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-96 shadow-xl m-5 h-[400px]">
          <figure className="px-2 pt-5 m">
            <img
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/330897836_935818007576155_7654230450954393259_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGsZ6Omif6d6NuTIXJUsA8DTf47tmemLRxN_ju2Z6YtHGxeJDz4b2sZEwvlJuoOsZ7Ol44jpdaqkf6gkPQXvDNt&_nc_ohc=HGveSY2iJO8AX_z-ZX5&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRPApiPny6fEHZP1X_X6yMnus4MpKqo5-cni5WLN_ij5Q&oe=6417064A"
              alt=""
              className="rounded-xl w-56 h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="">Shahanaz Ahmed Nishi</h2>
            <p className="text-xl">
              International Islamic University Chittagong
            </p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-96 shadow-xl m-5 h-[400px]">
          <figure className="px-2 pt-5 m">
            <img
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/331234198_588621963120456_7258472469021157050_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHP_Vn4VFR6viOtaIoEH2kXer41d5xaCMl6vjV3nFoIyb7EDsS1g8NcLC1p7qaVEl7b5jbS7SDBHgeW2vBcHEu7&_nc_ohc=xeiWyoXXun8AX8QWQpB&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdTbhNQkZ_q1w1SibVDysg-Sl3hFoBa2fBGivDCWOjLE1Q&oe=6416E2FE"
              alt="Shoes"
              className="rounded-xl w-56 h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="">Ruhul Amin</h2>
            <p className="text-xl">Varendra University </p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-96 shadow-xl m-5 h-[400px]">
          <figure className="px-2 pt-5 m">
            <img
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/327828452_900645497862676_1184096148840845348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGViogt26_x02byeEP6NSF-wYzuw1pQVXbBjO7DWlBVdk3i95C1wGzc5_Ws_EhVqfbLXxY5D93iYko8jfAwYfCl&_nc_ohc=PbJ-mGkFKKYAX8dQ7f1&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRt4Cs5fIA4s5JGKNRu20OHbR0YwPUbdAl4eugMQvEKUg&oe=641703A2"
              alt="Shoes"
              className="rounded-xl w-56 h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="">Afsana Tasnim Nishat</h2>
            <p className="text-xl">Metropolitan University</p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-96 shadow-xl m-5 h-[400px]">
          <figure className="px-2 pt-5 m">
            <img
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.18169-9/11891973_710064709099278_5438857923534937206_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeG8j0ip3xVnQhaFiBi7n9vF73fYiGBwZnPvd9iIYHBmc2MnQkQqlQcZp6bVBHUnv_r9ZtMn9WAlVM_k7C3zLusz&_nc_ohc=jRoMgySVxPUAX9vHGXU&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfA9l4Tqag3kegXSpgHgxvDgyyYshN2H6ksX-v4uBlBGOQ&oe=6416DD90"
              alt="Shoes"
              className="rounded-xl w-56 h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="">Obaidul Hasan</h2>
            <p className="text-xl">Daffodil University</p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div> */}
      <div className="grid lg:grid-cols-6 sm:grid-cols-1 md:grid-cols-3 gap-4 md:w-10/12 md:mx-auto mx-5 text-black mt-10 mb-10">
        <div className="bg-white rounded-xl py-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/274183546_630249951384730_1830564394306902399_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGkClewk6XIArDBZdxb8e5gUh2oRghHggdSHahGCEeCB7mdFMre8jN2Oy0NkXw6UMkxH2IwCt2ZpdWpmnFNmIPB&_nc_ohc=LBIeoN6MDVEAX-KsLt1&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBGS13P3FEPBGgLUr7n0B1QO0begZw5dyEtH7UzBn7vGQ&oe=63FA885A" />
            </div>
          </div>
          <p className="text-xl ">Mominul Islam</p>
        </div>
        <div className="bg-white rounded-xl py-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/254250688_2021837944646440_5971513430605485750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHerq6wWFdzL7TK0K_6bN6LNLaAZ1LcWmo0toBnUtxaankWraBTq5e8c-yMB5vLpFnioRrxz4CYYuP-OJCez4wr&_nc_ohc=CAFX2SIsmkUAX_t8DVf&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBYpF2C8xiHhS1I1Dv_xkwkiIxKHbFMX9kRymNGCZiB5A&oe=63FA10A0" />
            </div>
          </div>
          <p className="text-xl ">Tanvirul Islam</p>
        </div>
        <div className="bg-white rounded-xl py-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/330897836_935818007576155_7654230450954393259_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGsZ6Omif6d6NuTIXJUsA8DTf47tmemLRxN_ju2Z6YtHGxeJDz4b2sZEwvlJuoOsZ7Ol44jpdaqkf6gkPQXvDNt&_nc_ohc=HGveSY2iJO8AX_z-ZX5&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRPApiPny6fEHZP1X_X6yMnus4MpKqo5-cni5WLN_ij5Q&oe=6417064A" />
            </div>
          </div>
          <p className="text-xl ">Shahanaz Ahmed Nishi</p>
        </div>
        <div className="bg-white rounded-xl py-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/331234198_588621963120456_7258472469021157050_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHP_Vn4VFR6viOtaIoEH2kXer41d5xaCMl6vjV3nFoIyb7EDsS1g8NcLC1p7qaVEl7b5jbS7SDBHgeW2vBcHEu7&_nc_ohc=xeiWyoXXun8AX8QWQpB&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdTbhNQkZ_q1w1SibVDysg-Sl3hFoBa2fBGivDCWOjLE1Q&oe=6416E2FE" />
            </div>
          </div>
          <p className="text-xl ">Ruhul Amin</p>
        </div>
        <div className="bg-white rounded-xl py-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/327828452_900645497862676_1184096148840845348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGViogt26_x02byeEP6NSF-wYzuw1pQVXbBjO7DWlBVdk3i95C1wGzc5_Ws_EhVqfbLXxY5D93iYko8jfAwYfCl&_nc_ohc=PbJ-mGkFKKYAX8dQ7f1&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdRt4Cs5fIA4s5JGKNRu20OHbR0YwPUbdAl4eugMQvEKUg&oe=641703A2" />
            </div>
          </div>
          <p className="text-xl ">Afsana Tasnim Nishat</p>
        </div>
        <div className="bg-white rounded-xl py-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.18169-9/11891973_710064709099278_5438857923534937206_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeG8j0ip3xVnQhaFiBi7n9vF73fYiGBwZnPvd9iIYHBmc2MnQkQqlQcZp6bVBHUnv_r9ZtMn9WAlVM_k7C3zLusz&_nc_ohc=jRoMgySVxPUAX9vHGXU&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfA9l4Tqag3kegXSpgHgxvDgyyYshN2H6ksX-v4uBlBGOQ&oe=6416DD90" />
            </div>
          </div>
          <p className="text-xl ">Obaidul Hasan</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:mx-32 gap-4">
        <div>
          <Chart1></Chart1>
        </div>
        <div>
          <Chart2></Chart2>
        </div>
      </div>
    </div>
  );
};

export default Admins;
