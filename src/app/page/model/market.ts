export interface Market{
    id: string; 
    last: string; 
    lowestAsk: string; 
    highestBid: string; 
    percentChange: string; 
    baseVolume: string; 
    // 24h_volume_usd: string; 
    quoteVolume: string; 
    high24hr: string; 
    low24hr: string; 
}