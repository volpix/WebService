$(document).ready(function () { //click
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        success: function (result) { //200 OK    
            $('#tbl tbody').empty();
            $.each(result, function (index, item) {
                var fila =
                    '<tr>'
                    + "<td class='text-center'>" + item.title + "</td>"
                    + "<td class='text-center'><img src=" + item.thumbnailUrl + "></td>"
                    + "</tr>";
                $("#tbl tbody").append(fila);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};