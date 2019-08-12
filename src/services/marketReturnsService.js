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
    id: "Year-to-date",
    currency: "SGD",
    name: "VTSMX ETF",
    data: [
      { x: "Jan", y: 63890 },
      { x: "Feb", y: 53834 },
      { x: "Mar", y: 147534 },
      { x: "Apr", y: 124033 },
      { x: "May", y: 198817 },
      { x: "Jun", y: 215696 },
      { x: "Jul", y: 225000 }
    ]
  },
  {
    id: "Year-to-date",
    currency: "USD",
    name: "VTSMX ETF",
    data: [
      { x: "Jan", y: 63890 / 1.2 },
      { x: "Feb", y: 53834 / 1.2 },
      { x: "Mar", y: 147534 / 1.2 },
      { x: "Apr", y: 124033 / 1.2 },
      { x: "May", y: 198817 / 1.2 },
      { x: "Jun", y: 215696 / 1.2 },
      { x: "Jul", y: 225000 / 1.2 }
    ]
  },
  {
    id: "1 year",
    currency: "SGD",
    name: "VTSMX ETF",
    data: [
      { x: "Jan", y: 50737 },
      { x: "Feb", y: 99253 },
      { x: "Mar", y: 177491 },
      { x: "Apr", y: 188369 },
      { x: "May", y: 228972 },
      { x: "Jun", y: 233494 },
      { x: "Jul", y: 180311 },
      { x: "Aug", y: 192647 },
      { x: "Sept", y: 206453 },
      { x: "Oct", y: 249061 },
      { x: "Nov", y: 204255 },
      { x: "Dec", y: 263610 }
    ]
  },
  {
    id: "1 year",
    currency: "USD",
    name: "VTSMX ETF",
    data: [
      { x: "Jan", y: 50737 / 1.2 },
      { x: "Feb", y: 99253 / 1.2 },
      { x: "Mar", y: 177491 / 1.2 },
      { x: "Apr", y: 188369 / 1.2 },
      { x: "May", y: 228972 / 1.2 },
      { x: "Jun", y: 233494 / 1.2 },
      { x: "Jul", y: 180311 / 1.2 },
      { x: "Aug", y: 192647 / 1.2 },
      { x: "Sept", y: 206453 / 1.2 },
      { x: "Oct", y: 249061 / 1.2 },
      { x: "Nov", y: 204255 / 1.2 },
      { x: "Dec", y: 263610 / 1.2 }
    ]
  },
  {
    id: "5 years",
    currency: "SGD",
    name: "VTSMX ETF",
    data: [
      { x: "2013", y: 60480 },
      { x: "2014", y: 62887 },
      { x: "2015", y: 120875 },
      { x: "2016", y: 144243 },
      { x: "2017", y: 188689 },
      { x: "2018", y: 208972 }
    ]
  },
  {
    id: "5 years",
    currency: "USD",
    name: "VTSMX ETF",
    data: [
      { x: "2013", y: 60480 / 1.2 },
      { x: "2014", y: 62887 / 1.2 },
      { x: "2015", y: 120875 / 1.2 },
      { x: "2016", y: 144243 / 1.2 },
      { x: "2017", y: 188689 / 1.2 },
      { x: "2018", y: 208972 / 1.2 }
    ]
  },
  {
    id: "Max",
    currency: "SGD",
    name: "VTSMX ETF",
    data: [
      { x: "2011", y: 64579 },
      { x: "2012", y: 138947 },
      { x: "2013", y: 139402 },
      { x: "2014", y: 151623 },
      { x: "2015", y: 144102 },
      { x: "2016", y: 151143 },
      { x: "2017", y: 212310 },
      { x: "2018", y: 250000 }
    ]
  },
  {
    id: "Max",
    currency: "USD",
    name: "VTSMX ETF",
    data: [
      { x: "2011", y: 64579 / 1.2 },
      { x: "2012", y: 138947 / 1.2 },
      { x: "2013", y: 139402 / 1.2 },
      { x: "2014", y: 151623 / 1.2 },
      { x: "2015", y: 144102 / 1.2 },
      { x: "2016", y: 151143 / 1.2 },
      { x: "2017", y: 212310 / 1.2 },
      { x: "2018", y: 250000 / 1.2 }
    ]
  },

  {
    id: "1 month",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "Jul01", y: 73736 },
      { x: "Jul05", y: 175506 },
      { x: "Jul10", y: 199034 },
      { x: "Jul15", y: 128516 },
      { x: "Jul20", y: 195000 },
      { x: "Jul25", y: 208413 },
      { x: "Jul30", y: 278643 }
    ]
  },
  {
    id: "1 month",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "Jul01", y: 73736 / 1.2 },
      { x: "Jul05", y: 175506 / 1.2 },
      { x: "Jul10", y: 199034 / 1.2 },
      { x: "Jul15", y: 128516 / 1.2 },
      { x: "Jul20", y: 195000 / 1.2 },
      { x: "Jul25", y: 208413 / 1.2 },
      { x: "Jul30", y: 278643 / 1.2 }
    ]
  },
  {
    id: "6 months",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "Jun", y: 237321 },
      { x: "Jul", y: 164244 },
      { x: "Aug", y: 232765 },
      { x: "Sept", y: 169924 },
      { x: "Oct", y: 225000 },
      { x: "Nov", y: 187534 },
      { x: "Dec", y: 166419 }
    ]
  },
  {
    id: "6 months",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "Jun", y: 237321 / 1.2 },
      { x: "Jul", y: 164244 / 1.2 },
      { x: "Aug", y: 232765 / 1.2 },
      { x: "Sept", y: 169924 / 1.2 },
      { x: "Oct", y: 225000 / 1.2 },
      { x: "Nov", y: 187534 / 1.2 },
      { x: "Dec", y: 166419 / 1.2 }
    ]
  },
  {
    id: "Year-to-date",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "Jan", y: 75890 },
      { x: "Feb", y: 59834 },
      { x: "Mar", y: 147534 },
      { x: "Apr", y: 174033 },
      { x: "May", y: 258817 },
      { x: "Jun", y: 215696 },
      { x: "Jul", y: 265000 }
    ]
  },
  {
    id: "Year-to-date",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "Jan", y: 75890 / 1.2 },
      { x: "Feb", y: 59834 / 1.2 },
      { x: "Mar", y: 147534 / 1.2 },
      { x: "Apr", y: 174033 / 1.2 },
      { x: "May", y: 258817 / 1.2 },
      { x: "Jun", y: 215696 / 1.2 },
      { x: "Jul", y: 265000 / 1.2 }
    ]
  },
  {
    id: "1 year",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "Jan", y: 69737 },
      { x: "Feb", y: 84253 },
      { x: "Mar", y: 107491 },
      { x: "Apr", y: 148369 },
      { x: "May", y: 208972 },
      { x: "Jun", y: 263494 },
      { x: "Jul", y: 230311 },
      { x: "Aug", y: 192647 },
      { x: "Sept", y: 186453 },
      { x: "Oct", y: 239061 },
      { x: "Nov", y: 244255 },
      { x: "Dec", y: 257610 }
    ]
  },
  {
    id: "1 year",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "Jan", y: 69737 / 1.2 },
      { x: "Feb", y: 84253 / 1.2 },
      { x: "Mar", y: 107491 / 1.2 },
      { x: "Apr", y: 148369 / 1.2 },
      { x: "May", y: 208972 / 1.2 },
      { x: "Jun", y: 263494 / 1.2 },
      { x: "Jul", y: 230311 / 1.2 },
      { x: "Aug", y: 192647 / 1.2 },
      { x: "Sept", y: 186453 / 1.2 },
      { x: "Oct", y: 239061 / 1.2 },
      { x: "Nov", y: 244255 / 1.2 },
      { x: "Dec", y: 257610 / 1.2 }
    ]
  },
  {
    id: "5 years",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "2013", y: 74480 },
      { x: "2014", y: 68887 },
      { x: "2015", y: 145875 },
      { x: "2016", y: 154243 },
      { x: "2017", y: 188689 },
      { x: "2018", y: 204972 }
    ]
  },
  {
    id: "5 years",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "2013", y: 74480 / 1.2 },
      { x: "2014", y: 68887 / 1.2 },
      { x: "2015", y: 145875 / 1.2 },
      { x: "2016", y: 154243 / 1.2 },
      { x: "2017", y: 188689 / 1.2 },
      { x: "2018", y: 204972 / 1.2 }
    ]
  },
  {
    id: "Max",
    currency: "SGD",
    name: "VBMFX ETF",
    data: [
      { x: "2011", y: 69579 },
      { x: "2012", y: 155947 },
      { x: "2013", y: 117402 },
      { x: "2014", y: 151663 },
      { x: "2015", y: 114102 },
      { x: "2016", y: 121143 },
      { x: "2017", y: 232310 },
      { x: "2018", y: 265000 }
    ]
  },
  {
    id: "Max",
    currency: "USD",
    name: "VBMFX ETF",
    data: [
      { x: "2011", y: 69579 / 1.2 },
      { x: "2012", y: 155947 / 1.2 },
      { x: "2013", y: 117402 / 1.2 },
      { x: "2014", y: 151663 / 1.2 },
      { x: "2015", y: 114102 / 1.2 },
      { x: "2016", y: 121143 / 1.2 },
      { x: "2017", y: 232310 / 1.2 },
      { x: "2018", y: 265000 / 1.2 }
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
