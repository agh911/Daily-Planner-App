var timeEl = $('#currentDay');
var rowsContainer = $('.container');
// Display the current day at the top of the calendar
var currentTime = moment().format("dddd, MMMM Do");
timeEl.text(currentTime);

var workStartTime = moment(09, 'hours');
// While loop that loops through business day hours and generate or build html timeblock row
while (workStartTime.hour() < 18) {
    // Append timeblock to container
        // Hour
        // Textarea
        // Save button
    rowsContainer.append(`<div class='row time-block'><p class="hour col-md-1">${workStartTime.format('hh a')}</p><textarea class="col-md-10 description"></textarea><button class='btn saveBtn col-md-1'><i class="fas fa-archive"></i></button></div>`);
    // Increase hour by one
    workStartTime.add(1, 'hours');
}
             // When button is clicked - store/reset the event text corresponding withthe hour to localStorage
    // Check if hour is past, current or future and apply the corresponding CSS class to the timeblock

