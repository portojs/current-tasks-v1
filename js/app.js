/**
 * Created by Peter on 15.06.2015.
 */
$.fn.addTask = function() {
    this.each(function(){
        $(this).on('click.add_task', '.add_task_button', function(){
            event.preventDefault();
            $(this).closest('.task_list').find('.add_task_form').toggleClass('hidden');
        });
    });
};
$.fn.initialize = function() {
    $('.add_task_form').addClass('hidden');
};
$(document).ready(function(){
    $('.task_list').addTask();
    $('.main_window').initialize();
});