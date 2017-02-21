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

    document.getElementById('plus').addEventListener('click',function() {
        var email = document.getElementById('email');
        if(email.value !== '' && validateEmail(email.value)) {

        } else {
            email.value = '';
        }
    })
});