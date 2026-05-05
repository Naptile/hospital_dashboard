import appointments from "../data/appointment";
import AppointmentCard from "./AppointmentCard";
export default function Appointments() {
    return(
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Upcomming Appointments</h2>

            <div className="space-y-4">
                {appointments.map((appointments)=>(
                    <AppointmentCard
                    key={appointments.id}
                    patient={appointments.patient}
                    doctor={appointments.doctor}
                    time={appointments.time}
                    />))}
            </div>
        </div>
    )
}