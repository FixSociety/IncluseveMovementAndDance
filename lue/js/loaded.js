function loaded(selector, callback){
  //trigger after page load.
  jQuery(function () {
    callback(jQuery(selector));

  if (jQuery(window).width() <= 480){
    console.log("mobile");
    jQuery(".regView").css("display", "none");
    jQuery(".mobileView").css("display", "block");
    jQuery(".site-title").css("font-size", "1.07rem");
  }
  else {
    console.log("not mobile");
    jQuery(".regView").css("display", "block");
    jQuery(".mobileView").css("display", "none");
    jQuery(".site-title").css("font-size", "2.25rem");
  }
  });
  //trigger after page update eg ajax event or jquery insert.
  jQuery(document).on('DOMNodeInserted', selector, function () {
    callback(jQuery(this));
  });
}
