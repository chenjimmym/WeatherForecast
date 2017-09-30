$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)

        $("form").submit(function(event) {
            event.preventDefault();
        });

        var city = $("input[name=city]").val();
        alert(city);
        $.get(url, function(res) {
            // your code here
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
