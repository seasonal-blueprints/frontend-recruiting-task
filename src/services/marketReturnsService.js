let portfolioReturns = [
  {
    id: "monthly",
    data:[
    {Jul01:100000},
    {Jul05:135000},
    {Jul10:120000},
    {Jul15:170000},
    {Jul20: 190000},
    {Jul25: 215000},
    {Jul30: 240000}
  ]
  }
];

export function getMarketReturns(id) {
 return portfolioReturns.find(investmentReturns => investmentReturns.id === id).data;
}