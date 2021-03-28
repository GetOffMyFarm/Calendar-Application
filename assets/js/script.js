var textAreas = document.querySelectorAll('.w-75');
var editText = "";
var textBoxTarget = ".w-75[value='" + editText + "']"
var newInput = "<input type='text' class='form-control' id='" + editText + "'/>"

function currentList() {
    for (var i = 0; i < textAreas.length; i++) {
        if (localStorage.getItem(i) && textAreas.item(i).innerHTML.length < 1) {
        var setItem = "<p>" + localStorage.getItem(i); + "</p>";
        $(textAreas.item(i)).append(setItem);
        }
    }
}

currentList();

function currentTime() {
    $('#currentDay').html(moment().format('MMMM D YYYY hh:mm:ss A'));
}
setInterval(currentTime, 100);

$(".time-check").each(function() {
    var time = $(this).data("number");
    var now = moment().hour();
    if (time < now) {
        $(this).parent().css({"backgroundColor": "gray"});
    } 
    else if (time == now) {
        $(this).parent().css({"backgroundColor": "red"});
    } 
    else if (time > now) {
        $(this).parent().addClass("table-dark");
    }
});

$(".btn-warning").click(function(event){
    editText = event.target.value;
    textBoxTarget = ".w-75[value='" + editText + "']"
    newInput = "<input type='text' class='form-control' id='" + editText + "'/>"
    $(textBoxTarget).append(newInput); 
});

$(".btn-success").click(function(event){
    editText = event.target.value;
    textBoxTarget = ".w-75[value='" + editText + "']"
    newInput = "<input type='text' class='form-control' id='" + editText + "'/>"
    var newIdTarget = "#" + editText;
    var newListItem = $(newIdTarget).val();
    localStorage.setItem(editText, newListItem);
    $(newIdTarget).remove();
    currentList();
});