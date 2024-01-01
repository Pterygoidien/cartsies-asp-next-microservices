using AuctionService.Data;
using Contracts;
using MassTransit;

namespace AuctionService.Consumers;

public class BidPlacedConsumer : IConsumer<BidPlaced>
{
    private readonly AuctionDbContext _dbContext;

    public BidPlacedConsumer(AuctionDbContext dbContext)
    {
        this._dbContext = dbContext;
    }

    public async Task Consume(ConsumeContext<BidPlaced> context)
    {
        Console.WriteLine($"BidPlacedConsumer: {context.Message.AuctionId}");

        var auction = await _dbContext.Auctions.FindAsync(context.Message.AuctionId);
        if (auction is null)
            return;
        if (auction.CurrentHighBid == null
        || context.Message.BidStatus.Contains("Accepted")
        && context.Message.Amount > auction.CurrentHighBid)
        {
            auction.CurrentHighBid = context.Message.Amount;
            await _dbContext.SaveChangesAsync();

        }

    }
}
