/* Ben Walters
* aSync Lightbox
*
* Author: bwalters@squiz.co.uk
* Created: 23 May 2013 15:29
*/
//create async lightbox
function lbgo(url) {
	if(url.indexOf('?')>-1) {
		var ext = '&SQ_DESIGN_NAME=blank&SQ_LAYOUT_NAME=blank'
	} else {
		var ext = '?SQ_DESIGN_NAME=blank&SQ_LAYOUT_NAME=blank'
	}
	$("html, body").animate({ scrollTop: 0 }, 300);
	$('.lb-inner').load(url + ext, function() {
		$('.lb-screen').fadeIn(300);
		bindForms();
		//bind to click
		$('.lb-close').click(function() {
			lbclose();
		});
	});
}
//close
function lbclose() {
	$('.lb-screen').fadeOut(300, function(){
		$('.lb-inner').html('');
	});
}
//close on esc
$(document).keyup(function(e) {
	e.preventDefault();
if (e.keyCode == 27) { lbclose() } // esc
});
//manage changes
function lbchange(content) {
	$('.lb-inner').slideUp(300,function() {
		$('.lb-inner').html(content).slideDown(300);
		bindForms();
	});
}
//bind ajax to forms
function bindForms() {
	$('.lb-content form').ajaxForm({success:function(responseText) {
		lbchange(responseText);
	}});
}
//data-b = true will open target in lightbox
$('a[data-lb="true"]').each(function(k,v) {
	$(this).click(function(e) {
		e.preventDefault();
		lbgo($(this).attr('href'));
	});
});
