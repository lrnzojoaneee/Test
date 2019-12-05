/** load the functions after the html page is ready */
$(document).ready(function() {
    /** when a number is clicked, do the ff. */
    $('.num_button').click(function() {
    /** get the value on the display */
        var current = $("#da_display").val();
        /** checked if zer0 */
            if (current == '0') {
                current = "";
            }
            /**palitan ang naka-display */
        $("#da_display").val( current + $(this) .text());
    });
});