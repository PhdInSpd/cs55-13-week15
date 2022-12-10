import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/layout';
import {  getSortedTextilesList } from '../../lib/data';
// import  useSWR from 'swr';

// does each page have getStaticProps?
// the page does not refresh after
export async function getStaticProps() {
  const allData = await getSortedTextilesList();
  return {
    props: {
      allData
    },
    revalidate: 5
  }
}
// does not work
export default function Textiles( {allData}/*props*/) {
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
      <Layout back="home">
            <Heading as="h1">Textiles List</Heading>
            <SimpleGrid  columns={{ base: 1, md: 2, lg: 3 }}>
              {allData && allData.map((
                  { id, name }) => (
                    <Box  key={id}
                          border="1px"
                          borderColor="red.500"
                          bg="blue.200"
                          transition="0.2s">
                          <Link  href={`/textiles/${id}`}>
                          <a className="list-group-item list-group-item-action">{name}: {id}</a>
                          </Link>
                      </Box>
              ))}
            </SimpleGrid>
      </Layout>
  );
}