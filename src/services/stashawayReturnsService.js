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
      { x: "Jun", y: 277321 },
      { x: "Jul", y: 144244 },
      { x: "Aug", y: 202765 },
      { x: "Sept", y: 119924 },
      { x: "Oct", y: 255000 },
      { x: "Nov", y: 117534 },
      { x: "Dec", y: 192419 }
    ]
  },
  {
    id: "6 months",
    currency: "USD",
    data: [
      { x: "Jun", y: 277321 / 1.2 },
      { x: "Jul", y: 144244 / 1.2 },
      { x: "Aug", y: 202765 / 1.2 },
      { x: "Sept", y: 119924 / 1.2 },
      { x: "Oct", y: 255000 / 1.2 },
      { x: "Nov", y: 117534 / 1.2 },
      { x: "Dec", y: 192419 / 1.2 }
    ]
  },
  {
    id: "Year-to-date",
    currency: "SGD",
    data: [
      { x: "Jan", y: 73890 },
      { x: "Feb", y: 56834 },
      { x: "Mar", y: 117534 },
      { x: "Apr", y: 184033 },
      { x: "May", y: 218817 },
      { x: "Jun", y: 255696 },
      { x: "Jul", y: 275000 }
    ]
  },
  {
    id: "Year-to-date",
    currency: "USD",
    data: [
      { x: "Jan", y: 73890 / 1.2 },
      { x: "Feb", y: 56834 / 1.2 },
      { x: "Mar", y: 117534 / 1.2 },
      { x: "Apr", y: 184033 / 1.2 },
      { x: "May", y: 218817 / 1.2 },
      { x: "Jun", y: 255696 / 1.2 },
      { x: "Jul", y: 275000 / 1.2 }
    ]
  },
  {
    id: "1 year",
    currency: "SGD",
    data: [
      { x: "Jan", y: 60737 },
      { x: "Feb", y: 89253 },
      { x: "Mar", y: 147491 },
      { x: "Apr", y: 178369 },
      { x: "May", y: 228972 },
      { x: "Jun", y: 243494 },
      { x: "Jul", y: 200311 },
      { x: "Aug", y: 212647 },
      { x: "Sept", y: 226453 },
      { x: "Oct", y: 289061 },
      { x: "Nov", y: 234255 },
      { x: "Dec", y: 267610 }
    ]
  },
  {
    id: "1 year",
    currency: "USD",
    data: [
      { x: "Jan", y: 60737 / 1.2 },
      { x: "Feb", y: 89253 / 1.2 },
      { x: "Mar", y: 147491 / 1.2 },
      { x: "Apr", y: 178369 / 1.2 },
      { x: "May", y: 228972 / 1.2 },
      { x: "Jun", y: 243494 / 1.2 },
      { x: "Jul", y: 200311 / 1.2 },
      { x: "Aug", y: 212647 / 1.2 },
      { x: "Sept", y: 226453 / 1.2 },
      { x: "Oct", y: 289061 / 1.2 },
      { x: "Nov", y: 234255 / 1.2 },
      { x: "Dec", y: 267610 / 1.2 }
    ]
  },
  {
    id: "5 years",
    currency: "SGD",
    data: [
      { x: "2013", y: 64480 },
      { x: "2014", y: 58887 },
      { x: "2015", y: 105875 },
      { x: "2016", y: 164243 },
      { x: "2017", y: 208689 },
      { x: "2018", y: 228972 }
    ]
  },
  {
    id: "5 years",
    currency: "USD",
    data: [
      { x: "2013", y: 64480 / 1.2 },
      { x: "2014", y: 58887 / 1.2 },
      { x: "2015", y: 105875 / 1.2 },
      { x: "2016", y: 164243 / 1.2 },
      { x: "2017", y: 208689 / 1.2 },
      { x: "2018", y: 228972 / 1.2 }
    ]
  },
  {
    id: "Max",
    currency: "SGD",
    data: [
      { x: "2011", y: 65579 },
      { x: "2012", y: 148947 },
      { x: "2013", y: 109402 },
      { x: "2014", y: 161623 },
      { x: "2015", y: 134102 },
      { x: "2016", y: 171143 },
      { x: "2017", y: 252310 },
      { x: "2018", y: 270000 }
    ]
  },
  {
    id: "Max",
    currency: "USD",
    data: [
      { x: "2011", y: 65579 / 1.2 },
      { x: "2012", y: 148947 / 1.2 },
      { x: "2013", y: 109402 / 1.2 },
      { x: "2014", y: 161623 / 1.2 },
      { x: "2015", y: 134102 / 1.2 },
      { x: "2016", y: 171143 / 1.2 },
      { x: "2017", y: 252310 / 1.2 },
      { x: "2018", y: 270000 / 1.2 }
    ]
  }
];

export function getStashawayReturns(period, currency) {
  return portfolioReturns
    .filter(investmentReturns => investmentReturns.id === period)
    .find(investmentReturns => investmentReturns.currency === currency).data;
}
