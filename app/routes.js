//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/renewal', function(request, response) {

    var existing_type = request.session.data['renewingOrUpdating']
    if (existing_type == "no"){
        response.redirect("/personal-info/operating-model")
    } else {
        response.redirect("/personal-info/registration-number")
    }
})
