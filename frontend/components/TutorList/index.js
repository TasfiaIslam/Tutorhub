import useFetch from "../../hooks/useFetch";


const TutorList = () => {
    const { loading, error, data } = useFetch('http://localhost:1337/tutors');
    if (error){
        return(
            <div>Error</div>
        )
    }
    if (loading){
        return(
            <div>Loading</div>
        )
    }

    return(
        <div>
            {data.map( tutor => (
                <div key={tutor.id}>
                    <div>{tutor.name}</div>
                </div>
            ))}
        </div>
    )  
}

 
export default TutorList;