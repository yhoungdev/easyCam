// a simple and small library you can use to access your web cam
props={
    video:true,
    audi:true
}
const web= videoId=>{
   return this.obj={
        cam:el=>{
            //now check if the browsersupports webCam
            if(navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia(props)
                .then(stream=>{
                    tag=document.querySelector(videoId)
                    tag.srcObject=stream
                
                })
            } else {
                swal('an error occured ',`your browser ${navigator.appName} do'nt support webCam`,'error')
            }
        }
    }
}

web('video').cam()
