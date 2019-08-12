let portfolioReturns = [
  {
    id: "1 month",
    currency: "SGD",
    name: "VTSMX ETF",
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
    name: "VTSMX ETF",
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
    name: "VTSMX ETF",
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
    name: "VTSMX ETF",
    data: [
      { x: "Jun", y: 100000 / 1.2 },
      { x: "Jul", y: 150000 / 1.2 },
      { x: "Aug", y: 220000 / 1.2 },
      { x: "Sept", y: 210000 / 1.2 },
      { x: "Oct", y: 240000 / 1.2 },
      { x: "Nov", y: 250000 / 1.2 },
      { x: "Dec", y: 260000 / 1.2 }
    ]
  },

  {
    id: "1 month",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "Jul01", y: 100000 },
      { x: "Jul05", y: 145000 },
      { x: "Jul10", y: 130000 },
      { x: "Jul15", y: 180000 },
      { x: "Jul20", y: 195000 },
      { x: "Jul25", y: 210000 },
      { x: "Jul30", y: 245000 }
    ]
  },
  {
    id: "1 month",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "Jul01", y: 100000 / 1.2 },
      { x: "Jul05", y: 145000 / 1.2 },
      { x: "Jul10", y: 130000 / 1.2 },
      { x: "Jul15", y: 180000 / 1.2 },
      { x: "Jul20", y: 195000 / 1.2 },
      { x: "Jul25", y: 210000 / 1.2 },
      { x: "Jul30", y: 245000 / 1.2 }
    ]
  },
  {
    id: "6 months",
    currency: "SGD",
    name: "VBMFX ETF",
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
    name: "VBMFX ETF",
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

export function getMarketReturns(period, currency, benchmark) {
  let toBenchmark = benchmark;
  if (!toBenchmark) {
    toBenchmark = "VTSMX ETF";
  }
  return portfolioReturns
    .filter(investmentReturns => investmentReturns.name === toBenchmark)
    .filter(investmentReturns => investmentReturns.id === period)
    .find(investmentReturns => investmentReturns.currency === currency).data;
}
