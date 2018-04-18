function main() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("pictures");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000); // 7 seconds between pictures changing
    }

    function clock() {

        var today = new Date();
        var curr_hour = today.getHours();
        var curr_minute = today.getMinutes();
        var curr_second = today.getSeconds();
        var cur_time = curr_hour + ":" + curr_minute + ":" + curr_second;
        console.log(cur_time);

        if (curr_minute < 10)
            curr_minute = "0" + curr_minute;

        var suffix = "AM";
        if (curr_hour >= 12) {
            suffix = "PM";
            curr_hour = curr_hour - 12;
        }
        if (curr_hour == 0) {
            curr_hour = 12;
        }

        var cur_time = curr_hour + ":" + curr_minute + ":" + curr_second + " " + suffix;



        function startTime() {
            setInterval(main, 500);
        }
    }
}