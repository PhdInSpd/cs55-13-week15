import got from 'got';
//const dataURL = "https://dev-srjc-2022-fall-cs55-13.pantheonsite.io/wp-json/twentytwentythree-child/v1/latest-posts/1";
const contactsURL = "https://dev-srjc-2022-fall-cs55-13.pantheonsite.io/wp-json/twentytwentythree-child/v1/contacts";
const textilesURL = "https://dev-srjc-2022-fall-cs55-13.pantheonsite.io/wp-json/twentytwentythree-child/v1/textiles";
const addressesURL = "https://dev-srjc-2022-fall-cs55-13.pantheonsite.io/wp-json/twentytwentythree-child/v1/addresses";

async function getLatestCustomPosts(url) {
    let jsonString;
    let body = [];
    try 
    {
        // wait for result
        jsonString = await got(url);
        body = jsonString.body;
        // console.log ( body );
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
export async function getAllContactsIds() {
    const jsonArray = await getLatestCustomPosts(contactsURL);
    return jsonArray.map( item=> {
        return {
            params:{
                id: item.ID.toString()
            }
        }
    });    
}

export async function getAllTextilesIds() {
    const jsonArray = await getLatestCustomPosts(textilesURL);
    return jsonArray.map( item=> {
        return {
            params:{
                id: item.ID.toString()
            }
        }
    });    
}

export async function getAllAddressesIds() {
    const jsonArray = await getLatestCustomPosts(addressesURL);
    return jsonArray.map( item=> {
        return {
            params:{
                id: item.ID.toString()
            }
        }
    });    
}

// returns names and ids for all json objects in array, sorted by song property
export async function getSortedContactsList( ) {
    const jsonArray = await getLatestCustomPosts(contactsURL);
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

export async function getSortedAddressesList( ) {
    const jsonArray = await getLatestCustomPosts(addressesURL);
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

export async function getSortedTextilesList( ) {
    const jsonArray = await getLatestCustomPosts(textilesURL);
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
export async function getContactData( idRequest ){
    const jsonArray = await getLatestCustomPosts(contactsURL);

    // find object with matching id
    let matchObj = jsonArray.filter( 
        obj => {
            return obj.ID.toString() === idRequest;           
        }
    )

    let returnObj = null;
    if( matchObj.length > 0) {
        returnObj = matchObj[0];
        // parse acfField into firstName, lastName field entry
        let acfField = returnObj.acf_fields;
        let fields = acfField.split(",");
        returnObj.firstName ="";
        if(fields.length>=1) {
            let subFields = fields[0].split(":");
            if(subFields.length>=2) {
                returnObj.firstName = subFields[1];
            }            
        }

        returnObj.lastName = "";
        if(fields.length>=2) {
            let subField = fields[1].split(":");
            if(subField.length>=2) {
                returnObj.lastName = subField[1];
            }
        }

        returnObj.email = "";
        if(fields.length>=3) {
            let subField = fields[2].split(":");
            if(subField.length>=2) {
                returnObj.email = subField[1];
            }
        }

    }
    else{
        returnObj = {};
    }
    return returnObj;
}

export async function getAddressData( idRequest ){
    const jsonArray = await getLatestCustomPosts( addressesURL );

    // find object with matching id
    let matchObj = jsonArray.filter( 
        obj => {
            return obj.ID.toString() === idRequest;           
        }
    )

    let returnObj = null;
    if( matchObj.length > 0) {
        returnObj = matchObj[0];
        // parse acfField into firstName, lastName field entry
        let acfField = returnObj.acf_fields;
        let fields = acfField.split(",");
        returnObj.streetAddress ="";
        if(fields.length>=2) {
            let subFields = fields[1].split(":");
            if(subFields.length>=2) {
                returnObj.streetAddress = subFields[1];
            }            
        }

        returnObj.state = "";
        if(fields.length>=3) {
            let subField = fields[2].split(":");
            if(subField.length>=2) {
                returnObj.state = subField[1];
            }
        }

        returnObj.zipCode = "";
        if(fields.length>=4) {
            let subField = fields[3].split(":");
            if(subField.length>=2) {
                returnObj.zipCode = subField[1];
            }
        }
    }
    else{
        returnObj = {};
    }
    return returnObj;
}

export async function getTextileData( idRequest ){
    const jsonArray = await getLatestCustomPosts(textilesURL);

    // find object with matching id
    let matchObj = jsonArray.filter( 
        obj => {
            return obj.ID.toString() === idRequest;           
        }
    )

    let returnObj = null;
    if( matchObj.length > 0) {
        returnObj = matchObj[0];
        // parse acfField into firstName, lastName field entry
        let acfField = returnObj.acf_fields;
        let fields = acfField.split(",");
        returnObj.fk_contact_id =-1;
        if(fields.length>=2) {
            let subFields = fields[1].split("\t");
            if(subFields.length>=2) {
                returnObj.fk_contact_id = subFields[1];
            }            
        }

        returnObj.fk_address_id = -1;
        if(fields.length>=3) {
            let subField = fields[2].split("\t");
            if(subField.length>=2) {
                returnObj.fk_address_id = subField[1];
            }
        }

        returnObj.order_html = "";
        let target = "order_html\t";
        let orderPos = acfField.search(target);
        if(orderPos>=0) {
            returnObj.order_html = acfField.slice(orderPos+target.length);
        }
    }
    else{
        returnObj = {};
    }
    return returnObj;
}