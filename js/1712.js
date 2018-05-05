jQuery(document).ready(function($) {

	/* smooth scroll to top, from http://stackoverflow.com/questions/1144805/how-do-i-scroll-to-the-top-of-the-page-with-jquery/  */
	$("a.to-top").click(function() {
		$("html, body").animate( {scrollTop: 50}, 500 );
		return false;
	});
});