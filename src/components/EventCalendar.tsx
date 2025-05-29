"use client";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import Calendar from "react-calendar";
import Image from 'next/image';
import { calendarEvents } from "@/lib/data";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
// TEMPORARY
const events = [
  {
    id: 1,
    title: "Code Your Future: Job-Ready Programming Skills",
    time: "9:00 AM - 11:00 AM WAT",
    description: "Kickstart your tech career with this Zoom workshop!."
  },
  {
    id: 2,
    title: "Cybersecurity Essentials for the Workplace",
    time: "1:00 PM - 3:00 PM WAT",
    description: "Boost your employability with this Google Meet course on cybersecurity fundamentals."
  },
  {
    id: 3,
    title: "Cloud Computing for Career Success",
    time: "5:00 PM - 7:00 PM WAT",
    description: "Get job-ready with this Zoom training on cloud computing!."
  }
]; 
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
    return (
    <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between ">
            <h1 className="text-xl font-semibold my-4">Upcoming Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
        <div className="flex flex-col gap-4">
            {events.map((event) => (
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaBlue even:border-t-lamaPurple " 
                key={event.id}>
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{event.title}</h2>
                    <span className="text-sm text-gray-500">{event.time}</span>
                </div>
                <p>{event.description}</p>
                 </div>
            ))}
        </div>
        </div>
  );
}
export default EventCalendar;