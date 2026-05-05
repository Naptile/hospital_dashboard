 export default function Navbar({onAdd}){
    return(
        <header className="bg-white shadow-sm p-6 flex justify-between items-center ">
            <div >
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-gray-500">Welcom back, admin</p>
            </div>

            <div className="flex items-center gap-4">
                <button 
                onClick={onAdd}
            
                className="bg-blue-600 text-white px-5 py-2 rounded-xl" >
                    + add patient
                </button>
                <input type="text" placeholder="search..." className="border px-4 py-2 rounded-xl outline-none focus:border-blue-600"/>
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">NP</div>
            </div>
        </header>
    )
}