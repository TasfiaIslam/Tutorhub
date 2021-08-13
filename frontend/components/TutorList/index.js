import useFetch from "../../hooks/useFetch";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function TutorList ({ tutors })  {

    const imgPath = "http://localhost:1337";
    
    return(
        <div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full table-auto divide-y divide-gray-200 " >
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 uppercase tracking-wider text-xs font-medium">
                            <th className="py-4 px-2 border">Name</th>
                            <th className="py-4 px-2">About</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tutors.map( tutor => (
                            <tr key={tutor.id} >
                                <td className="p-2 border whitespace-nowrap">
                                    <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full"
                                        src={imgPath+tutor.photo.url}
                                        alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {tutor.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {tutor.email}
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td className="p-2">{tutor.about}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}
