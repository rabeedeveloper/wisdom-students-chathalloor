function toAddress() {

    const toAddress = document.querySelectorAll("[toaddress]");

    for(let i = 0; i < toAddress.length; i++){
        const address = toAddress[i].getAttribute("toaddress");
        toAddress[i].addEventListener("click", function(){
            open("https://" + address, "_blank");
        })
    }
}
toAddress();