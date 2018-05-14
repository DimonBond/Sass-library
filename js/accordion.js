var acc = document.getElementsByClassName("ada-accordion__item");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("ada-accordion__active");

        var panel = this.nextElementSibling;
      
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
