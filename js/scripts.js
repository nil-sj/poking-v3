const details = navigator.userAgent;
const regexp = /android|iphone|kindle|ipad/i;
const regexp1 = /(CrOS)/;
const isMobileDevice = regexp.test(details);
const isChromebook = regexp1.test(details);

let keyCombination = "Win + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";
if (isChromebook) keyCombination = "Ctrl + Shift + Enter";
document.querySelector(".command").textContent = keyCombination;

if (isMobileDevice) {
    document.getElementById("instruction").textContent = "Let your kiddo click on screen to discover favorite cartoon animals.";
    document.querySelector(".bar").classList.add("hide");
    document.querySelector(".alt-way").classList.add("hide");
    document.querySelector(".command").classList.add("hide");

    function detectDeviceAndRedirect() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
      if (/android/i.test(userAgent)) {
        window.location.href = "play-mob.html";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "play-mob-ios.html";
      } else {
        document.getElementById("instruction").textContent = "Oops! Seems we can not suppot your mobile devive";
      }
    }
    document.querySelector(".btn").addEventListener("click", function(event) {
      detectDeviceAndRedirect();      
    });
} else {
    document.getElementById("instruction").textContent = "Let your kiddo press a random key on your keyboard and discover a favorite cartoon animal. You can press " + keyCombination + " to get into or exit out of the fullscreen mode.";

    if(isChromebook) {
      document.querySelector(".btn").addEventListener("click", function(event) {
        window.location.href = "play-chrome.html";
      });

      document.onkeydown = function (e) {
        if(e.keyCode == 13 && e.ctrlKey && e.shiftKey) {
        window.location.href = "play-chrome.html";
        }
      };
    } else {
      document.querySelector(".btn").addEventListener("click", function(event) {
        window.location.href = "play-desk.html";
      });

      document.onkeydown = function (e) {
        if(e.keyCode == 13 && e.metaKey && e.shiftKey) {
        window.location.href = "play-desk.html";
        }
      };
    }

}