import { SimpleGrid,
         Heading,
         Box } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getSortedAddressesList } from '../../lib/data';
// import  useSWR from 'swr';

// does each page have getStaticProps?
// the page does not refresh after
export async function getStaticProps() {
  const allData = await getSortedAddressesList();
  return {
    props: {
      allData
    },
    revalidate: 5
  }
}
// does not work
export default function Addresses( /*props*/{allData}) {
  // const fetcher =  (...args) =>  fetch(...args).then(res => res.json());
  // let {data} = useSWR( "/api/addresses", fetcher, {
  //     fallbackData: props.allData, // props.allData makes results look the same as fetcher
  //     refreshInterval: 1000} );
  //  let  allData  = data;
  //  console.log(allData);
  return (
      <Layout back={"home"}>
            <Heading as="h1">Addresses List</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
              {allData && allData.map((
                    { id, name }) => (
                      <Box  key={id}
                            border="1px"
                            borderColor="red.500"
                            bg="blue.200"
                            transition="0.2s">
                          <Link  href={`/addresses/${id}`}>
                            <a className="list-group-item list-group-item-action">{name}: {id}</a>
                          </Link>
                        </Box>
              ))}
            </SimpleGrid>
      </Layout>
  );
}
