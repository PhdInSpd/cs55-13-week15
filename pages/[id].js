import Head from 'next/head';
import { getAllIds, getData } from '../lib/data';
import Layout from '../components/layout';
// getStaticPaths() to report to next all possible dynamic urls
export async function getStaticPaths() {
    const allDynamicPaths = getAllIds();
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
            <h1>favorite ranchera: {itemData.id}</h1>   
            <article class = "card col-6">
                <div class = "card-body">            
                    <h5 class="card-title">song: {itemData.song}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">artist: {itemData.artist}</h6>
                    <a href = {itemData.link} class="card-link">youtube video</a>
                </div>
            </article>
        </Layout>
    );
}