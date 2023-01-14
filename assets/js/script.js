moment().format("MMM Do YY"); 


const container = $(".container");
const time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
const currentHour = moment().hour() - 9;
const date = $("<h1>");
var value = $(this).siblings('.description').val();

date.text(moment().format('dddd MMMM Do' + ", " + 'YYYY'));
container.append(date);

function saveTask() {
    localStorage.setItem($(this).attr("id"), $(this).prev().val());

    $(this).prev().transfer( {
        to: $( $(this) ),
        duration: 400
      } );
};
localStorage.setItem(time,value);
localStorage.getItem(time, value);

$("9am").val(localStorage.getItem("9am"));
$("10am").val(localStorage.getItem("10am"));
$("11am").val(localStorage.getItem("11am"));
$("12pm").val(localStorage.getItem("12pm"));
$("1pm").val(localStorage.getItem("1pm"));
$("2pm").val(localStorage.getItem("2pm"));
$("3pm").val(localStorage.getItem("3pm"));
$("4pm").val(localStorage.getItem("4pm"));
$("5pm").val(localStorage.getItem("5pm"));
window.onload = onSiteLoaded();

$(".saveBtn").on("click", function () {

})

function onSiteLoaded() {
    for (i = 0; i < 9; i++) {
        if (i < currentHour) {
            var timeClass = "past";
        }
        else if (i === currentHour) {
            var timeClass = "present";
        }
        else if (i > currentHour) {
            var timeClass = "future";
        }
        var row = $("<div>");
            row.attr("class", "row");
            container.append(row);
        var label = $("<label>");
            label.attr("class", "col-2 col-sm-1 time-block hour");
            label.text(time[i]);
            row.append(label);
        var textArea = $("<textarea>");
            textArea.attr("class", "col-8 col-sm-10 description " + timeClass);
            textArea.text(localStorage.getItem("btn" + i));
            row.append(textArea);
        var button = $("<button>");
            button.attr("class", "col-2 col-sm-1 saveBtn fas fa-save");
            button.attr("id", "btn" + i);
            row.append(button);
    };
};

