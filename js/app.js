/**
 * Created by Peter on 15.06.2015.
 */
$.fn.openAddTaskForm = function() {
    this.each(function(){
        $(this).on('click.add_task', '.add_task_button', function(event){
            event.preventDefault();
            $(this).closest('.task_pane').find('.add_task_form').slideToggle();
        });
    });
};

function General() {
    var taskList = $('.task_list');
    this.addTask =  function(event) {
        event.preventDefault();
        var taskList = $(this).closest('.task_pane').find('.task_list');
        var addTaskField = $(this).closest('.form-group').find('.form-control');
        var addTaskFieldValue = addTaskField.val();
        var newLine = $('<li><button class="check_button btn btn-sm btn-info">Check</button><button class="remove_button btn btn-sm btn-danger">Remove</button><span>' + addTaskFieldValue + '</span></li>');
        taskList.append(newLine);
        addTaskField.val("");
    };
    this.markTask = function(event) {
        event.preventDefault();
        if ($(this).closest('li').find('span').hasClass('checked')) {
            $(this).text('Check');
        }
        else {
            $(this).text('Uncheck');
        }
        $(this).closest('li').find('span').toggleClass('checked');
        $(this)
    };
    this.removeTask = function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    };
    $('.add_task_form').on('click.add_task', '.add_task', this.addTask);
    taskList.on('click.check_task', '.check_button', this.markTask);
    taskList.on('click.remove_task', '.remove_button', this.removeTask);
}

$(document).ready(function(){
    $('.task_pane').openAddTaskForm();
    var general = new General();
});