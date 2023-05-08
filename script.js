let music = document.getElementsByTagName("i")[0];
let audio = document.getElementsByTagName("audio")[0];
music.addEventListener("click", () => {
if (music.classList.contains("fa-play")) {
   audio2.pause();
   music2.classList.remove("fa-pause");
    music2.classList.add("fa-play");
    audio.play();
    music.classList.remove("fa-play");
    music.classList.add("fa-pause");
}
else {
    music.classList.remove("fa-pause");
    music.classList.add("fa-play");
    audio.pause();

}
});
let music2 = document.getElementsByTagName("i")[1];
let audio2 = document.getElementsByTagName("audio")[1];
music2.addEventListener("click", () => {
if (music2.classList.contains("fa-play")) {
   audio.pause();
   music.classList.remove("fa-pause");
   music.classList.add("fa-play");
    audio2.play();
    music2.classList.remove("fa-play");
    music2.classList.add("fa-pause");
}
else {
    audio2.pause();
    music2.classList.remove("fa-pause");
    music2.classList.add("fa-play");
}
});

window.html2canvas=html2canvas;
window.jsPDF=window.jspdf.jsPDF;
function makePDF(){

    html2canvas(document.querySelector("#capture"),{
        allowTaint:true,
        useCORS:true,
        scale:1
    }).then(canvas => {
        document.body.appendChild(canvas)
        var img=canvas.toDataURL("image/png");
        var doc=new jsPDF();
        doc.setFont('Arial');
        doc.getFontSize(11);
        doc.addImage(img,'PNG',7,13,195,105);
        doc.save();
        

    
        });


}