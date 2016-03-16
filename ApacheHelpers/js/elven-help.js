$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');
    
    $('#idGetPresidentsBtn').click(getPresidents);

    function getPresidents() {
        $.getJSON('/cgi-bin/get-presidents.py', function(presidents) {
            presidents.forEach(function(president) {
                $('#idPresidentsList').append('<li>' + president[1] + ' ' + president[2] + '</li>');
            });
        })
    }
});
