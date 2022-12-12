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
