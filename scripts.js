$(document).ready(function () {

    $("h1").css("background-color", "bisque");

    $(".expander h2").click(function () {
        $(this).parent().find("p").slideToggle(1500);

    });


    $(".secret").hover(function () {
        //$(this).css("background-color", "red");
        $("h1").css("background-color", "grey");
        $("changeBackground").css("background-color", "black")

    }, function () {
        //$(this).css("background-color", "white");
        $("h1").css("background-color", "bisque");

    });

    $(".buttonDiv").click(function () {

        $(this).addClass("clicked");

    });

});


function changeBg(color) {

    var color = '#' + color;
    document.body.style.background = color;


}

//function tend() {
// document.getElementById('my').style.visibility = 'visible';
//}

//function tn() {
// document.getElementById('my').style.visibility = 'hidden';
//}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
}
$('#alert').click(function () {
    alert('Thank You For Your Feedback Even Though It Will Never Be Read.');
});

function changeImage() {
    var image = document.getElementById("avatar");
    if (image.src.match("bulbon")) {
        image.src = "Nothing.png";
    } else {
        image.src = "Nothing Photo.png";
    }
}