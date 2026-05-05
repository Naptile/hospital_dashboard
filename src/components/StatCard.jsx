export default function StatCard({title,value,color}){
    const colors ={
        blue:"bg-blue-500",
        green:"bg-green-500",
        purple:"bg-purple-500",
        red:"bg-red-500"
    };
    return(
        <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center ">
            <div>
                <p className="text-gray-500 mb-2">{title}</p>
                <h2 className="text-3xl font-bold">{value}</h2>
            </div>

            <div className={`w-14 h-14 rounded-xl ${colors[color]}`}></div>
        </div>
    )
}