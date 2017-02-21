/**
 * Created by Alex.W on 2017/2/17.
 */
$(function() {
    $('.save').each(function(){
        $(this).hide().after('<div class="saveCheckbox" />');

    });

    $('.saveCheckbox').on('click',function(){
        $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

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