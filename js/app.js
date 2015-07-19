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
    var list = $('.task_list');

    this.addTask =  function(event) {
        event.preventDefault();
        // declare variables
        var taskList = $(this).closest('.task_pane').find('.task_list');
        var addTaskField = $(this).closest('.form-group').find('.form-control');
        var addTaskFieldValue = addTaskField.val();
        // append new task
        if (addTaskFieldValue.length > 0) {
            // clone old task to set-up a new one
            var newLine = $(this).closest('.task_pane').find('li:first-child').clone();
            // insert new task text into the cloned task
            newLine.find('span').html(addTaskFieldValue);
            // remove from the cloned task the previous "Checked" class
            newLine.find('span').removeClass('checked');
            // change for the cloned task the button text to "Check"
            newLine.find('.check_button').text('Check');
            // add cloned task at the end of the Task List
            taskList.append(newLine);
            // clear the Add New Task text field
            addTaskField.val("");
        }
    };

    this.checkTask = function(event) {
        event.preventDefault();
        // declare variables
        var taskList = $('.must_do li');
        var check = 0;
        // change button text "Check" <=> "Uncheck"
        if ($(this).closest('li').find('span').hasClass('checked')) {
            $(this).text('Check');
        }
        else {
            $(this).text('Uncheck');
        }
        // check or uncheck the task
        $(this).closest('li').find('span').toggleClass('checked');
        // count all checked tasks
        for (var i = 0, taskListLength = taskList.length; i < taskListLength; i++) {
            if (taskList.eq(i).find('span').hasClass('checked')) {
                check++;
            }
        }
        // show Fun Tasks if all must-do tasks are completed
        if (check == taskList.length) {
            $(this).closest('.main_window').find('.fun_pane').fadeIn();
        }
        else {
            $(this).closest('.main_window').find('.fun_pane').fadeOut();
        }

    };

    this.removeTask = function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    };

    $('.add_task_form').on('click.add_task', '.add_task', this.addTask);
    list.on('click.check_task', '.check_button', this.checkTask);
    list.on('click.remove_task', '.remove_button', this.removeTask);
}

$(document).ready(function(){
    $('.task_pane').openAddTaskForm();
    var general = new General();
});