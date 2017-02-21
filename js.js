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

});