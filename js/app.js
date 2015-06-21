/**
 * Created by Peter on 15.06.2015.
 */
$.fn.openAddTaskForm = function() {
    this.each(function(){
        $(this).on('click.add_task', '.add_task_button', function(event){
            event.preventDefault();
            $(this).closest('.task_pane').find('.add_task_form').toggleClass('hidden');
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
        var taskList = $(this).closest('.task_pane').find('.task_list');
        var addTaskField = $(this).closest('.form-group').find('.form-control');
        var addTaskFieldValue = addTaskField.val();
        var newLine = $('<li><button class="check_button btn btn-sm btn-info">Check</button><button class="remove_button btn btn-sm btn-danger">Remove</button><span>' + addTaskFieldValue + '</span></li>');
        taskList.append(newLine);
        addTaskField.val("");
    };
    $('.add_task_form').on('click.add_task', '.add_task', this.addTask);
}

$(document).ready(function(){
    $('.task_pane').openAddTaskForm();
    $('.main_window').initialize();
    var general = new General();
});