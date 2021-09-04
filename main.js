var myvideo = document.getElementById("myvideo")
var mybtns = document.querySelectorAll("li")



myvideo.addEventListener("click", function(){
    if(myvideo.paused){
        myvideo.play()
    } else{
        myvideo.pause()
    }
})

for(i=0; i<mybtns.length ; i++){
    
    mybtns[i].addEventListener("click", function(e){
        if(document.getElementsByClassName("active").length != null){
            document.getElementsByClassName("active")[0].className = "vbtn"
        }
        myvideo.src = e.target.dataset.src
        e.target.className += " active "
    })

}
myvideo.addEventListener("dblclick", function(){
    myvideo.requestFullscreen();
})
