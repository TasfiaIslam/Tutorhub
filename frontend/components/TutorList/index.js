import useFetch from "../../hooks/useFetch";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function TutorList ({ tutors })  {
    // const { loading, error, data } = useFetch('http://localhost:1337/tutors');
    // if (error){
    //     return(
    //         <div>Error</div>
    //     )
    // }
    // if (loading){
    //     return(
    //         <div>Loading</div>
    //     )
    // }

    const imgPath = "http://localhost:1337";
    
    return(
        <div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full table-auto divide-y divide-gray-200 " >
                    <thead className="bg-gray-50">
                        <tr className="text-left text-gray-500 uppercase tracking-wider text-xs font-medium">
                            <th>Name</th>
                            <th>About</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tutors.map( tutor => (
                            <tr key={tutor.id} >
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full"
                                        src={imgPath+tutor.photo.url}
                                        alt="" />
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                            {tutor.name}
                                        </div>
                                        <div class="text-sm text-gray-500">
                                            {tutor.email}
                                        </div>
                                    </div>
                                    </div>
                                </td>
                                <td>{tutor.about}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}
