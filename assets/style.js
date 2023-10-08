var timeDisplayEl = $('#time-display');





   
//var textArea = document.querySelector("addText");
//var saveBtn = document.querySelector("save");
//$(function(){
    $('button').each(function(index){
        $(this).on('click', function(event){
           var text = $(this).siblings('.description').val()
            var id = $(this).parent().attr("id")
            localStorage.setItem(id, text);
            
            
        })
    })
var storage = localStorage.getItem("hour-9")
$("#hour-9").children(".description").val(storage)
var storage = localStorage.getItem("hour-10")
$("#hour-10").children(".description").val(storage)
var storage = localStorage.getItem("hour-11")
$("#hour-11").children(".description").val(storage)
var storage = localStorage.getItem("hour-12")
$("#hour-12").children(".description").val(storage)
var storage = localStorage.getItem("hour-13")
$("#hour-13").children(".description").val(storage)
var storage = localStorage.getItem("hour-14")
$("#hour-14").children(".description").val(storage)
var storage = localStorage.getItem("hour-15")
$("#hour-15").children(".description").val(storage)
var storage = localStorage.getItem("hour-16")
$("#hour-16").children(".description").val(storage)
var storage = localStorage.getItem("hour-17")
$("#hour-17").children(".description").val(storage)

//})
//saveBtn.addEventListener("click",function(event){
    //event.preventDefault();
//})
    
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
$(".description").each(function(index){
    var hour = dayjs().hour()
    var id = $(this).parent().attr("id")
    id = id.split ("-")[1]
    if (id < hour ) {
        $(this).addClass('past')

    }
    if (id > hour ) {
        $(this).addClass('future')

    }
    if (id = hour ) {
        $(this).addClass('past')

    }
})
$(".description").each(function(index){
    var minute = dayjs().minute()
    var id = $(this).parent().attr("id")
    id = id.split ("-")[1]
    if (id < minute ) {
        $(this).addClass('past')

    }
    if (id > minute ) {
        $(this).addClass('future')

    }
    if (id = minute ) {
        $(this).addClass('past')

    }
})
displayTime();
setInterval(displayTime, 1000);
