$(function() {
  var imp = impress();

  $('#arrowLeft').click(function() {
    imp.prev();
    E.preventDefault();
  });
  
  $('#arrowRight').click(function () {
    imp.next();
    E.preventDefault();
  });

});