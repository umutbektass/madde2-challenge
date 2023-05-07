import React from 'react'

function Filter() {
  return (
    <div className=" bg-white z-40 absolute ml-16 w-75 h-102 border-solid border-2">
        <h1 className="mt-5 mb-2 ml-10 text-md font-galano">Etkinlik Mekanı</h1>
        <div className='flex flex-col gap-3 ml-5'>
        <label class="md:w-3/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
        Maximum Uniq Hall
      </span>
    </label>
    <label class="md:w-2/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
      Maximum Uniq Box
      </span>
    </label>
    <label class="md:w-3/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
      Maximum Uniq Lounge
      </span>
    </label>
    <label class="md:w-3/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
      Maximum Uniq Açıkhava
      </span>
    </label>
    <label class="md:w-2/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
        Bahçe Fuaye
      </span>
    </label>
    </div>
    <h1 className="mt-5 mb-2 ml-10 text-md font-galano">Etkinlik Tarihi</h1>
    <div className='flex flex-col gap-3 ml-5'>
        <label class="md:w-3/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
       Güncel Etkinlikler
      </span>
    </label>
    <label class="md:w-2/3 block text-black font-normal">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-md">
      Geçmiş Etkinlikler
      </span>
    </label>
    </div>  

    </div>
  )
}

export default Filter