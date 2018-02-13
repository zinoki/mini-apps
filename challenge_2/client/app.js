// ajax request

var server = "http://localhost:3000/";
// make sure you can grab data from form 


var handlePost = function(data) {
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: server,
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });
}

$("#jsonForm").submit(function() {
    console.log($("#jsonData").val())
    var data = {body: $("#jsonData").val()}
    handlePost(data);
    return false;
})




// $.ajax({
//     type: "POST",
//     url: server,
//     data: data,

// })

// $.post( server, function( data ) {
//     $( "#test" ).html( data );
//     console.log(data);
//   });