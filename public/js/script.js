
document.addEventListener('DOMContentLoaded', function () {
  new Splide( '.slider2', {
    perPage    : 5,
    autoplay   : true,
    gap        : '0.25rem',
    focus      : 0,
    omitEnd    : true,
    type       : 'loop',
    pagination : false
  }).mount();

  new Splide( '.slider3',{
    arrows       : false,
    autoplay    : true,
    type        : 'loop',
    pagination  : false,
  }).mount();
});    


$(document).ready(function(){   
  $(".button").click(function(){
    let animal = $(this).attr("data-animal");
      if (animal == "semua") {
          $(".card-cart").first().show("fast", function nextShow(){
              $(this).next(".card-cart").show("fast", nextShow);
          });
      }else{
          $(".card-cart").not("."+animal).hide("1000")
          $(".card-cart").filter("."+animal).show("1000")
      }
  })
})

$('#viewdata').on('keyup', '#keyword', function(){
	$('.loader').show();
	//variable untuk menampung nilai input dari keyword
	const keyword = $('#keyword').val();

	$.ajax({
		url: 'contents/product_data.php?keyword='+keyword,
		type: 'post',
		data: 'keyword='+keyword,
		success: function(response){
			if(response){
				$('.loader').hide('slow').fadeOut(1000);
				$('#product-data').html(response);
			}else{
				Swal.fire("Data no found");
			}
		}
	});
});
