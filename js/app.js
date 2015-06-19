/**
 * Created by Peter on 15.06.2015.
 */
$.fn.openAddTaskForm = function() {
    this.each(function(){
        $(this).on('click.add_task', '.add_task_button', function(event){
            event.preventDefault();
            $(this).closest('.task_list').find('.add_task_form').toggleClass('hidden');
        });
    });
};
$.fn.initialize = function() {
    $('.add_task_form').addClass('hidden');
    var mustDoTasks = [];
};

function General() {
    this.addTask =  function(event) {
        var newTask = $(this).closest('.form-group').find('.form-control');
        event.preventDefault();
        var newLine = $('<li></li>');
        newLine.text(newTask.val());
        $('.must-do-tasks-list').append(newLine);
        newTask.val("");
    };
    $('.add_task_form').on('click.add_task', '.add-task', this.addTask);
}

$(document).ready(function(){
    $('.task_list').openAddTaskForm();
    $('.main_window').initialize();
    var general = new General();
});