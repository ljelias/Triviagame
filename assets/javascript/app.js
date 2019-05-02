$(document).ready(function () {

    //hide questions, finish button, results div
    $('#questions').hide();
    $('#finish').hide();
    $('#results').hide();

    var timerNumber = 60;
    var intervalId;
    //var rightAnswer = 0;
   // var wrongAnswer = 0;
    //var notAnswered = 0;

    
    $('#start').on('click', function() {
        $(this).hide();
        showQs();
        runTimer();
    });
    
    //show questions and finish button
    function showQs() {
        $('#questions').show();
        $('#finish').show();
    }

    //start countdown
    function runTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        // decrease number by one
        timerNumber--;
        //show seconds in countdown span
        $("#countdown").html(timerNumber);
        // stop at zero seconds
        if (timerNumber === 0) {
            wrapup();
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    $('#finish').on('click', function() {
        $('#finish').hide();
        wrapup();
        stop();
    });

    function wrapup () {
        $('#questions').hide();
        $('#finish').hide();
        $('#results').show();    
    }

    //tally right and wrong answers 
    //find radio buttons selected with value of true and value of false
    //$('input[type=radio]') function () {
    //    rightAnswer = ;
    //    wrongAnswer = ;
    //    notAnswered = (12 - (rightAnswer + wrongAnswer));
    //});

    //post tallies to results div

});