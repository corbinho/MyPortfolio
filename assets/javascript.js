var resumeInfo = $("#myResume");
resumeInfo.hide();
var welcomeToMyPage = $("#welcomeToMyPage");
var resumeInfo1 = $("#resumeBox");
var mario1 = $("#mario");
var portfolioLinks = $("#portfolioLinks");
portfolioLinks.hide()
var projectBox = $("#projectBox");

$(document).ready(function () {
    resumeInfo.hide();
    portfolioLinks.hide()
    var audio = new Audio('./assets/theme.mp3');
    const playPromise = audio.play();
    audio.loop = true;
    if (playPromise !== null) {
        playPromise.catch(() => {
            audio.play();
        })
    }
})

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: //left arrow
            $("#mario").finish().animate({
                left: "-=20"
            }, 100);
            $("#mario").addClass('flipped');
            var touchingResume = collision(resumeInfo1, mario1);
            var touchingProjects = collision(projectBox, mario1);
            if (touchingResume) {
                console.log("theyre touchingResume")
                resumeInfo.show();
                // welcomeToMyPage.hide()
            } else if (touchingProjects) {
                console.log("theyre touching projects")
                portfolioLinks.show();
                // welcomeToMyPage.hide()
            } else {
                portfolioLinks.hide()
                welcomeToMyPage.show()
                resumeInfo.hide()
                welcomeToMyPage.show()
            }
            break;
        case 38: //up arrow
            $("#mario").finish().animate({
                top: "-=60"
            }, 100);
            $("#mario").finish().animate({
                top: "+=60"
            }, 500);
            var touchingResume = collision(resumeInfo1, mario1);
            var touchingProjects = collision(projectBox, mario1);
            if (touchingResume) {
                console.log("theyre touchingResume")
                resumeInfo.show();
                // welcomeToMyPage.hide()
            } else if (touchingProjects) {
                console.log("theyre touching projects")
                portfolioLinks.show();
                // welcomeToMyPage.hide()
            } else {
                portfolioLinks.hide()
                welcomeToMyPage.show()
                resumeInfo.hide()
                welcomeToMyPage.show()
            }
            break;
        case 39: //right arrow key
            $("#mario").finish().animate({
                left: "+=20"
            }, 100);
            $("#mario").removeClass('flipped');
            var touchingResume = collision(resumeInfo1, mario1);
            var touchingProjects = collision(projectBox, mario1);
            if (touchingResume) {
                console.log("theyre touchingResume")
                resumeInfo.show();
                // welcomeToMyPage.hide()
            } else if (touchingProjects) {
                console.log("theyre touching projects")
                portfolioLinks.show();
                // welcomeToMyPage.hide()
            } else {
                portfolioLinks.hide()
                welcomeToMyPage.show()
                resumeInfo.hide()
                welcomeToMyPage.show()
            }
            break;
        // case 40: //bottom arrow key
        //     $("#mario").finish().animate({
        //         top: "+=20"
        //     }, 100);
        //     var touchingResume = collision(resumeInfo1, mario1);
        //     var touchingProjects = collision(projectBox, mario1);
        //     if (touchingResume) {
        //         console.log("theyre touchingResume")
        //         resumeInfo.show();
                welcomeToMyPage.hide()
        //     } else if (touchingProjects) {
        //         console.log("theyre touching projects")
        //         portfolioLinks.show();
                welcomeToMyPage.hide()
        //     } else {
        //         portfolioLinks.hide()
        //         welcomeToMyPage.show()
        //         resumeInfo.hide()
        //         welcomeToMyPage.show()
        //     }
        //     break;
    }
})

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

// function checkResumeTouch() {
//     var resumeInfo = $("#myResume");
//     var mario = $("#mario");
//     var marioBoxLeft = mario.css('left');
//     var marioBoxUpper = mario.css('top');

//     console.log("mario position " + marioBoxLeft + "and" + marioBoxUpper)
//     if (marioBoxLeft === "190px" && marioBoxUpper === "542px") {
//         console.log("overlap")

//         resumeInfo.show();
//     } else {
//         resumeInfo.hide()
//     }
// }