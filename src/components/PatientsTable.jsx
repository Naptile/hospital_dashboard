import patients from "../data/patients";

export default function PatientsTable() {
    const statusColors={
        Stable:"bg-green-100 text-green-700",
        Critical:"bg-red-100 text-red-700",
        Recovering:"bg-yellow-100 text-yellow-700"
    };

    return(
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6">Recent Patients</h2>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="pb-4">Name</th>
                        <th className="pb-4">Age</th>
                        <th className="pb-4">Condition</th>
                        <th className="pb-4">Status</th>
                    </tr>
                </thead>
        <tbody>
            {patients.map((patient)=>(
                <tr 
                key={patient.id} className="border-b hover:bg-gray-50 transition duration-300">
                    <td className="py-4">{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.condition}</td>
                    <td>
                        <span
                         className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[patient.status]}`}>
                            {patient.status}
                        </span>
                        </td>   
                     </tr>
            ))}
        </tbody>

            </table>
        </div>
    )

}