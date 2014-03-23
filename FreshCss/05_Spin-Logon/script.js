$(function () {
  var formContainer = $('#formContainer');

  // Listening for clicks on the ribbon links
  $('.flipLink').click(function (e) {
    // Flipping the forms
    formContainer.toggleClass('flipped');

    // If there is no CSS3 #D support simply hide the
    // login form (exposing the recover one)
    if (Modernizr.csstransforms3d) {
      $('#login').toggle();
      //alert('feature detected!');
    }

    e.preventDefault();

  });

  formContainer.find('form').submit(function (e) {
    // Preventing form submissions.  If you implement a backend,
    // you will want to remove this code.
  });
});

