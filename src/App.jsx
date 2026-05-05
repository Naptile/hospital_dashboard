import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import stats from "./data/stats";
import PatientsTable from "./components/PatientsTable";
import Appointments from "./components/Appointments";
import AddPatientModal from "./components/AddPatientModal";
export default function App(){
  const [openModal, setOpenModal]=useState(false);
  return(
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar/>
      <div className="flex-1">
        <Navbar onAdd={()=>setOpenModal(true)}/>
        <main className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat)=>(
              <StatCard 
              key={stat.id}
              title={stat.title} 
              color={stat.color}/>
            ))}
          </div>

         <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
            <PatientsTable/>
          </div>
            <Appointments/>
            <AddPatientModal
            isOpen={openModal}
            onClose ={()=>setOpenModal(false)}
            />
         </div>
        </main>
      </div>
    </div>
  )

}