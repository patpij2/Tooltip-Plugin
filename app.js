(function() {

    var globalTooltip = null;

    function asssignEvents(elems, type, event) {

        for(var i = 0; i < elems.length; i++) {
            elems[i].addEventListener(type, event, false);
        }
        
    }

    function createTooltip(text, options) {
        var tooltip = document.createElement("div");

        tooltip.className = "tooltip hidden";
        tooltip.appendChild(document.createTextNode(text));
        document.body.appendChild(tooltip);
        
        tooltip.style.left = options.x + options.w/2 - tooltip.offsetWidth / 2 + "px";
        // console.log(options.w)
        // console.log(tooltip.offsetWidth);
        tooltip.style.top = (options.y - tooltip.offsetHeight -10) + "px";
        
        tooltip.classList.remove("hidden");
        
        globalTooltip = tooltip;

    }

    function showTooltip(e) {

        var options = {
            w: e.target.offsetWidth,
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        };

        // console.log(options);
        // console.log('najechanie');

        var text = e.target.getAttribute('title');
        // console.log(text);
        
        createTooltip(text, options);

        e.target.removeAttribute("title");
    }

    function removetooltip(e) {
        e.target.setAttribute("title", globalTooltip.textContent)
        // console.log(globalTooltip.textContent)
        globalTooltip.parentNode.removeChild(globalTooltip);
    }


    function init(elems) {

        asssignEvents(elems, "mouseenter", showTooltip);
        asssignEvents(elems, "mouseleave", removetooltip);

    }

    window.t00ltip = init;

})(); 