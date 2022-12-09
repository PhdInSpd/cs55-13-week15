import Layout from '../../components/layout';
import { getAddressData, getAllAddressesIds} from '../../lib/data';
// import Layout from '../../components/layout';
// getStaticPaths() to report to next all possible dynamic urls
export async function getStaticPaths() {
    const allDynamicPaths = await getAllAddressesIds();
    return {
        paths: allDynamicPaths,
        // 404 error related
        fallback: false
    };
}

// return date for one rancheras
export async function getStaticProps( {params} ) {
    const itemData = await getAddressData( params.id );
    return {
        props: {
            itemData
        },
        revalidate: 5
    };
}

// react component to displayp all details about a person when a dynamijc route matches
export default function AddressEntry( { itemData } ) {
    return(
        <Layout back={"addresses"}>
            <h1>Address Title: {itemData.post_title}</h1>   
            <article className = "card col-6">
                <div className = "card-body">            
                    <h5 className ="card-title">post id: {itemData.ID}</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">street address: {itemData.streetAddress}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">state: {itemData.state}</h6>
                    <h6 className ="card-subtitle mb-2 text-muted">zipcode: {itemData.zipCode}</h6>
                </div>
            </article>
        </Layout>
    );
}