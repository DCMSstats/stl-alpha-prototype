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
    response.redirect("/property-info/accomodation-type");
  } else {
    response.redirect("/property-info/find-address");
  }
});

router.post("/managed", function (request, response) {
  var management_type = request.session.data["managed"];
  if (management_type == "Yes") {
    response.redirect("/property-info/agency-details");
  } else {
    response.redirect("/compliance-info/gas-upload");
  }
});

router.post("/dwelling-size", function (request, response) {
  var dwelling_type = request.session.data["dwelling-type"];
  if (dwelling_type == "part") {
    response.redirect("/property-info/bedroom-let");
  } else {
    response.redirect("/property-info/bedroom-count");
  }
});

router.post("/r3-different-address", function (request, response) {
  var address_type = request.session.data["r3sameAddress"];
  if (address_type == "sameAddress") {
    response.redirect("/r3-multiple-property-flow/7-addresses-summary");
  } else {
    response.redirect("/r3-multiple-property-flow/6a-stl-postcode-lookup");
  }
});

router.post("/r3-different-address-v2", function (request, response) {
  var address_type = request.session.data["r3sameAddress"];
  if (address_type == "sameAddress") {
    response.redirect(
      "/r3-alternative-journey-without-tabs/7-addresses-summary"
    );
  } else {
    response.redirect(
      "/r3-alternative-journey-without-tabs/6a-stl-postcode-lookup"
    );
  }
});

router.post("/gas-safety", function (request, response) {
  var gas_in_property = request.session.data["gas-safety-step-1"];
  if (gas_in_property == "yes") {
    response.redirect("/r3-alternative-journey-without-tabs/9c-gas-safety");
  } else {
    response.redirect("/r3-alternative-journey-without-tabs/9c-fire-safety");
  }
});
