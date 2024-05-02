//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

router.post("/different-address", function (request, response) {
  var address_type = request.session.data["sameAddress"];
  if (address_type == "sameAddress") {
    response.redirect("/property-info/dwelling-type");
  } else {
    response.redirect("/property-info/find-address");
  }
});

router.post("/managed", function (request, response) {
  var management_type = request.session.data["managed"];
  if (management_type == "agency") {
    response.redirect("/property-info/agency-details");
  } else {
    response.redirect("/compliance-info/certificates");
  }
});
