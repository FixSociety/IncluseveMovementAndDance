/*
Authored by Ryan Owens 
*/
/*
jQuery(window).ready(function(){
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
*/

/*
 * Jared's versionerino
 */

jQuery(window).resize(function () {
  if (jQuery(window).width() <= 480) {
    console.log("mobile");
    jQuery(".regView").css("display", "none");
    jQuery(".mobileView").css("display", "block");
    jQuery(".site-title").css("font-size", "0.84rem");
  } else {
    console.log("not mobile");
    jQuery(".regView").css("display", "block");
    jQuery(".mobileView").css("display", "none");
    jQuery(".site-title").css("font-size", "2.25rem");
  }
}).resize();
