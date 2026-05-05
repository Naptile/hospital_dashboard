export default function AppointmentCard({patient,doctor,time}){
    return(
        <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-lg mb-1">{patient}</h3>
             <p className="text-gray-500 mb-2">{doctor}</p>

            <span className="text-blue-600 font-semibold">{time}</span>
        </div>
    )
}