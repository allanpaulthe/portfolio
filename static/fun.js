          function openNav() {
              document.getElementById("mySidenav").style.width = "250px";
              //document.getElementById("pic").style.marginLeft = "250px";
              //document.getElementById("main").style.marginLeft = "250px";
              document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          }

          function closeNav() {
              document.getElementById("mySidenav").style.width = "0";
              document.getElementById("main").style.marginLeft= "0";
              document.getElementById("pic").style.marginLeft = "0";
              document.body.style.backgroundColor = "white";
          }
          function loadpic() {
            document.getElementById("imgg").style.width="15vmax";
          }
          function closepic() {
            document.getElementById("imgg").style.width="0";
            document.getElementById("bodymain").style.width="auto";
          }
          function addclass(){
            document.getElementById("social").classList.add("animated", "bounce")
          }
          function removeclass(){
            document.getElementById("social").classList.remove("animated", "bounce")
          }
          var overlay = document.getElementById("overlay");
          window.setTimeout(function(){
            overlay.style.display="none";
            document.getElementById("view").style.display="block";
          },3000)