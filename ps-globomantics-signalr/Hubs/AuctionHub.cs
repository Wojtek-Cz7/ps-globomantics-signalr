using Microsoft.AspNetCore.SignalR;
using ps_globomantics_signalr.Models;

namespace ps_globomantics_signalr.Hubs
{
    public class AuctionHub : Hub
    {
        public async Task NotifyNewBid(AuctionNotify auction)
        {
            await Clients.All.SendAsync("ReceiveNewBid", auction);       // Clients is a property of a Hub base class
                                                                        // Message: function name + argument passed to a function  
        }
    }
}
