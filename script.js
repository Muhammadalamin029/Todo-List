
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input");

$(".btn").on("click", function() {
    const inputText = $('#input').val();
    
    if (inputText === "") {
        alert("You have to add task!!!")
    } else {
        $("ul").prepend("<li>" + inputText +" <span class='fas' >\u00d7</span></li>");
        $('#input').val("");
        showData()
    }
});

$("ul").on("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("marked");
        showData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        showData()
    }
});

function showData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();
