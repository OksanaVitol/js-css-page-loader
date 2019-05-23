/**
 * Created by Oksana on 15.03.2019.
 */
(function () {
    var didDone = false;
    function done() {
        //Prevent multiple done calls.
        if (!didDone) {
            didDone = true;
            //Loading completion functionality here.
            var element = document.getElementById('icon-load');
            element.classList.add("icon-load__animated", "icon-load__fadeOut");

            window.setTimeout(hideElement, 1000);
            function hideElement() {
                element.style.display = "none";
            }

        }
    }
    //Variables to keep track of state.
    var loaded = false;
    var minDone = false;
    //The minimum timeout.
    setTimeout(function () {
        mindone = true;
        //If loaded, fire the done callback.
        if (loaded) {
            done();
        }
    }, 2500);
    //Bind the load listener.
    window.onload = function () {
        loaded = true;
        //If minimum timeout done, fire the done callback.
        if (minDone) {
            done();
        }
    };
})();