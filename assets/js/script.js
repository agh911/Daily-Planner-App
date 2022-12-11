var timeEl = $('#currentDay');
var rowsContainer = $('.container');
// Display the current day at the top of the calendar
var currentTime = moment().format("dddd, Do MMM YYYY");
timeEl.text(currentTime);

var workStartTime = moment(09, 'hours');
// While loop that loops through business day hours
while (workStartTime.hour() < 18) {
    rowsContainer.append(`<div class='time-block row'><p class="hour">${workStartTime.hour()}<p><textarea></textarea><button class='save.Btn'></button></div>`);
    workStartTime.add(1, 'hours');
}
        // For each loop generate or build html timeblock row

            // Append timeblock to container
                // Hour
                // Textarea
                // Save button
                    // When button is clicked - store/reset the event text corresponding withthe hour to localStorage
            // Increase hour by one
            // Check if hour is past, current or future and apply the corresponding CSS class to the timeblock
