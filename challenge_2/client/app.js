var server = "http://localhost:3000/";


var handlePost = function(data) {
    $.ajax({
        type: 'POST',
        data: data,
        contentType: 'application/json',
        url: server,
        success: function(response) {
            console.log(response);
            $('#csv').html("" + response);
        }
    });
}

$("#jsonForm").submit(function() {
    var data = $("#jsonData").val();
    console.log(typeof data);
    handlePost(data);
    return false;
})
