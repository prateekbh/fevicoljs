/*============================
Author : Prateek Bhatnagar
Data : 7th-Sept-2015
Description : This facilitates the initialization of the framework
=============================*/
(function(gems,veronica){
    function init() {

        if (!gems.capabilities.testAnimationCapability()) {
            $("body")[0].classList.add("noanim");
        }

        if (gems.capabilities.isBrowserSemiSupported()) {
            globals.BROWSER_SUPPORT = "B";
            $("body")[0].classList.add("noanim");
        }

        //mount riot
        //only mount pages else some components might get mounted twice
        //riot.mount("*", {});

        //mount initial page
        if(gems.totalRouteLength()>0){
            veronica.loc(location.pathname);
            gems.Dispatcher.trigger("veronica:init");
            window.dispatchEvent(gems.capabilities.createEvent("veronica:init"));
        }

        document.addEventListener("click", gems.capabilities.handleClick);
    }

    document.onreadystatechange = function() {
        if (document.readyState == "interactive") {
            init();
        }
    };
})(gems,veronica);