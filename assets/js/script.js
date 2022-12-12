var timeEl = $('#currentDay');
var rowsContainer = $('.container');
// Display the current day at the top of the calendar
var displayTime = moment().format("dddd, MMMM Do");
timeEl.text(displayTime);

var businessHours = moment().hour(9, 'H');
// While loop that loops through business day hours and generate or build html timeblock row
while (businessHours.hour() < 22) {
    // console.log(businessHours);
    // Append timeblock to container
        // Hour
        // Textarea
        // Save button
        var workHour = businessHours.format('h')
        var hourId = workHour;
    rowsContainer.append(`<div class='row time-block'><p class="hour col-md-1">${businessHours.format('HA')}</p><textarea class="description col-md-10" id='${hourId}'></textarea><button class='btn saveBtn col-md-1'><i class="fas fa-archive"></i></button></div>`);
    // Increase hour by one
    businessHours.add(1, 'hours');
}

             // When button is clicked - store/reset the event text corresponding withthe hour to localStorage
    // Check if hour is past, current or future and apply the corresponding CSS class to the timeblock
