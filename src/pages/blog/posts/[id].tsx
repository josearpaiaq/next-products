import { NextPage } from 'next'

const Posts: NextPage = ({id}: any) => {
  return <>
    <div>Posts - {id}</div>
  </>
}

export default Posts;

export async function getServerSideProps({query: {id}}: any) {
  return {
    props: {
      id
    }, // will be passed to the page component as props
  }
} 

