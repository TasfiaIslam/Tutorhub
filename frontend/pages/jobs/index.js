import Title from "../../components/Title"
import JobList from "../../components/JobList";

export const getStaticProps = async () => {
    const res =  await fetch('http://localhost:1337/jobs');
    const data = await res.json();

    return{
        props: {
            jobs: data
        }
    }
}

const Jobs = ({ jobs }) => {
    return ( 
        <div>
            <Title title="Jobs" />
            <div className="mt-10">
                <JobList jobs={ jobs } />
            </div>
        </div>
     );
}
 
export default Jobs;