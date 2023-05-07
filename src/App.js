import "./App.css";
import exclude from "./image/Exclude.png";
import { FaSearch } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import img1 from './image/img1.png';
import { useState,useEffect } from "react";
import img2 from './image/img2.png';
import img3 from './image/img3.png';
import img4 from './image/img4.png';
import events from './event.json';
import Filter from "./components/Filter";

function App() {
   const eventsList = events;
  const imgs = [img2,img4,img1,img2,img4,img3]


  
  const [selectEvents,setSelectedEvents] = useState("Tüm-Etkinlikler")
  const [filtered,setFiltered]=useState(eventsList)
  const [search,setSearch]=useState("")
  const [ajanda,setAjanda]=useState([])
  const [openFilter,setOpenFilter]=useState(false)
  useEffect(() => {
    if (selectEvents === "Tüm-Etkinlikler") 
      setFiltered(eventsList);
     else if (selectEvents == "tiyatro") 
      setFiltered(eventsList.filter((item) => item.category == "tiyatro"));
     else if (selectEvents === "konser") 
      setFiltered(eventsList.filter((item) => item.category == "konser"));
     else if (selectEvents == "stand-up") 
      setFiltered(eventsList.filter((item) => item.category == "stand-up"));
      else if (selectEvents === "sinema") 
      setFiltered(eventsList.filter((item) => item.category == "sinema"));
      else if (selectEvents === "Çocuk") 
      setFiltered(eventsList.filter((item) => item.category == "Çocuk"));
    
  }, [selectEvents]);

  const ajandaCheck = (item)=>{
    const check = ajanda.find(items=>items.id==item.id)
    if(check){
      setAjanda(ajanda.filter(items=>items.id!=item.id))
    }
    else {
      setAjanda([{
        ...item,
        active:true
    },  ...ajanda])
    }
  }
  
 
 
  return (
    <div>
     
       <div className="xxs:hidden  lg:flex justify-center m-10">
        <img src={exclude}></img>
      </div>
      <div>
        <h1 className="xxs:my-10 md:my-12 text-center text-2xl font-galanoExtraBold">ETKİNLİKLER</h1>
        <div className=" xxs:truncate h-20 grid grid-cols-12  items-center">
          <div className="xxs:gap-3 xs:mx-5 xs:gap-6 sm:gap-5 sm:col-start-1 sm:col-end-12 sm:justify-center md:gap-10 lg:col-start-3 lg:col-span-7 lg:justify-center  flex  lg:gap-10 items-center  ">
            <a href="#" className={`${selectEvents=="Tüm-Etkinlikler" ? "activeButtons" : null} `}
            onClick={()=>setSelectedEvents("Tüm-Etkinlikler")}>Tüm Etkinlikler</a>
            <a href="#" className={`${selectEvents=="tiyatro" ? "activeButtons" : null}`} onClick={()=>setSelectedEvents("tiyatro")}>Tiyatro</a>
            <a href="#" className={`${selectEvents=="konser" ? "activeButtons" : null}`}
            onClick={()=>setSelectedEvents("konser")}>Konser</a>
            <a href="#" className={`${selectEvents=="stand-up" ? "activeButtons" : null}`}
            onClick={()=>setSelectedEvents("stand-up")}>Stand Up</a>
            <a href="#" className={`${selectEvents=="sinema" ? "activeButtons" : null}`}
            onClick={()=>setSelectedEvents("sinema")}>Sinema</a>
            <a href="#" className={`${selectEvents=="Çocuk" ? "activeButtons" : null}`}
            onClick={()=>setSelectedEvents("Çocuk")}>Çocuk</a>
          </div>
          <div className="xxs:hidden  md:hidden lg:mr-10 lg:block col-start-11 col-span-2">
            <label class="relative block float-right ">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch />
              </span>
              <input
                class=" placeholder:italic placeholder:text-slate-400 block bg-white w-50 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Etkinlik Ara"
                type="text"
                name="search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div> 
      <div className="xxs:justify-end sm:justify-end w-full h-13 flex md:justify-between  sm:px-10 lg:px-20 items-center bg-gray-100">
        <a className="xxs:hidden md:block" onClick={()=>setOpenFilter(!openFilter)}>Filtreler</a>
        <a className="xs:mx-5 flex items-center gap-2"><i> <FaCalendarDay/></i>Takvimde Gör</a>
      </div>
    {
      openFilter ? 
      <Filter/> : null
    }
      <div className="xxs:grid-cols-1  grid md:grid-cols-2 lg:grid-cols-1 md:gap-12 md:mx-auto   lg:mx-auto lg:w-105 ">

      {
        filtered.filter((event)=>{
          if(event.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
          
          return event
        }).map((event,index)=>(
          
          <div className="xxs:mt-5 xxs:container xxs:mx-auto xxs:col-span-1    lg:h-51 flex xxs:flex-col xxs:w-90 xxs:h-99 md:col-span-1 lg:flex-row border-solid border-2  lg:mt-10 lg:w-105">
          <div class="  relative  flex xxs:flex-col lg:flex-row  lg:basis-5/12">
        <div className="xxs:absolute xxs:w-full  lg:relative lg:basis-5/12 bg-black h-full">
         
        </div>
        <div className="xxs:relative xxs:top-5 lg:absolute lg:right-5 basis-7/12 self-center">
        <h5 className={`xs:relative xs:w-28 xs:-top-2 xs:-left-10   lg:absolute lg:w-28 lg:-left-8 lg:top-3 text-white px-4 bg-${event.category}`}>{event.category.toUpperCase()}</h5>
          <img className="" src={imgs[event.id-1]}/>
        </div>
      </div>
      <div class="flex xs:px-7 xxs:flex-col lg:flex-row lg:basis-7/12">
        <div className="basis-4/6">
          <h1 className={`${ajanda.find(item=>item.id==event.id) ? "text-active":null} mt-6 mb-4 font-GalanoGrotesqueMedium text-xl`}>{event.title}</h1>
          <p className="xs:hidden lg:block mb-1 text-stone-400">{event.location}</p>
          <p className="text-base font-GalanoGrotesqueRegular">{event.description}</p>
        </div>
        <div className="flex xs:my-3 xs:gap-5 xs:flex-row lg:flex-col lg:gap-0 basis-2/6 justify-center font-GalanoGrotesqueRegular">
          <button className="sm:w-6/12 lg:w-10/12  bg-pink py-2 px-10 text-white">Bilet Al</button>
          <a role="button" onClick={()=>ajandaCheck(event)} className=" lg:my-2 xxs:items-center flex gap-2 lg:items-center "><i className="border xxs:h-2/5 lg:h-full rounded-full border-black   lg:p-1 text-sm  "><FaPlus /></i> 
          {`${ajanda.find(item=>item.id==event.id) ? "Takvime eklendi" : "Takvime Ekle"}`}</a>
        </div>
      </div>
    
          </div>
        ))
        
      }
     
      </div>
    </div>
  );
}

export default App;
