import { getSortedAddressesList } from '../../lib/data';
export default async function handler(req, res){
    res.status(200).json( await getSortedAddressesList() );
}