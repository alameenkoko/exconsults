import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excellence Consults",
  description: "Career Development Program",
};
<SpeedInsights />

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h- flex">
    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link 
        href="/" 
        className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/ex.png" alt="logo" width={32} height={32}/>
        <span className="hidden lg:block">Exconsults</span>
        </Link>
        <Menu />
    </div>
    {/* RIGHT */}
    <div className="w-[86%] md:w-[92%] lg:w-[61%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll ">
      <Navbar/>
      {children}
    </div>
  </div>
}
