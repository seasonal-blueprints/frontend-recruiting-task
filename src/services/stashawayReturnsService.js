let portfolioReturns = [
  {
    id: "monthly",
    data: [
    {Jul01:100000},
    {Jul05:140000},
    {Jul10:125000},
    {Jul15:185000},
    {Jul20: 220000},
    {Jul25: 265000},
    {Jul30: 295000}
    ]
  }
];

export function getStashawayReturns(id) {
  return portfolioReturns.find(investmentReturns => investmentReturns.id === id).data;
}

