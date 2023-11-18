var btn = document.getElementById("button");
var affichageResult = document.getElementById("affichageResult");
btn.onclick = function(){
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var ilayNombre = parseInt(document.getElementById("ilayNombre").value);
    affichageResult.innerText = ' ';
    affichageResult.style.backgroundColor = "rgba(128, 128, 128, 0.637)";
    affichageResult.style.width = "80%";
    affichageResult.style.margin = "auto";
    affichageResult.style.marginTop = "30px";
    affichageResult.style.padding = "20px";
    affichageResult.style.textAlign = "center";
    affichageResult.style.borderRadius = "30px";
    affichageResult.innerText = "ireo nombre divisible par"+" "+ilayNombre+" "+"dia\n";
    for(var i = start; i <= end; i++){
        if(i%ilayNombre==0){
            affichageResult.innerText += i + "\n";
        }
        } 
}