const isAuthenticatedAdmin = require('../middlewares/routeguards/adminguard')
const isAuthenticatedClient = require('../middlewares/routeguards/clientguard')
const { validateCreateClient, validateCreateAdmin, validateAdminSignin } = require('../middlewares/validators/adminvalidators')

module.exports = function(app){

    const adminAuth = require('../controllers/admin/auth/auth')
    const adminClient = require('../controllers/admin/client/client')
    const adminTeam = require('../controllers/admin/team/team')
    const adminDashboard = require('../controllers/admin/dashboard/dashboard')
    const adminDatabox = require('../controllers/admin/databox/databox')
    const adminCharityNavigator = require('../controllers/admin/charitynavigator/charitynavigator')

    const clientAuth = require('../controllers/client/auth/auth')
    const clientDash = require('../controllers/client/dashboard/dashboard')
    //Admin Routes @sssssssssssssssssssss

    app.route('/auth-login')
    .get(adminAuth.display_admin_login)

    app.route('/create-client')
    .get(isAuthenticatedAdmin, adminClient.display_create_client)
    .post(isAuthenticatedAdmin, validateCreateClient, adminClient.create_client)

    app.route('/create-admin')
    .get(isAuthenticatedAdmin, adminTeam.display_create_team)
    .post(isAuthenticatedAdmin, validateCreateAdmin, adminTeam.create_team)

    app.route('/login-admin')
    .post(validateAdminSignin, adminAuth.sigin_admin)

    app.route('/administration')
    .get(isAuthenticatedAdmin, adminDashboard.display_admin_dashboard)

    app.route('/dashboard-summary')
    .get(isAuthenticatedAdmin, adminDashboard.display_admin_dashboard_Summary)

    app.route('/view-all-team-members')
    .get(isAuthenticatedAdmin, adminTeam.display_all_team)

    app.route('/view-all-clients')
    .get(isAuthenticatedAdmin, adminClient.display_all_clients)

    app.route('/view-client/:clientId')
    .get(isAuthenticatedAdmin, adminClient.display_single_client)

    app.route('/delete-client/:clientId')
    .get(isAuthenticatedAdmin, adminClient.delete_client)

    app.route('/view-databox/:clientId')
    .get(isAuthenticatedAdmin, adminDatabox.display_databox_settings)
    
    app.route('/update-databox')
    .post(isAuthenticatedAdmin, adminDatabox.update_databox)

    app.route('/charity-navigator/:clientId')
    .get(isAuthenticatedAdmin, adminClient.display_client_charity_navigator)

    app.route('/generate-navigator-id')
    .post(isAuthenticatedAdmin,adminCharityNavigator.generate_navigator_id)



    app.route('/login')
    .get(clientAuth.display_client_login)
    .post(clientAuth.sigin_client)

    app.route('/home')
    .get(isAuthenticatedClient, clientDash.display_user_dashboard)

    app.route('/')
    .get(isAuthenticatedClient, clientDash.display_user_dashboard)

    app.route('/logout')
    .get(adminAuth.logout)

    app.route('/client-logout')
    .get(clientAuth.client_logout)

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
