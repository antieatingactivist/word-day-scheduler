var dateEl = $('#currentDay');
var timeBlocksEl = $('#time-blocks');
var currentHour = 14;
// var currentHour = moment().format('H');



dateEl.text(moment().format('dddd, MMMM Do YYYY - h:mm:ss a'));
timeBlocksEl.append($('<div class="container"></div>'));

for (var i=9; i<=17; i++) {
    jQueryString = '#'+i;
    var hour = i;


    var storedText = localStorage.getItem(i);
    if (hour>12) hour-=12;
    drawTimeBlock(i);
    $(jQueryString).children().first().children().text(hour+':00');
    
    if (currentHour > i) {
        $(jQueryString).children().eq(1).addClass("past");
        
        // $(jQueryString).css({"left": (i*-3) +"px"});
        // if (i > 9) $(jQueryString).addClass("stacked");
    }
    else if (currentHour == i) {
        $(jQueryString).children().eq(1).addClass("present");
        // $(jQueryString).addClass("stacked");
    }
    else {
        $(jQueryString).children().eq(1).addClass("future");
        // $(jQueryString).addClass("unstacked");
    }
    $(jQueryString).children().eq(1).val(storedText);

}



function drawTimeBlock(id) {
    timeBlocksEl.children().first().append($(
        '<div class="input-group"><div class="input-group-prepend hour"><span class="input-group-text">X:XX</span></div><textarea class="form-control" aria-label="With textarea"></textarea><div class="input-group-append"><button class="input-group-text saveBtn">🔓</button></div></div>'
        ));
    timeBlocksEl.children().first().children().last().attr('id',id);
    timeBlocksEl.children().first().children().last().children().eq(1).attr('data-which',id);
    timeBlocksEl.children().first().children().last().children().eq(2).children().attr('data-which',id);
}

$('button').on('click', function(e) {
    e.preventDefault();
    var id = e.target.getAttribute("data-which");
    var text = $('#' + id).children().eq(1).val();
    console.log(text);
    localStorage.setItem(id,text);
    $('#' + id).children().eq(2).children().removeClass('unsaved');


    
});

$('textarea').on('keypress', function(e) {

    var id = e.target.getAttribute("data-which");
    $('#' + id).children().eq(2).children().addClass('unsaved');
   
});

