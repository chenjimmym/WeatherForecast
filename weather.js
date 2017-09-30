$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)

        $("form").submit(function(event) {
            event.preventDefault();
        });

        var city = $("input[name=city]").val();
        alert(city);
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9b8fdd801549a1d8123c9aa00e51a3d0`, function(result) {
            // your code here
            console.log(result);
            var fah = Math.floor((9/5)*(result.main.temp-273)+32);
            $('#container').append(`
                <h2>${result.name}</h2>
                <h3>Temperature: ${fah}</h3>
            `);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
