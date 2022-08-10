const acc = document.getElementsByClassName("accordion");
let i=0;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  
}