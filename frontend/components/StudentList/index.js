export default function StudentList ({students})  { 
    return(
        <div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full table-auto divide-y divide-gray-200 " >
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 uppercase tracking-wider text-xs font-medium">
                            <th className="py-4 px-2 border">Name</th>
                            <th className="py-4 px-2 border">Class</th>
                            <th className="py-4 px-2 border">Medium</th>
                            <th className="py-4 px-2 border">Subjects</th>
                            <th className="py-4 px-2 border">Address</th>
                            <th className="py-4 px-2">Phone</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map( student => (
                            <tr key={student.id} >
                                <td class="px-2 py-2 whitespace-nowrap">
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
                                <td className="py-2 px-2 border">{student.class}</td>
                                <td className="py-2 px-2 border">{student.medium}</td>
                                <td className="py-2 px-2 border">{student.subjects}</td>
                                <td className="py-2 px-2 border">{student.address}</td>
                                <td className="py-2 px-2">{student.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}

