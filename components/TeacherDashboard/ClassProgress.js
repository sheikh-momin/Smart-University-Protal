import React from 'react'

const ClassProgress = () => {
  return (
    <>

<div className=" card bg-[#9232E9] text-white shadow-xl p-12 ">
<h2 className="text-[#D1B0F9] card-title grid justify-center mb-14">My Class Progress</h2>
      <div className="grid grid-cols-3 gap-12 justify-center ">
<div className="grid justify-center">
<div className="radial-progress bg-[#6230B6] text-[#D1B0F9] border-4 border-[#6230B6]" style={{"--value":70}}>90%</div>
<div> <p className="text-center">Compouter </p> </div>
</div>

<div className="grid justify-center">
<div className="radial-progress  bg-[#6230B6] text-[#D1B0F9] border-4 border-[#6230B6]" style={{"--value":70}}>70%</div>
<div> <p className="text-center">Python </p> </div>
</div>

<div className="grid justify-center">
<div className="radial-progress  bg-[#6230B6] text-[#D1B0F9] border-4 border-[#6230B6]" style={{"--value":70}}>80%</div>
<div> <p className="text-center">React </p> </div>
</div>
      </div>

</div>
    </>
  );
}

export default ClassProgress