import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { examsData, resultsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Result = {
  id: number;
   subject: string;
   class: string;
   teacher: string;
   student: string;
   type: "exam" | "assignment";
    date: string;  
    score: number;

   
  };

const columns = [
  {
    header: "Course Title",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
   },
   {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
   },
     {
    header: "lecturer",
    accessor: "teacher",
    className: "hidden md:table-cell",
      },
      {
    header: "Department",
    accessor: "class",
    className: "hidden md:table-cell",
     },
      
      {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
      },
       
  
    {
    header: "Action",
    accessor: "action",
  },
];

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
     
       
     
       <td>
        <div className="flex items-center gap-2">
         
          {role === "admin" && (
            <>
             <FormModal table="parent" type="update" data={item} />
             <FormModal table="parent" type="delete" id={item.id} />
             </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaRed">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaRed">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
             {role === "admin" && (
              <FormModal table="result" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;