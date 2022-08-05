const createErrorNotification = require("../../../middlewares/toast/error")
const createSuccessNotification = require("../../../middlewares/toast/success")
const { createTeamService, getAllTeam } = require("../../../services/team")


// Display Create Admin Page
exports.display_create_team = async (req, res) => {
    
    try{
        res.render('admin/createadmin')
       
    } catch(err){
        createErrorNotification(req, res, err.message)
    }
}


// Create Admin Controller
exports.create_team = async (req, res) => {
    try{
       const data = req.body
       const {result, error} = await createTeamService(data)
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            createSuccessNotification(req, res, 'Successfully Created Admin')
       }
    } catch(err){
        createErrorNotification(req, res, err.message)
    }
}


//View All Admin

exports.display_all_team = async (req, res) => {
    try{
       const {result, error} = await getAllTeam()
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            res.render('admin/team',{
                team: result
            })
       }
    }catch(err){
        createErrorNotification(req, res, err.message)
    }
}