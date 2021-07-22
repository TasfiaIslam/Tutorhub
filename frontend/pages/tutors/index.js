import Ttile from "../../components/Title";
import TutorList from "../../components/TutorList"

export const getStaticProps = async () => {
    const res =  await fetch('http://localhost:1337/tutors');
    const data = await res.json();

    return{
        props: {
            tutors: data
        }
    }
}

const Tutors = ( { tutors }) => {
    return ( 
        <div>
            <Ttile title="Tutors"/>
            <div className="my-10 ">
                <TutorList tutors={ tutors } />
            </div>
            
        </div>
     );
}
 
export default Tutors;


