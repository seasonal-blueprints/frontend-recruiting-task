let portfolioReturns = [
  {
    id: "1 month",
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
    id: "6 months",
    data: [
      { x: "Jun", y: 100000 },
      { x: "Jul", y: 160000 },
      { x: "Aug", y: 225000 },
      { x: "Sept", y: 220000 },
      { x: "Oct", y: 255000 },
      { x: "Nov", y: 270000 },
      { x: "Dec", y: 275000 }
    ]
  }
];

export function getStashawayReturns(id) {
  if (!id) {
    return portfolioReturns.find(
      investmentReturns => investmentReturns.id === "1 month"
    ).data;
  }
  return portfolioReturns.find(investmentReturns => investmentReturns.id === id)
    .data;
}
