import Head from 'next/head';
import { getAllIds, getData } from '../lib/data';
import Layout from '../components/layout';
// getStaticPaths() to report to next all possible dynamic urls
export async function getStaticPaths() {
    const allDynamicPaths = await getAllIds();
    return {
        paths: allDynamicPaths,
        // 404 error related
        fallback: false
    };
}

// return date for one rancheras
export async function getStaticProps( {params} ) {
    const itemData = await getData( params.id );
    return {
        props: {
            itemData
        }
    };
}

// react component to displayp all details about a person when a dynamijc route matches
export default function Entry( { itemData } ) {
    return(
        <Layout>
            <h1>favorite post tile : {itemData.post_title}</h1>   
            <article className = "card col-6">
                <div className = "card-body">            
                    <h5 className ="card-title">post id: {itemData.ID}</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">post_author: {itemData.post_author}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">post_content: {itemData.post_content}</h6>
                </div>
            </article>
        </Layout>
    );
}