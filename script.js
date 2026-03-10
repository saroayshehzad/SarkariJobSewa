
window.onload = function(){

let unlocked = localStorage.getItem("unlocked");

if(!unlocked){

document.getElementById("unlockPopup").style.display="flex";

}

}


function unlockSite(){

let now = new Date().getTime();

localStorage.setItem("unlocked", now);

document.getElementById("unlockPopup").style.display="none";

}


function showJobAd(){

document.getElementById("jobAd").style.display="flex";

}


function openJob(){

window.location="job.html";

}
