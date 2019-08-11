let portfolioReturns = [
  {
    id: "1 month",
    data: [
      { x: "Jul01", y: 100000 },
      { x: "Jul05", y: 135000 },
      { x: "Jul10", y: 120000 },
      { x: "Jul15", y: 170000 },
      { x: "Jul20", y: 190000 },
      { x: "Jul25", y: 215000 },
      { x: "Jul30", y: 240000 }
    ]
  },
  {
    id: "6 months",
    data: [
      { x: "Jun", y: 100000 },
      { x: "Jul", y: 150000 },
      { x: "Aug", y: 220000 },
      { x: "Sept", y: 210000 },
      { x: "Oct", y: 240000 },
      { x: "Nov", y: 250000 },
      { x: "Dec", y: 260000 }
    ]
  }
];

export function getMarketReturns(id) {
  return portfolioReturns.find(investmentReturns => investmentReturns.id === id)
    .data;
}
