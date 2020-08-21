//Sticky Navbar

window.onscroll = function() {
    myFunction()
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      document.getElementById("stickyimg").style.display = "flex";
      document.getElementById("home").style.display = "flex";
    } else {
      navbar.classList.remove("sticky");
      document.getElementById("stickyimg").style.display = "none";
      document.getElementById("home").style.display = "none";
    }
  }
  
  
  //Services drop down
  
  function classFunction() {
    document.getElementById("classes").style.display = "flex";
    document.getElementById("class-arrow-down").style.display = "block";
    document.getElementById("classimg").style.display = "flex";
    document.getElementById("coach").style.display = "none";
    document.getElementById("coach-arrow-down").style.display = "none";
    document.getElementById("coachimg").style.display = "none";
    document.getElementById("consulting").style.display = "none";
    document.getElementById("consult-arrow-down").style.display = "none";
    document.getElementById("consultimg").style.display = "none";
  };
  
  function coachFunction() {
    document.getElementById("classes").style.display = "none";
    document.getElementById("class-arrow-down").style.display = "none";
    document.getElementById("classimg").style.display = "none";
    document.getElementById("coach").style.display = "flex";
    document.getElementById("coach-arrow-down").style.display = "block";
    document.getElementById("coachimg").style.display = "flex";
    document.getElementById("consulting").style.display = "none";
    document.getElementById("consult-arrow-down").style.display = "none";
    document.getElementById("consultimg").style.display = "none";
  };
  
  function consultFunction() {
    document.getElementById("classes").style.display = "none";
    document.getElementById("class-arrow-down").style.display = "none";
    document.getElementById("classimg").style.display = "none";
    document.getElementById("coach").style.display = "none";
    document.getElementById("coach-arrow-down").style.display = "none";
    document.getElementById("coachimg").style.display = "none";
    document.getElementById("consulting").style.display = "flex";
    document.getElementById("consult-arrow-down").style.display = "block";
    document.getElementById("consultimg").style.display = "flex";
  };
  