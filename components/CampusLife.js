import React from "react";

const CampusLife = () => {
  return (
    <div className="lg:my-24 lg:px-40 lg:py-24 px-4 mb-12 bg-emerald-900">
      {" "}
      <h2 className="text-3xl font-bold text-center text-white mb-6 font-serif italic">
        Campus Life
      </h2>
      {/* <h2 className="text-center font-bold text-2xl mb-5">
        Some Recent click of mine
      </h2> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <img
          className="h-96 w-full"
          src="https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcHVzJTIwbGlmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="h-96 w-full"
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="h-96 w-full"
          src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="h-96 w-full"
          src="https://images.unsplash.com/photo-1519664993241-d7c8f0ae7b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuaXZlcnNpdHklMjBsaWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="h-96 w-full"
          src="https://images.unsplash.com/photo-1588865198054-c83788106132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />

        <img
          className="h-96 w-full"
          src="https://media.istockphoto.com/id/1453679166/photo/embracing-after-graduation.jpg?b=1&s=170667a&w=0&k=20&c=ZOIQyLeh0ZziAvWHh-5WEN3SToy0cExvGNZHGFVs4xE="
          alt=""
        />
      </div>
    </div>
  );
};

export default CampusLife;