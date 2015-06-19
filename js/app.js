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
        event.preventDefault();
        var taskList = $('.must-do-tasks-list');
        var addTaskField = $(this).closest('.form-group').find('.form-control');
        var addTaskFieldValue = addTaskField.val();
        var newLine = $('<li><button class="check_button">Check</button><button class="remove_button">Remove</button><span>' + addTaskFieldValue + '</span></li>');
        taskList.append(newLine);
        taskList.find('.check_button').addClass('btn btn-sm btn-info');
        taskList.find('.remove_button').addClass('btn btn-sm btn-danger');
        addTaskField.val("");
    };
    $('.add_task_form').on('click.add_task', '.add-task', this.addTask);
}

$(document).ready(function(){
    $('.task_list').openAddTaskForm();
    $('.main_window').initialize();
    var general = new General();
});