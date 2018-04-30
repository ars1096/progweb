/**
 * Created by Adrian on 18/12/2017.
 */
jQuery(document).ready(function ($) {
    var x = $("#page").val();

    if (x === "") {
        $("#page").load("myPosts.html");
    }

    $(".noReload").click(function () {

        $.ajax({
            url: $(this).attr("href")
        })

            .done(function(html) {
                $("#page").empty().append(html);
            })

            .fail(function() {
                console.log("Error");
            })

            .always(function() {
                console.log("Completado");
            });

        return false;
    });
});