import ClientModel from "../model/client.model.js"

async function getAllCLient(req, res){
    const clients = await ClientModel.find({})
    return res.status(200).json(clients);
}

async function getOneCLient(req, res){
    const client = await ClientModel.findById(req.params.clientId)
    
    if(!client){
        return res.status(404);
    }

    return res.status(200).json(client)
}

async function createCLient(req, res){
    const addClient = ClientModel.create({
        firstname: req.query.firstname,
        lastname: req.query.lastname
    })

    /* test */
    return res.status(200).json({message: "Client ajouté avec succès"})
}

async function editCLient(req, res){
    const editCLient = await ClientModel.findByIdAndUpdate(
        req.params.clientId,
        {
            firstname: req.query.firstname,
            lastname: req.query.lastname
        }
    );

    if(!editCLient){
        res.status(400).json({
            message: "Ce client n'existe pas.."
        })
    }

    return res.status(200).json({
        message: "Le client a bien été mis à jour.."
    })

}

async function deleteCLient(req, res){
    const deleteClient = await ClientModel.findByIdAndDelete(req.params.clientId)

    if(!deleteCLient){
        res.status(400).json({
            message: "Ce client n'existe pas.."
        })
    }

    return res.status(200).json({message: "Le client a bien été supprimé.."})

}

export {getAllCLient, getOneCLient, createCLient, editCLient, deleteCLient}