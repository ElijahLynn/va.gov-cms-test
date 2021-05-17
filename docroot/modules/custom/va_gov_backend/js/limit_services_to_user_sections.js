/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  var adminField = document.getElementById("edit-field-administration");
  var facilityFieldOptions = document.querySelectorAll("#edit-field-facility-location option");
  var systemFieldOptions = document.querySelectorAll("#edit-field-regional-health-service option");
  var facilityField = document.getElementById("edit-field-facility-location");
  var systemField = document.getElementById("edit-field-regional-health-service");
  var winnower = function winnower() {
    if (typeof facilityField !== "undefined" && facilityField !== null) {
      facilityField.selectedIndex = "_none";
    }
    if (typeof systemField !== "undefined" && systemField !== null) {
      systemField.selectedIndex = "_none";
    }

    var adminFieldText = adminField.options[adminField.selectedIndex].text;

    var adminMatcher = adminFieldText.replace(/(^-+)/g, "");

    facilityFieldOptions.forEach(function (i) {
      i.classList.remove("hidden-option");
      if (!i.text.includes(adminMatcher)) {
        i.classList.add("hidden-option");
      }
    });

    systemFieldOptions.forEach(function (i) {
      i.classList.remove("hidden-option");
      if (!i.text.includes(adminMatcher)) {
        i.classList.add("hidden-option");
      }
    });
  };

  Drupal.behaviors.vaGovLimitServiceOptions = {
    attach: function attach() {
      winnower();
      adminField.addEventListener("change", winnower);
    }
  };
})(Drupal);