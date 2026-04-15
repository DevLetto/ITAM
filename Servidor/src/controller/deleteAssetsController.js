import { deleteAssets } from "../models/deleteAssets.js";

export default async function deleteAssetsController(req,res){

    try{

        const {id} = req.params;
    
        const deleted = await deleteAssets(id)

        res.status(200).json(deleted)

    }catch(error){
        console.error("Error in deleteAssetsController: ", error.message)
        res.status(500).json({error: "Error on server"})
        
    }
}