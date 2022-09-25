const initializeSignalRConnection = () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/auctionhub")
        .build();

    connection.start().catch(err => console.error(err.ToString()));

    return connection;

}

const connection = initializeSignalRConnection();

const submitBid = (auctionId) => {
    const bid = document.getElementById(auctionId + "-input").value;
    fetch("/auction/" + auctionId + "/newbid?currentBid=" + bid, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    location.reload();

    // here we want to call NotifyNewBid method ON THE HUB

    connection.invoke("NotifyNewBid", {
        auctionId: parseInt(auctionId),
        newBid: parseInt(bid)
    }) // serialization is done autmatically by SignalR
}

