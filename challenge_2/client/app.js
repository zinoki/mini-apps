var server = "http://localhost:3000/";


var handlePost = function(data) {
    $.ajax({
        type: 'POST',
        data: data,
        contentType: 'application/json',
        url: server,
        success: function(response) {
            $('#csv').html("" + response);
        }
    });
}

$("#jsonForm").submit(function() {
    var data = $("#jsonData").val();
    handlePost(data);
    return false;
})
