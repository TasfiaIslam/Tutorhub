
export default function JobList ({ jobs })  {
    
    return(
        <div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full table-auto divide-y divide-gray-200 " >
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 uppercase tracking-wider text-xs font-medium">
                            <th>Class</th>
                            <th>Medium</th>
                            <th>Subjects</th>
                            <th>Days</th>
                            <th>Area</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {jobs.map( job => (
                            <tr key={job.id} >
                                <td>{job.class}</td>
                                <td>{job.medium}</td>
                                <td>{job.subjects}</td>
                                <td>{job.days}</td>
                                <td>{job.area}</td>
                                <td>{job.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}

