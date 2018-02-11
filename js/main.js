/////////////////////////
//// SUBSCRIBE
/////////////////////////

$(document).ready(function(){
	var pattern = /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/i;
	var subscribe_mail = $('#subscribe-email');
	subscribe_mail.keyup(function(){
		if(subscribe_mail.val() != ''){
				if(subscribe_mail.val().search(pattern) == 0){
					$('#form-message').text('Подходит');
					$('#subscribe-submit').attr('disabled', false);
					subscribe_mail.removeClass('unsuccessful').addClass('successful');
					$('#subscribe-submit').removeClass('b-error');
				}else{
					$('#form-message').text('Не подходит');
					$('#subscribe-submit').attr('disabled', true);
					subscribe_mail.removeClass('successful').addClass('unsuccessful');
					$('#subscribe-submit').addClass('b-error');
				}
			}else{
				$('#form-message').text('Поле e-mail не должно быть пустым!');
				subscribe_mail.addClass('unsuccessful');
				$('#subscribe-submit').attr('disabled', true);
			}
	});
});

/////////////////////////
//// CONTACT
/////////////////////////
(function( $ ){	
  //// ---> Check issue element
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	} 
  $(function() {   
    if(!is_mobile()){       
      if( $('#ct-form').exists()){     
        $('#ct-form').each(function(){       
          var form = $(this),
              btn = form.find('#ct-submit');
          form.find('.rfield').addClass('empty_field');
          btn.addClass('b-error');
          
          // Функция проверки полей формы      
          function checkInput(){
            
            form.find('.rfield').each(function(){
              
              if($(this).hasClass('mailfield')) {
                var mailfield = $(this);
                var pattern = /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/i;
					$(this).change(function(){
						///////
					});
                if(pattern.test(mailfield.val())){
                  mailfield.removeClass('empty_field unsuccessful').addClass('successful');
                } else {
                  mailfield.addClass('empty_field').removeClass('successful');
                }
              } else if($(this).val() != '') {
                $(this).removeClass('empty_field unsuccessful').addClass('successful');
              } else {
                $(this).addClass('empty_field').removeClass('successful');
              }
            });
          }
		  
          // Функция подсветки незаполненных полей
          function lightEmpty(){
            form.find('.empty_field').addClass('unsuccessful');
			//setTimeout(function(){
			//form.find('.empty_field').removeClass('unsuccessful');
			//},2000);
          }
        
          //  Полсекундная проверка
          setInterval(function(){
            checkInput();
            var sizeEmpty = form.find('.empty_field').length;
            if(sizeEmpty > 0){
              if(btn.hasClass('b-error')){
                return false
              } else {
                btn.addClass('b-error')
              }
            } else {
              btn.removeClass('b-error')
            }
          },500);
          
          //  Клик по кнопке
          btn.click(function(){
            if($(this).hasClass('b-error')){
              lightEmpty();
              return false
            } else {
              form.submit();
            }
          });         
        });  
      }
    }
  });
})( jQuery );






