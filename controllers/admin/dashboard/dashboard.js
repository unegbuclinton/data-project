const createErrorNotification = require("../../../middlewares/toast/error")
const { getDashboardData, getDashboardSummary } = require("../../../services/dashboard")


exports.display_admin_dashboard = async (req, res) => {
    try{
       const {result, error} = await getDashboardData()
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            res.render('admin/home',{
                clients: result?.clients,
                team: result?.team
            })
       }
    } catch(err){
        console.log(err)
        createErrorNotification(req, res, err.message)
    }
}


exports.display_admin_dashboard_Summary = async( req, res) => {
    try{
        const {result, error} = await getDashboardSummary()
        if(error){
            res.status(500).send(error)
        }else{
             res.status(200).send({clients: result?.clientsNumber,
                team: result?.teamNumber})
        }
     } catch(err){
         console.log(err)
         res.status(500).send(err)
     }
}