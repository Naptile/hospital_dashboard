const links =[
    "Dashboard",
    "Patients",
    "Appointments",
    "Doctors",
    "Billing",
    "Settings"  
]

 function Sidebar(){
    return(
        <aside className="hidden md:flex flex-col w-64 bg-blue-700 min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-10">Medicare</h1>

            <nav className="space-y-4">
                {links.map((link,index)=>(
                    <p key={index} className="cursor-pointer hover:bg-blue-600 px-4 py-3 rounded-xl transition duration-300">{link}</p>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;