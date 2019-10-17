
var countrycode = function(){
    $('#country-codes li a').on('click', function() {
        $('#country-codes button span.value').text($(this).attr('value'));
    });
}
