/**
 * Created by Peter on 15.06.2015.
 */
$.fn.addTask = function() {
    this.each(function(){
        $(this).on('click.add_task', '.add_task_button', function(){
            event.preventDefault();
            $(this).closest('.task_list').find('.task_add_form').fadeToggle();
        });
    });
};
$(document).ready(function(){
    $('.task_list').addTask();
    $('.task_add_form').addClass('hidden');
});