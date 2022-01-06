var dateEl = $('#currentDay');
var timeBlocksEl = $('#time-blocks');
var currentHour = 12;


dateEl.text(moment().format('dddd, MMMM Do YYYY - h:mm:ss a'));
timeBlocksEl.append($('<div class="container"></div>'));

for (var i=9; i<=17; i++) {
    var hour = i;
    if (hour>12) hour-=12;
    drawTimeBlock(i);
    $('#'+i).children().first().children().text(hour+':00');
    if (currentHour > i) {
        $('#'+i).children().eq(1).addClass("past");
    }
    else if (currentHour === i) {
        $('#'+i).children().eq(1).addClass("present");
    }
    else {
        $('#'+i).children().eq(1).addClass("future");
    }
}



function drawTimeBlock(id) {
    timeBlocksEl.children().first().append($(
        '<div class="input-group" id="'+ id +'"><div class="input-group-prepend"><span class="input-group-text">X:XX</span></div><textarea class="form-control" aria-label="With textarea"></textarea><div class="input-group-append"><span class="input-group-text saveBtn">🔓</span></div></div>'
        ));
}