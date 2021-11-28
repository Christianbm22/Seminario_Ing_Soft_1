$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                description: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                price: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                name: {
                    required: "¡Oye!, Tienes un nombre, ¿no?",
                    minlength: "Tu nombre debe contener al menos 2 caracteres"
                },
                description: {
                    required: "Vamos, necesito de una descripción",
                    minlength: "Tu descripción debe contener al menos 4 caracteres"
                },
                number: {
                    required: "",
                    minlength: ""
                },
                email: {
                    required: "Sin email no hay forma de comunicarse"
                },
                price: {
                    required: "¡Oye!, recuerda que el pago es para un software de calidad",
                    minlength: "Ok..."
                }
            },
            /*submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }*/
        })
    })
        
 })(jQuery)
})