var dateEl = $('#currentDay');
var timeBlocksEl = $('#time-blocks');
// var currentHour = 14;
var currentHour = moment().format('H');

dateEl.text(moment().format('dddd, MMMM Do YYYY - h:mm:ss a'));
window.setInterval(function() {
    dateEl.text(moment().format('dddd, MMMM Do YYYY - h:mm:ss a'));
    if (currentHour != moment().format('H')) {
        currentHour = moment().format('H');
        colorize();
       
    }
},1000);




for (var i=9; i<=17; i++) {
    var jQueryString = '#'+i;
    var hour = i;
    var storedText = localStorage.getItem(i);
    if (hour>12) hour-=12;
    drawTimeBlock(i);
    $(jQueryString).children().first().children().text(hour+':00');
    $(jQueryString).children().eq(1).val(storedText);

}

function colorize() {
    $('textarea').removeClass("future");
    $('textarea').removeClass("past");
    $('textarea').removeClass("present");
   
    for (var i=9; i<=17; i++) {
        var jQueryString = '#'+i;   
        if (currentHour > i) {
            $(jQueryString).children().eq(1).addClass("past");
        }
        else if (currentHour == i) {
            $(jQueryString).children().eq(1).addClass("present");
        }
        else {
            $(jQueryString).children().eq(1).addClass("future");
        }

    }
}
colorize();

function drawTimeBlock(id) {
    timeBlocksEl.children().first().append($(
        '<div class="input-group"><div class="input-group-prepend hour"><span class="input-group-text">X:XX</span></div><textarea class="form-control" aria-label="With textarea"></textarea><div class="input-group-append"><button class="input-group-text saveBtn bi bi-save-fill"></button></div></div>'
        ));
    timeBlocksEl.children().first().children().last().attr('id',id);
    timeBlocksEl.children().first().children().last().children().eq(1).attr('data-which',id);
    timeBlocksEl.children().first().children().last().children().eq(2).children().attr('data-which',id);
}

$('button').on('click', function(e) {
    e.preventDefault();
    var id = e.target.getAttribute("data-which");
    var text = $('#' + id).children().eq(1).val();
    localStorage.setItem(id,text);
    $('#' + id).children().eq(2).children().removeClass('bi-save');
    $('#' + id).children().eq(2).children().addClass('bi-save-fill');
    

    
});

$('textarea').on('keydown', function(e) {
    var id = this.getAttribute("data-which");
    $('#' + id).children().eq(2).children().removeClass('bi-save-fill');
    $('#' + id).children().eq(2).children().addClass('bi-save');
   
});

