function timer(duration , onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`)
    })
}

timer(2000,message=>console.log(message))