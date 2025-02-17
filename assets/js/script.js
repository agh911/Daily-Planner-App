var timeEl = $('#currentDay');
var rowsContainer = $('.container');
// Display the current day at the top of the calendar
var displayTime = moment().format('dddd, MMMM Do');
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
    rowsContainer.append(`<div class='row time-block'><p class="hour col-md-1">${businessHours.format('HA')}</p><textarea class="description col-md-10" id='${hourId}'></textarea><button class='saveBtn col-md-1'><i class="fas fa-archive"></i></button></div>`);
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
        // Get the id of each textarea
        var textareaId = $(this).attr('id');
        // Add to the array
        hourIdArray.push(textareaId);
    });
    //Compare index value to currentTime
    for (i = 0; i < hourIdArray.length; i++) {
        var textarea = $(`#${hourIdArray[i]}`);
        if (hourIdArray[i] < currentTime) {
            textarea.addClass('past');
        } else if (hourIdArray[i] == currentTime) {
            textarea.addClass('present');
        } else {
            textarea.addClass('future');
        }
    }
}
// When button is clicked - store/reset the event text corresponding withthe hour to localStorage
function saveOnClick() {
    var time = $(this).siblings('.hour').text();
    var task = $(this).siblings('.description').val();
    // Save the text for that event to localStorage
    if (task === '') {
        alert('Looks like you forgot to enter a task. Please type one, then click Save.');
    } else {
        localStorage.setItem(time, task);
        // Confirm to user that data was saved by displaying a feedback
        rowsContainer.prepend(`<p class="feedback">Task saved to <span>localStorage<span> ✓</p>`);
        // Hide SAVE feedback after 2 sec
        setInterval(function () {
            $('.feedback').addClass('hide');
        }, 2000);
    }
}
// Grab button
saveBtn = $('.saveBtn');
// Add event listener to saveBtn
saveBtn.on('click', saveOnClick);

// Create function to display the data that was previously saved 
function getSavedTasks() {
    $('.hour').each(function () {
        var savedHour = $(this).text();
        var savedTask = localStorage.getItem(savedHour);

        if (savedTask !== null) {
            $(this).siblings('.description').val(savedTask);
        }
    });
}
// Call function to display the tasks saved to localStorage
getSavedTasks();

rowsContainer.after(`<div class="center"><button id="clear" class="btn btn-lg btn-dark">Clear calendar</button></div>`);
var clearBtn = $('#clear')
clearBtn.on('click', function clearCalendar() {
    localStorage.clear();
    // Refesh page -> tasks no longer displayed as localStorage is first cleared
    window.location.reload();
});