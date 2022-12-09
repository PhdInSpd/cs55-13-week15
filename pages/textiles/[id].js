import Head from 'next/head';
import { getAllTextilesIds, getTextileData } from '../../lib/data';
import Layout from '../../components/layout';
// getStaticPaths() to report to next all possible dynamic urls
export async function getStaticPaths() {
    const allDynamicPaths = await getAllTextilesIds();
    return {
        paths: allDynamicPaths,
        // 404 error related
        fallback: false
    };
}

// return date for one rancheras
export async function getStaticProps( {params} ) {
    const itemData = await getTextileData( params.id );
    return {
        props: {
            itemData
        },
        revalidate: 5
    };
}

// react component to displayp all details about a person when a dynamijc route matches
export default function TextileEntry( { itemData } ) {
  
    return(
        <Layout back="textiles">
            <h1>Contact Title: {itemData.post_title}</h1>   
            <article className = "card col-6">
                <div className = "card-body">            
                    <h5 className ="card-title">post id: {itemData.ID}</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">fk_contact_id: {itemData.fk_contact_id}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">fk_address_id: {itemData.fk_address_id}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">order: <div dangerouslySetInnerHTML={{__html: itemData.order_html}}  /> </h6>
                </div>
            </article>
        </Layout>
    );
}