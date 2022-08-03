const { validateCreateClient } = require('../middlewares/validators/adminvalidators')

module.exports = function(app){

    const adminAuth = require('../controllers/admin/auth/auth')
    const adminTeam = require('../controllers/admin/team/team')
   

    //Admin Routes @sssssssssssssssssssss

    app.route('/login')
    .get(adminAuth.display_admin_login)

    app.route('/create-client')
    .get(adminTeam.display_create_client)
    .post(validateCreateClient, adminTeam.create_client)

    // app.route('/forgot-password')
    // .get(adminAuth.display_admin_forgotpassword)

    // app.route('/home')
    // .get(adminView.display_admin_home)

    // app.route('/profile')
    // .get(adminView.display_admin_profile)

    // app.route('/settings')
    // .get(adminView.display_admin_security_settings)

    // app.route('/clients')
    // .get(adminView.display_admin_clients)

    // app.route('/client-settings')
    // .get(adminView.display_admin_client_settings)

    // app.route('/client-single')
    // .get(adminView.display_admin_client_single)

    // app.route('/create-admin')
    // .get(adminView.display_admin_create_admin)

    // app.route('/create-client')
    // .get(adminView.display_admin_create_client)

    // app.route('/databox-preview')
    // .get(adminView.display_admin_databox_preview)

    // app.route('/databox-settings')
    // .get(adminView.display_admin_databox_settings)

    // app.route('/datastudio-settings')
    // .get(adminView.display_admin_datastudio_settings)

    // app.route('/porter-metrics-settings')
    // .get(adminView.display_admin_porter_metrics_settings)

    // app.route('/team')
    // .get(adminView.display_admin_team)

    //Admin Routes @eeeeeeeeeeeeeeeeeeeeeeee




    //Client Routes @sssssssssssssssssssss

    // app.route('/data-analytics-home')
    // .get(clientView.display_clients_databox_preview)

    // app.route('/sign-in')
    // .get(clientAuth.display_clients_login)

    //Client Routes @eeeeeeeeeeeeeeeeeeeeeeee


    // app.route('/validate-my-email')
    // .post(isValid.validateUserEmail, register.register_user_one)

    // app.route('/signup')
    // .post(isValid.validateUserSignUp, register.register_user_two)

}
