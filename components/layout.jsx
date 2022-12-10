import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
const Layout = ( { 
                                    // all markup to be shown
                                    children,
                                    // string backkbutton
                                     back } )  =>{
  return (
    <Box m={2}>
      <Head>
        <title>Headless App</title>
      </Head>
      <main>{children}</main>
      {back && (back=="contacts" || back=="textiles" || back=="addresses")&& (
          <>
            <Box bg={"blue.100"}>
              <Link href={`/${back}`}>
                 {`← Back to ${back}`}
              </Link>
            </Box>
            <Box bg={"blue.100"}>
              <Link href={`/`}>
                ← Back to home
              </Link>
            </Box>
          </>
        )
      }
      {back && (back=="home")&& (
          <>
            <Box bg={"blue.100"}>
              <Link href={`/`}>
                ← Back to home
              </Link>
            </Box>
          </>
        )
      }
    </Box>
  );
};
export default Layout;