# work-day-scheduler

## https://antieatingactivist.github.io/work-day-scheduler/

This is a simple work day scheduling app to help you keep track of tasks during the work day.


- It uses the moment.js library for time-based functionality

```
dateEl.text(moment().format('dddd, MMMM Do YYYY - h:mm:ss a'));
```

- It also uses a combination of jQuery and Bootstrap to draw the UI

```
timeBlocksEl.children().first().append($(
    '<div class="input-group"><div class="input-group-prepend hour"><span class="input-group-text">X:XX</span></div><textarea class="form-control" aria-label="With textarea"></textarea><div class="input-group-append"><button class="input-group-text saveBtn bi bi-save-fill"></button></div></div>'
    ));
```

- moment.js is also used to draw color indicators so that you wont lose track of time.

```
if (currentHour > i) {
     $(jQueryString).children().eq(1).addClass("past");
}
else if (currentHour == i) {
     $(jQueryString).children().eq(1).addClass("present");
}
else {
     $(jQueryString).children().eq(1).addClass("future");
}  
```




![recording](https://user-images.githubusercontent.com/1414728/148508915-28ef1838-5eab-4cfc-aa8a-044bc6969e2e.gif)




## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com)
* [Bootstrap](https://getbootstrap.com)
* [moment.js](https://momentjs.com)

## Deployed Link

* [https://antieatingactivist.github.io/work-day-scheduler/](https://antieatingactivist.github.io/work-day-scheduler/)


## Authors

Garrett Corbin

- [https://antieatingactivist.github.io/work-day-scheduler/](https://antieatingactivist.github.io/work-day-scheduler/)
- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)
