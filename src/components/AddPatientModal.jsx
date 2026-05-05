export default function AddPatientModal ({isOpen,onClose}){
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justfy-center z-50">
            <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
                <div className="flex justfy-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Add Patient</h2>

                    <button 
                    onClick={onClose}
                    className="text-2xl"
                    >
                        x
                    </button>
                </div>

                <form className="space-y-4">
                    <input 
                    type="text"
                    placeholder="Patient name"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                    />

                     <input 
                    type="number"
                    placeholder="Age"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                    />

                     <input 
                    type="text"
                    placeholder="Condition"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                    />

                    <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Save Patient
                    </button>
                </form>
            </div>
        </div>
    )

}