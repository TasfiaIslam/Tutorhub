export default function StudentList ({students})  { 
    return(
        <div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full table-auto divide-y divide-gray-200 " >
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 uppercase tracking-wider text-xs font-medium">
                            <th>Name</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map( student => (
                            <tr key={student.id} >
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-sm font-medium text-gray-900">
                                                {student.name}
                                            </div>
                                            <div class="text-sm text-gray-500">
                                                {student.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{student.class}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}

