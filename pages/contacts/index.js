import Link from 'next/link';
import Layout from '../../components/layout';
import { getSortedContactsList } from '../../lib/data';
// import  useSWR from 'swr';

// does each page have getStaticProps?
// the page does not refresh after
export async function getStaticProps() {
  const allData = await getSortedContactsList();
  return {
    props: {
      allData
    },
    revalidate: 5
  }
}
// does not work
export default function Contacts( {allData}/*props*/) {
  // const fetcher =  (...args) =>  fetch(...args).then(res => res.json());
  // // where does api/index.js handler get fed to useSWR?
  // //    - it is defined as '/api' json endpoint
  // // how is the update triggered by useSWR?
  // // useSWR returns {data,error}
  // // how to get faster updates
  // let {data} = useSWR( "/api/contacts", fetcher, {
  //     fallbackData: props.allData, // props.allData makes results look the same as fetcher
  //     refreshInterval: 1000} );
  //  let  allData  = data;
  //  console.log(allData);
  return (
      <Layout back={"home"}>
            <h1>Contacts List</h1>
            <div className="list-group">
            {allData && allData.map((
                { id, name }) => (
                <Link key={id} href={`/contacts/${id}`}>
                <a className="list-group-item list-group-item-action">{name}: {id}</a>
                </Link>
            ))}
            </div>
      </Layout>
  );
}

// export default function Home({allData}) {
//   const fetcher = (...args) => fetch(...args).then(res => res.json());
//   // where does api/index.js handler get fed to useSWR?
//   // how is the update triggered by useSWR?
//   //const { allData } = useSWR("/api", fetcher, {fallbackData: props, refreshInterval: 5000});
//   return (
//       <Layout home>
//         <h1>Contacts</h1>
//         <div className="list-group">
//           {allData && allData.map((
//             { id, name }) => (
//             <Link key={id} href={`contacts/${id}`}>
//               <a className="list-group-item list-group-item-action">{name}: {id}</a>
//             </Link>
//           ))}
//         </div>
//       </Layout>
//   );
// }
