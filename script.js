$(document).ready(function () {
  // Initialize Nepali Date Picker
  $("#nepali-date-picker").nepaliDatePicker();

  // Initialize Nepali Date Picker for Modal
  $("#modal-nepali-date-picker").nepaliDatePicker({
    container: "#exampleModal",
  });
});
