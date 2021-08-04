import Title from "../../components/Title";
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
            <Title title="Tutors"/>
            <div className="mt-10">
                <TutorList tutors={ tutors } />
            </div>
            
        </div>
     );
}
 
export default Tutors;


