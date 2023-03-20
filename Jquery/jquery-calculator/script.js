//default operator
var operator = '+';
$('.operator').click(function() {
    operator = $(this).attr('id');
})
$('#calculate').click(function() {
    $('.resultContent').hide();
    $('#answer').hide();
    if ($('#num1').val() == '') {
        $('.err').show();
    } else if ($('#num2').val() == '') {
        $('.err').show();
    } else {
        $('.err').hide();
        $('.resultContent').show();
        $('#answer').show();
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result = eval(num1 + operator + num2);
        $('#answer').html(num1 + " " + operator + " " + num2 + " = " + result);
    }
})