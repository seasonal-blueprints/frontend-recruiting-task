const periods = [
  {
    _id: "5c3430ecfc13ae122d000000",
    name: "1 month"
  },
  {
    _id: "5c3430ecfc13ae122d000001",
    name: "6 months"
  },
  {
    _id: "5c3430ecfc13ae122d000002",
    name: "Year-to-date"
  },
  {
    _id: "5c3430ecfc13ae122d000003",
    name: "1 year"
  },
  {
    _id: "5c3430ecfc13ae122d000004",
    name: "5 years"
  },
  {
    _id: "5c3430ecfc13ae122d000005",
    name: "Max"
  }
];

// const defaultPeriod = {
//   _id: "5c3430ecfc13ae122d000006",
//   name: "Max"
// };

export function getPeriods() {
  return periods;
}

// export function getDefaultPeriod() {
//   return defaultPeriod;
// }
