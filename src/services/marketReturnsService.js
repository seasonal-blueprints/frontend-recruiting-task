let portfolioReturns = [
  {
    id: "1 month",
    currency: "SGD",
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
    id: "1 month",
    currency: "USD",
    data: [
      { x: "Jul01", y: 100000 / 1.2 },
      { x: "Jul05", y: 135000 / 1.2 },
      { x: "Jul10", y: 120000 / 1.2 },
      { x: "Jul15", y: 170000 / 1.2 },
      { x: "Jul20", y: 190000 / 1.2 },
      { x: "Jul25", y: 215000 / 1.2 },
      { x: "Jul30", y: 240000 / 1.2 }
    ]
  },
  {
    id: "6 months",
    currency: "SGD",
    data: [
      { x: "Jun", y: 100000 },
      { x: "Jul", y: 150000 },
      { x: "Aug", y: 220000 },
      { x: "Sept", y: 210000 },
      { x: "Oct", y: 240000 },
      { x: "Nov", y: 250000 },
      { x: "Dec", y: 260000 }
    ]
  },
  {
    id: "6 months",
    currency: "USD",
    data: [
      { x: "Jun", y: 100000 / 1.2 },
      { x: "Jul", y: 150000 / 1.2 },
      { x: "Aug", y: 220000 / 1.2 },
      { x: "Sept", y: 210000 / 1.2 },
      { x: "Oct", y: 240000 / 1.2 },
      { x: "Nov", y: 250000 / 1.2 },
      { x: "Dec", y: 260000 / 1.2 }
    ]
  }
];

export function getMarketReturns(period, currency) {
  if (!period && !currency) {
    return [];
  }
  if (!period && currency) {
    return portfolioReturns.find(
      investmentReturns => investmentReturns.currency === currency
    ).data;
  }
  if (period && !currency) {
    return portfolioReturns.find(
      investmentReturns => investmentReturns.id === period
    ).data;
  }
  const a = portfolioReturns.filter(
    investmentReturns => investmentReturns.id === period
  );
  return a.find(investmentReturns => investmentReturns.currency === currency)
    .data;
}
