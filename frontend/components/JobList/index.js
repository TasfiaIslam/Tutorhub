
export default function JobList ({ jobs })  {
    
    return(
        <div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full table-auto divide-y divide-gray-200 " >
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 uppercase tracking-wider text-xs font-medium">
                            <th className="py-4 px-2 border">Class</th>
                            <th className="py-4 px-2 border">Medium</th>
                            <th className="py-4 px-2 border">Subjects</th>
                            <th className="py-4 px-2 border">Days</th>
                            <th className="py-4 px-2 border">Area</th>
                            <th className="py-4 px-2 border">Salary</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {jobs.map( job => (
                            <tr key={job.id}>
                                <td className="p-2 border">{job.student.class}</td>
                                <td className="p-2 border">{job.student.medium}</td>
                                <td className="p-2 border">{job.student.subjects}</td>
                                <td className="p-2 border">{job.days}</td>
                                <td className="p-2 border">{job.student.address}</td>
                                <td className="p-2 border">{job.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}

