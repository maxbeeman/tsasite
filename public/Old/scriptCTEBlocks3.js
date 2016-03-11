/**
 * Created by maxbee on 2/20/16.
 */
$(document).ready(function() {
    $(".cte_course_block").click(function() {
        $(this).css('background-color', 'red');
    });
   $('.cte_course_block').hover(
       function() {
           $(this).addClass("selected");
       },
       function() {
           $(this).removeClass("selected");
       });
});