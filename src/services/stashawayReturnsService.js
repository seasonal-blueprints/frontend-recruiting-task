let portfolioReturns = [
  {
    id: "1 month",
    currency: "SGD",
    data: [
      { x: "Jul01", y: 100000 },
      { x: "Jul05", y: 140000 },
      { x: "Jul10", y: 125000 },
      { x: "Jul15", y: 185000 },
      { x: "Jul20", y: 220000 },
      { x: "Jul25", y: 265000 },
      { x: "Jul30", y: 295000 }
    ]
  },
  {
    id: "1 month",
    currency: "USD",
    data: [
      { x: "Jul01", y: 100000 / 1.2 },
      { x: "Jul05", y: 140000 / 1.2 },
      { x: "Jul10", y: 125000 / 1.2 },
      { x: "Jul15", y: 185000 / 1.2 },
      { x: "Jul20", y: 220000 / 1.2 },
      { x: "Jul25", y: 265000 / 1.2 },
      { x: "Jul30", y: 295000 / 1.2 }
    ]
  },
  {
    id: "6 months",
    currency: "SGD",
    data: [
      { x: "Jun", y: 100000 },
      { x: "Jul", y: 160000 },
      { x: "Aug", y: 225000 },
      { x: "Sept", y: 220000 },
      { x: "Oct", y: 255000 },
      { x: "Nov", y: 270000 },
      { x: "Dec", y: 275000 }
    ]
  },
  {
    id: "6 months",
    currency: "USD",
    data: [
      { x: "Jun", y: 100000 / 1.2 },
      { x: "Jul", y: 160000 / 1.2 },
      { x: "Aug", y: 225000 / 1.2 },
      { x: "Sept", y: 220000 / 1.2 },
      { x: "Oct", y: 255000 / 1.2 },
      { x: "Nov", y: 270000 / 1.2 },
      { x: "Dec", y: 275000 / 1.2 }
    ]
  }
];

export function getStashawayReturns(period, currency) {
  return portfolioReturns
    .filter(investmentReturns => investmentReturns.id === period)
    .find(investmentReturns => investmentReturns.currency === currency).data;
}
