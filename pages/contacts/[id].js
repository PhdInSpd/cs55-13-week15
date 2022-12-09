import Head from 'next/head';
import { getAllContactsIds, getContactData } from '../../lib/data';
import Layout from '../../components/layout';
// getStaticPaths() to report to next all possible dynamic urls
export async function getStaticPaths() {
    const allDynamicPaths = await getAllContactsIds();
    return {
        paths: allDynamicPaths,
        // 404 error related
        fallback: false
    };
}

// return date for one rancheras
export async function getStaticProps( {params} ) {
    const itemData = await getContactData( params.id );
    return {
        props: {
            itemData
        },
        revalidate: 5
    };
}

// react component to displayp all details about a person when a dynamijc route matches
export default function ContactEntry( { itemData } ) {
    return(
        <Layout back={"contacts"}>
            <h1>Contact Title: {itemData.post_title}</h1>   
            <article className = "card col-6">
                <div className = "card-body">            
                    <h5 className ="card-title">post id: {itemData.ID}</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">First Name: {itemData.firstName}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">Last Name: {itemData.lastName}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">email: {itemData.email}</h6>
                </div>
            </article>
        </Layout>
    );
}