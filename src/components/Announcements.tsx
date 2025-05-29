const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
    <div className="flex justify-between items-center">
    <h1 className="text-xl font-semibold">Announcements</h1>
    <span className="text-xs text-gray-400">View All</span>
    </div>
    <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaBlue rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Event Reminder: Don&apos;t Miss Out!</h2>
                <span className="text-xs text-gray-400">
                    2025-06-06
                    </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              A quick heads-up about our upcoming event mark your calendars  
            </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Urgent: Action Required</h2>
                <span className="text-xs text-gray-400">
                    2025-02-06
                    </span>
            </div>
             <p className="text-sm text-gray-400 mt-1">
              Please review this important message and take the necessary steps by 2025-29-07.
            </p>
        </div>
        <div className="bg-lamaRed rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">System Maintenance Heads-Up</h2>
                <span className="text-xs text-gray-400">
                    2025-26-06
                    </span>
                    
            </div>
            <p className="text-sm text-gray-400 mt-1">
              We&apos;re performing essential system maintenance on 2025-07-06 to improve performance.
            </p>
        </div>

    </div>
    </div>
  );
};

export default Announcements;

//