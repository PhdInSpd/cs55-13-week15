import { Box,
        Container,
        SimpleGrid } from "@chakra-ui/react";
import { FaToggleOff,
         FaToggleOn,
          FaTrash,
           FaEdit } from "react-icons/fa";

import Link from "next/link";
import Layout from "../components/layout";
export default function Home() {
  return (
    // <Layout>
    //   <ul>
    //     <li>
    //       <Link href="/contacts">Contacts</Link>
    //     </li>
    //     <li>
    //       <Link href="/addresses">Addresses</Link>
    //     </li>
    //     <li>
    //       <Link href="/textiles">Textiles</Link>
    //     </li>
    //   </ul>   
    // </Layout>
    //<Container maxW={"7xl"}>
      <Box  mt={1}   
            p={2}
            //boxShadow="2xl"
            //shadow={"dark-lg"}
            border="1px"
            borderColor="red.500"
            bg="gray.200"
            transition="0.2s"
            >
        <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }}>
          <Box
            border="1px"
            borderColor="red.500"
            bg="blue.200"
            transition="0.2s">
            <Link href={"/contacts/"} display="flex">Contacts </Link>
          </Box>
          <Box  border="1px"
            borderColor="red.500"
            bg="blue.200"
            transition="0.2s">
            <Link href={"/addresses/"} display="flex">Addresses</Link>
          </Box>
          <Box  border="1px"
            borderColor="red.500"
            bg="blue.200"
            transition="0.2s">
            <Link href={"/textiles/"} display="flex">Textiles</Link>
          </Box>
        </SimpleGrid>
      </Box>
    //</Container>
    
  );
}
/*
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedContactsList } from '../lib/data';
import  useSWR from 'swr';

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
export default function Home( props) {
  const fetcher =  (...args) =>  fetch(...args).then(res => res.json());
  // where does api/index.js handler get fed to useSWR?
  //    - it is defined as '/api' json endpoint
  // how is the update triggered by useSWR?
  // useSWR returns {data,error}
  // how to get faster updates
  let {data} = useSWR( "/api", fetcher, {
      fallbackData: props.allData, // props.allData makes results look the same as fetcher
      refreshInterval: 1000} );
   let  allData  = data;
   console.log(allData);
  return (
      <Layout home>
        <h1>List Contacts</h1>
        <div className="list-group">
          {allData && allData.map((
            { id, name }) => (
            <Link key={id} href={`contacts/${id}`}>
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
*/