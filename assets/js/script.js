var timeEl = $('#currentDay');
var rowsContainer = $('.container');
// Display the current day at the top of the calendar
var displayTime = moment().format("dddd, MMMM Do");
timeEl.text(displayTime);

var businessHours = moment().hour(9, 'H');
// While loop that loops through business day hours and generate or build html timeblock row
while (businessHours.hour() < 18) {
    var workHour = businessHours.format('H');
    var hourId = workHour;
    // Append timeblock to container
        // Hour
        // Textarea
        // Save button
    rowsContainer.append(`<div class='row time-block'><p class="hour col-md-1">${businessHours.format('HA')}</p><textarea class="description col-md-10" id='${hourId}'></textarea><button class='btn saveBtn col-md-1'><i class="fas fa-archive"></i></button></div>`);
    // Increase hour by one
    businessHours.add(1, 'hours');
    checkTime();
}

// Check if hour is past, current or future and apply the corresponding CSS class to the timeblock
function checkTime() {
    var currentTime = moment().hours();
    var hourIdArray = [];
    // Loop through the textareas
    $('textarea').each(function () {
        // Getting the id of each textarea
        var textareaId = $(this).attr('id');
        // Add to the array
        hourIdArray.push(textareaId);
    });
    //Compare index value to currentTime
    for (i = 0; i < hourIdArray.length; i++) {
        var textArea = $(`#${hourIdArray[i]}`);
        if (hourIdArray[i] === currentTime) {
            textArea.addClass("present");
        } else if (hourIdArray[i] < currentTime) {
            textArea.addClass("past");
        } else {
            textArea.addClass("future");
        }
    }
}
// When button is clicked - store/reset the event text corresponding withthe hour to localStorage
// Grab button
saveBtn = $('.saveBtn');
// Add event listener
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();
    // Save the text for that event to localStorage
    localStorage.setItem(time, task);
    // Confirm to user that data was saved by displaying a feedback
    rowsContainer.prepend(`<p class="feedback">Task saved to <span>localStorage<span></p>`);
    // Hide SAVE feedback after 1.5 sec
    setInterval(function () {
        $('.feedback').addClass('hide');
    }, 1500);
});

// Create function to display the data that was previously saved 
function getSavedTasks() {
    $(".hour").each(function() {
        var savedHour = $(this).text();
        var savedTask = localStorage.getItem(savedHour);

        if(savedTask !== null) {
            $(this).siblings(".description").val(savedTask);
        }
    });
}
// Call function to display the tasks saved to localStorage
getSavedTasks();