var server = "http://localhost:3000/";


var handlePost = function(data) {
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: server,
        success: function(response) {
            console.log('success');
            console.log(response);
            $('#csv').html("" + response.input);
        }
    });
}

$("#jsonForm").submit(function() {
    var data = {input: $("#jsonData").val()}
    handlePost(data);
    return false;
})
