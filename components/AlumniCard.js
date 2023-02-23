import Link from 'next/link';
import React from 'react';

const AlumniCard = () => {
    return (
        <div>
          <h1 className='text-center mb-6 text-teal-700 text-3xl font-bold italic font-serif'>Our Special Facilities</h1>
            <div class="flex  items-center justify-center bg-neutral-800">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?b=1&s=170667a&w=0&k=20&c=AW9NWK181bVsjnEK9sk25T3PmkEDAcbCdd1BhJRvL7I=" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Gym</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">In our university there have also a gym .we belive that besides study helath is very important</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://media.istockphoto.com/id/513438345/photo/portrait-of-confident-construction-worker-and-crowd.jpg?b=1&s=170667a&w=0&k=20&c=NKjgkMWajPIwU3By0l52Lw0A8VcQQQnOOLsxxqoHGm8=" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Job Placement Team</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">In our university we offer studentto lead their how to make their time ready for for job and we support them</p>
        <Link href='/jobplacement'><button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></Link>
        
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://media.istockphoto.com/id/1397331040/photo/bookshelves-fully-packed-brown-wood.jpg?b=1&s=170667a&w=0&k=20&c=8XSIWFIpdLu9jhtKC9h7LpubzqiTYjiMGlWBA6MzjZk=" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Library</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">In our university we have many collection of books that student can read very wellly and our library well furnished</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://media.istockphoto.com/id/1269963298/photo/young-african-american-student-on-his-way-to-the-university.jpg?b=1&s=170667a&w=0&k=20&c=t6AriPMnS7HIQaPeZH5AfYgx06nF_jXv-auKCGJX9ug=" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Transportaion</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have our own tranportaion That all our student can come our university very easyli.</p>
        <Link href='/campuslife'><button  class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></Link>
        
      </div>
    </div>
    
    
  </div>
  
</div>

        </div>
    );
};

export default AlumniCard;