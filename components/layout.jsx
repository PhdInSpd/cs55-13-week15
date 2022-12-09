import Head from 'next/head';
import Link from 'next/link';
// import { Back } from './back';
// markup for global html
const Layout = ( { 
                                    // all markup to be shown
                                    children,
                                    // string backkbutton
                                     back } )  =>{
  return (
    <div>
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <nav>
          WP Custom Posts
        </nav>
      </header>
      <main>{children}</main>
      {back && (back=="contacts" || back=="textiles" || back=="addresses")&& (
          <>
            <div>
              <Link href={`/${back}`}>
                <a class="btn btn-primary mt-3">← Back to {back}</a>
              </Link>
            </div>
            <div>
              <Link href={`/`}>
                <a class="btn btn-primary mt-3">← Back to home</a>
              </Link>
            </div>
          </>
        )
      }
      {back && (back=="home")&& (
          <>
            <Link href={`/`}>
              <a class="btn btn-primary mt-3">← Back to {back}</a>
            </Link>
          </>
        )
      }
      {/* <footer>
        <p>The footer</p>
      </footer> */}
    </div>
  );
};
export default Layout;