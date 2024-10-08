window.onload = function() {
        function reduceOpacity() {
            hoveringSquare.addEventListener("mouseover", function() {
                square.style.opacity = 0.5;
            });
        }
        function resetOpacity() {
            hoveringSquare.addEventListener("mouseleave", function() {
                square.style.opacity = 1;
            });
            
        }
        const hoveringSquare = document.getElementById("square");
        reduceOpacity();
        resetOpacity();

}
