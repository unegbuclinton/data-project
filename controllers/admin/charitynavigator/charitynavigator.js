const generateNavigatorIdService = require("../../../services/admin/charity")


exports.generate_navigator_id = async (req, res) => {
    try{
       const charityName = req.body.charityName
       const {result, error} = await generateNavigatorIdService(charityName)
       if(error){
            res.status(500).send(error)
       }else{
            res.status(200).send(result)
       }
    }catch(err){
        res.status(500).send(err)
    }
}

