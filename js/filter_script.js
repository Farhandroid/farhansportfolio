//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){

	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
   /// alert(selector);
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});


$('.skill-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.skill-iso-nav ul li').click(function(){

	$('.skill-iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
   //alert(selector);
	$('.skill-iso').isotope({
		filter: selector
	});
	return false;
});

