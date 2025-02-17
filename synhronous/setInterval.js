let loadingInterval=setInterval(()=>{
    console.log("Loading...")
},1000)
setTimeout(()=>{
    clearInterval(loadingInterval)
    console.log("Loaded Successfully")
},5000)