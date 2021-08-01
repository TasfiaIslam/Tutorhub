import Main from '../components/Main'

export const getStaticProps = async () => {
  const [tutors, students, jobs] = await Promise.all([
    fetch('http://localhost:1337/tutors').then(r => r.json()),
    fetch('http://localhost:1337/students').then(r => r.json()),
    fetch('http://localhost:1337/jobs').then(r => r.json())
  ]);

  return{
    props: {
        tutors: tutors,
        students: students,
        jobs: jobs
    }
  }
}

export default function Home({ tutors, students, jobs }) {
  return (
    <div>
      <Main tutors={ tutors } students={ students } jobs={ jobs }/>
    </div>
  )
}
