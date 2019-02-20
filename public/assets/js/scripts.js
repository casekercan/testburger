
$(document).ready(function () {
    $(".eat").on("click", function (event) {
        event.preventDefault();
        var id = $(this).val();

        // Send the PUT request.
        $.ajax("/burger/update/" + id, { type: "PUT", }).then(
            function () {
                console.log("burger eatten");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-update-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newburger = {
            name: $("#name").val().trim(),
        };

        // Send the POST request.
        $.ajax("/burger/create", {
            type: "POST",
            data: newburger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
