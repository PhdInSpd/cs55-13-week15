import Head from 'next/head';
import Link from 'next/link';

// markup for global html
export default function Layout( { 
                                    // all markup to be shown
                                    children,
                                    // boolean home page
                                     home } ) {
  return (
    <div>
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <nav>
          My wordpress  CUSTOM posts
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a class="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
      {/* <footer>
        <p>The footer</p>
      </footer> */}
    </div>
  );
}