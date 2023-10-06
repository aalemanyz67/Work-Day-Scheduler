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
//})
//saveBtn.addEventListener("click",function(event){
    //event.preventDefault();
//})
    
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
$("description").each(function(index){
    var hour = dayjs().hour()

})

displayTime();
setInterval(displayTime, 1000);
