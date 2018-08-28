$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  // $('#contact-form-obj').validator(); //need the form validation


  console.log('$ ES', $);
  // when the form is submitted
  $('#contact-form-obj').on('submit', function (e) {

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "https://httpbin.org/post"; // changes for real data

      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          // data = JSON object that contact.php returns

          console.log('SUCCESS!', data);
          // we recieve the type of the message: success x danger and apply it to the 
          var messageAlert = 'alert-success'; // Needs to be the one from the API
          var messageText = 'We will contact you soon!'; // Same here

          // let's compose Bootstrap alert box HTML
          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $('#contact-form-obj').find('.messages').html(alertBox);
            // empty the form
            $('#contact-form-obj')[0].reset();
          }
        }
      });
      return false;
    }
  })
});