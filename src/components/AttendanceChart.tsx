"use client"
import{BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Image from 'next/image';
import React from 'react';


const data = [
  { 
    name: 'Mon', 
    Present: 60,
    Absent : 40,   
}, 
 { 
    name: 'Tue', 
    Present: 70,
    Absent : 60,   
},  
 { 
    name: 'Wed', 
    Present: 90,
    Absent : 75,   
},  
 { 
    name: 'Thu', 
    Present: 94,
    Absent : 78,  
},  
 { 
    name: 'Fri', 
    Present: 65,
    Absent : 55,    
},     
]
const AttendanceChart = () => {
    return <div className="bg-white rounded-lg p-4 h-full"> 
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Attendance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} /> 
        </div>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart width={500} height={300} data={data} barSize={20} >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
                <Legend 
                align='left' 
                verticalAlign='top' 
                wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}
                />
                <Bar 
                dataKey="Present" 
                fill="#ffb2b2" 
                legendType="circle"
                radius={[10, 10, 0, 0]} 
                />
                <Bar 
                dataKey="Absent" 
                fill="#9ad5ff" 
                legendType="circle"
                radius={[10, 10, 0, 0]}  
                />
               </BarChart>
               </ResponsiveContainer>
    </div>
    
}

export default AttendanceChart
