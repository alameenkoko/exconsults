import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
    return (
        <div className=" flex-1 p-4 flex flex-col gap-4 xl:flex-row"> 
        {/* LEFT */}
<div className="w-full xl:w-2/3">
{/* TOP */}
<div className="flex flex-col lg:flex-row gap-4">
    
    
{/* USER INFO CARD */}
<div className="bg-lamaBlue py-6 px-4 rounded-md flex-1 flex gap-4">
    <div className="w-1/3">
    <Image 
    src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200" 
    alt="" 
    width={144} 
    height={144} 
    className="w-36 h-36 rounded-full object-cover"/>
    </div>
    <div className="w-2/3 flex flex-col justify-beteen gap-4">
    <h1 className="text-xl font-semibold">Aminu Yusuf</h1>
    <p className="text-sm text-gray-500">Builds innovative solutions that power our products/services</p>
    <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/blood.png" alt="" width={16} height={16} /> 
          <span>A+</span>
        </div>
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/date.png" alt="" width={16} height={16} /> 
          <span>May 2025</span>
        </div>
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/mail.png" alt="" width={16} height={16} /> 
          <span>support@exconsults.com</span>
        </div>
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/phone.png" alt="" width={16} height={16} /> 
          <span>07030298010</span>
        </div>
    </div>
        </div>
</div>
{/* SMALL CARDS */}
<div className="flex-1 flex gap-4 justify-between flex-wrap">
{/* CARD */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
   <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/> 
<div className="">
    <h1 className="text-xl font-semibold">90%</h1>
    <span className="text-sm text-gray-400">Attendance</span>
</div>
</div>
{/* CARD */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
   <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/> 
<div className="">
    <h1 className="text-xl font-semibold">6</h1>
    <span className="text-sm text-gray-400">Courses</span>
</div>
</div>
{/* CARD */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
   <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/> 
<div className="">
    <h1 className="text-xl font-semibold">2</h1>
    <span className="text-sm text-gray-400">Branches</span>
</div>
</div>
{/* CARD */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
   <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/> 
<div className="">
    <h1 className="text-xl font-semibold">3</h1>
    <span className="text-sm text-gray-400">Department</span>
</div>
</div>
</div>
</div>
{/* BOTTOM */}
<div className="mt-4 bg-white rounded-md p-4 h-[800px]">
  <h1>Lecturer`s Schedule</h1>
  <BigCalendar />

  </div>
</div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3">
        <div className="bg-white p-4 rounded-md flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-lamaBlue" href="/">Lecturer&apos;s Department</Link>
          <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">Lecturer&apos;s Students</Link>
          <Link className="p-3 rounded-md bg-lamaRed" href="/">Lecturer&apos;s Lessons</Link>
          <Link className="p-3 rounded-md bg-pink-50" href="/">Lecturer&apos;s Exam</Link>
          <Link className="p-3 rounded-md bg-LamaSkyLight" href="/">Lecturer&apos;s Assignments</Link>

          </div>
        </div>
        <Performance />

        <Announcements />

        </div>
        </div>
);
};

export default SingleTeacherPage;
