// Declare current Day and current hour
var currentDay = moment().format('MMMM Do YYYY, h:mm a');
var currentHourBlock = moment().hours();

// Display the current date and time 
$('#currentDay').text(currentDay);

// Listen for save
$('.saveBtn').click(function () {
    // get calendar event and time
    var calenderEvent = $(this).siblings('.description').val();
    var hourBlock = $(this).parent().attr('id');

    storeLocal(hourBlock, calenderEvent);

});

// Store Calender event and hour block selected, in local storage 
function storeLocal(key, value) {
    localStorage.setItem(key, value);
}

// Check for local storage and render for data persistence
$('#hr_8 .description').val(localStorage.getItem('hr_8'));
$('#hr_9 .description').val(localStorage.getItem('hr_9'));
$('#hr_10 .description').val(localStorage.getItem('hr_10'));
$('#hr_11 .description').val(localStorage.getItem('hr_11'));
$('#hr_12 .description').val(localStorage.getItem('hr_12'));
$('#hr_13 .description').val(localStorage.getItem('hr_13'));
$('#hr_14 .description').val(localStorage.getItem('hr_14'));
$('#hr_15 .description').val(localStorage.getItem('hr_15'));
$('#hr_16 .description').val(localStorage.getItem('hr_16'));
$('#hr_17 .description').val(localStorage.getItem('hr_17'));

// TODO: Find a way to make the local storage rendering a method
// function displayLocal() {
//     var blockHourNumber = parseInt(document.getElementsByClassName('time-block').attr('id').split('_')[1]);
//     var storedEvent = localStorage.getItem(this.hourBlock);
//     if (storedEvent != null) {

//     }
// }

function timeBlockCheck() {

    // Loop the time blocks html elements
    $('.row').each(function () {
        var blockHourNumber = $(this).attr('id').split('_')[1];

        if (blockHourNumber < currentHourBlock) {
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
        } else if (currentHourBlock === currentHourBlock) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

timeBlockCheck();