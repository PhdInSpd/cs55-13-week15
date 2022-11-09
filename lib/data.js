import got from 'got';
const dataURL = "https://dev-srjc-2022-fall-cs55-13.pantheonsite.io/wp-json/twentytwentythree-child/v1/latest-posts/1";

async function getLatestPosts() {
    let jsonString;
    let body = [];
    try 
    {
        // wait for result
        jsonString = await got(dataURL);
        body = jsonString.body;
        console.log ( body );
    }
    catch( error)
    {
        jsonString = null;
        console.error( error);
    }

    // convert string file into json array object;
    let jsonArray = body.length>0? JSON.parse( body ) : [];
    return jsonArray;
}

// function that returns all json objects in array
export async function getAllIds() {
    const jsonArray = await getLatestPosts();
    return jsonArray.map( item=> {
        return {
            params:{
                id: item.ID.toString()
            }
        }
    });    
}

// returns names and ids for all json objects in array, sorted by song property
export async function getSortedList( ) {
    const jsonArray = await getLatestPosts();
    // alphabetize based on post_title
    jsonArray.sort( 
        function(a,b) {
        return a.post_title.localeCompare( b.post_title );
        });
    
    return jsonArray.map(
        item => {
            return {
                id: item.ID.toString(),
                name: item.post_title
            }
        });
}

// get the complete data for one ranchera
// used by getStaticProps() in [id].js
export async function getData( idRequest ){
    const jsonArray = await getLatestPosts();

    // find object with matching id
    let matchObj = jsonArray.filter( 
        obj => {
            return obj.ID.toString() === idRequest;           
        }
    )

    let returnObj = null;
    if( matchObj.length > 0) {
        returnObj = matchObj[0];
    }
    else{
        returnObj = {};
    }
    return returnObj;
}