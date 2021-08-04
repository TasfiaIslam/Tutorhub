import StudentList from "../../components/StudentList";
import Ttile from "../../components/Title"


export const getStaticProps = async () => {
    const res =  await fetch('http://localhost:1337/students');
    const data = await res.json();

    return{
        props: {
            students: data
        }
    }
}

const Students = ({students}) => {
    return ( 
        <div>
            <Ttile title="Students" />
            <div className="mt-10">
                <StudentList students={students} />
            </div>
        </div>
     );
}
 
export default Students;