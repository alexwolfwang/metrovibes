/**
 * Created by Alex.W on 2017/2/17.
 */
$(function() {

    //active changing function

    $('.nav-tabs li').on('click', function() {
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }

    });


    //checkbox's mark color changing function
    $('.save').each(function(){
        $(this).hide().after('<div class="saveCheckbox" />');

    });

    $('.saveCheckbox').on('click',function(){
        $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
    });


    //email validation function
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    //email box add style function

    var emailM = [];

    $('#plus').on('click',function() {
        var email = $('#email');
        if(email.val() !== '' && validateEmail(email.val())) {
            emailM.push(email.val());
            var btn = $("<button class='btn btn-success'></button>").text(emailM[emailM.length-1]);
            $('#emailBox').prepend(btn);
            email.val('');
            console.log(emailM[emailM.length-1])
        } else {
            email.val('');
        }
    })
});