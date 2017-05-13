function validate() {

        var loginname = document.getElementById("user");
        var password = document.getElementById("password");
        if(loginname.value == "maha" && password.value == "123"){

            var section = document.getElementById("logincard");

            var opacityversions = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
            var x = 0;
            (function next() {
                section.style.opacity = opacityversions[x];
                if(++x < opacityversions.length) {
                    setTimeout(next, 50); //depending on how fast you want to fade
                }
                else{
                  window.location.href = "landing.html";
                }
            })();
        }
        else{
            alert("Try Again! Check hint :P");
          
        }
      }