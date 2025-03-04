const countriesAndCurrencies = [
  { country: "Algeria", currency: "GBP", symbol: "£" },
  { country: "Argentina", currency: "ARS", symbol: "$" },
  { country: "Australia", currency: "AUD", symbol: "$" },
  { country: "Austria", currency: "EURO", symbol: "€" },
  { country: "Bahamas, The", currency: "USD", symbol: "$" },
  { country: "Bahrain", currency: "BHD", symbol: "د.ب" },
  { country: "Barbados", currency: "USD", symbol: "$" },
  { country: "Belgium", currency: "EURO", symbol: "€" },
  { country: "Belize", currency: "USD", symbol: "$" },
  { country: "Brazil", currency: "BRL", symbol: "R$" },
  { country: "British Virgin Islands", currency: "USD", symbol: "$" },
  { country: "Bulgaria", currency: "GBP", symbol: "£" },
  { country: "Cameroon", currency: "GBP", symbol: "£" },
  { country: "Canada", currency: "CAD", symbol: "$" },
  { country: "Cayman Islands", currency: "USD", symbol: "$" },
  { country: "Channel Islands", currency: "GBP", symbol: "£" },
  { country: "Chile", currency: "CLP", symbol: "$" },
  { country: "China", currency: "CNY", symbol: "¥" },
  { country: "Comoros", currency: "GBP", symbol: "£" },
  { country: "Costa Rica", currency: "USD", symbol: "$" },
  { country: "Croatia", currency: "HRK", symbol: "kn" },
  { country: "Cyprus", currency: "EURO", symbol: "€" },
  { country: "Denmark", currency: "DKK", symbol: "kr" },
  { country: "Dominican Republic", currency: "USD", symbol: "$" },
  { country: "Egypt, Arab Rep.", currency: "GBP", symbol: "£" },
  { country: "Finland", currency: "EURO", symbol: "€" },
  { country: "France", currency: "EURO", symbol: "€" },
  { country: "Gabon", currency: "GBP", symbol: "£" },
  { country: "Gambia, The", currency: "GBP", symbol: "£" },
  { country: "Georgia", currency: "GBP", symbol: "£" },
  { country: "Germany", currency: "EURO", symbol: "€" },
  { country: "Ghana", currency: "GBP", symbol: "£" },
  { country: "Gibraltar", currency: "GBP", symbol: "£" },
  { country: "Greece", currency: "EURO", symbol: "€" },
  { country: "Greenland", currency: "GBP", symbol: "£" },
  { country: "Hong Kong SAR, China", currency: "HKD", symbol: "$" },
  { country: "Hungary", currency: "HUF", symbol: "Ft" },
  { country: "Iceland", currency: "ISK", symbol: "kr" },
  { country: "India", currency: "INR", symbol: "₹" },
  { country: "Indonesia", currency: "IDR", symbol: "Rp" },
  { country: "Ireland", currency: "EURO", symbol: "€" },
  { country: "Isle of Man", currency: "GBP", symbol: "£" },
  { country: "Israel", currency: "ILS", symbol: "₪" },
  { country: "Italy", currency: "EURO", symbol: "€" },
  { country: "Jamaica", currency: "USD", symbol: "$" },
  { country: "Japan", currency: "JPY", symbol: "¥" },
  { country: "Jordan", currency: "USD", symbol: "$" },
  { country: "Latvia", currency: "EURO", symbol: "€" },
  { country: "Lebanon", currency: "USD", symbol: "$" },
  { country: "Liechtenstein", currency: "GBP", symbol: "£" },
  { country: "Lithuania", currency: "EURO", symbol: "€" },
  { country: "Luxembourg", currency: "EURO", symbol: "€" },
  { country: "Macao SAR, China", currency: "CNY", symbol: "¥" },
  { country: "Malaysia", currency: "MYR", symbol: "RM" },
  { country: "Maldives", currency: "USD", symbol: "$" },
  { country: "Malta", currency: "EURO", symbol: "€" },
  { country: "Mauritius", currency: "USD", symbol: "$" },
  { country: "Mexico", currency: "MXN", symbol: "$" },
  { country: "Moldova", currency: "EURO", symbol: "€" },
  { country: "Monaco", currency: "EURO", symbol: "€" },
  { country: "Morocco", currency: "GBP", symbol: "£" },
  { country: "Nepal", currency: "GBP", symbol: "£" },
  { country: "Netherlands", currency: "EURO", symbol: "€" },
  { country: "New Zealand", currency: "NZD", symbol: "$" },
  { country: "Nigeria", currency: "USD", symbol: "$" },
  { country: "Norway", currency: "NOK", symbol: "kr" },
  { country: "Oman", currency: "USD", symbol: "$" },
  { country: "Pakistan", currency: "PKR", symbol: "₨" },
  { country: "Panama", currency: "USD", symbol: "$" },
  { country: "Paraguay", currency: "USD", symbol: "$" },
  { country: "Peru", currency: "USD", symbol: "$" },
  { country: "Philippines", currency: "PHP", symbol: "₱" },
  { country: "Poland", currency: "PLN", symbol: "zł" },
  { country: "Portugal", currency: "EURO", symbol: "€" },
  { country: "Puerto Rico", currency: "USD", symbol: "$" },
  { country: "Qatar", currency: "QAR", symbol: "﷼" },
  { country: "Romania", currency: "GBP", symbol: "£" },
  { country: "San Marino", currency: "EURO", symbol: "€" },
  { country: "Saudi Arabia", currency: "SAR", symbol: "﷼" },
  { country: "Senegal", currency: "USD", symbol: "$" },
  { country: "Serbia", currency: "EURO", symbol: "€" },
  { country: "Seychelles", currency: "USD", symbol: "$" },
  { country: "Singapore", currency: "SGD", symbol: "$" },
  { country: "Sint Maarten (Dutch part)", currency: "USD", symbol: "$" },
  { country: "Slovak Republic", currency: "EURO", symbol: "€" },
  { country: "Slovenia", currency: "EURO", symbol: "€" },
  { country: "Somalia", currency: "USD", symbol: "$" },
  { country: "South Africa", currency: "ZAR", symbol: "R" },
  { country: "Spain", currency: "EURO", symbol: "€" },
  { country: "Sri Lanka", currency: "GBP", symbol: "£" },
  { country: "St. Kitts and Nevis", currency: "USD", symbol: "$" },
  { country: "St. Lucia", currency: "USD", symbol: "$" },
  { country: "St. Martin (French part)", currency: "USD", symbol: "$" },
  { country: "St. Vincent and the Grenadines", currency: "USD", symbol: "$" },
  { country: "Sweden", currency: "SEK", symbol: "kr" },
  { country: "Switzerland", currency: "CHF", symbol: "CHF" },
  { country: "Thailand", currency: "THB", symbol: "฿" },
  { country: "Trinidad and Tobago", currency: "USD", symbol: "$" },
  { country: "Tunisia", currency: "GBP", symbol: "£" },
  { country: "Turkiye", currency: "TRY", symbol: "₺" },
  { country: "Turkmenistan", currency: "GBP", symbol: "£" },
  { country: "Turks and Caicos Islands", currency: "USD", symbol: "$" },
  { country: "United Arab Emirates", currency: "AED", symbol: "د.إ" },
  { country: "United Kingdom", currency: "GBP", symbol: "£" },
  { country: "United States", currency: "USD", symbol: "$" },
  { country: "Uruguay", currency: "USD", symbol: "$" },
  { country: "Vietnam", currency: "GBP", symbol: "£" },
  { country: "Virgin Islands (U.S.)", currency: "USD", symbol: "$" },
  { country: "Zambia", currency: "GBP", symbol: "£" },
  { country: "Zimbabwe", currency: "GBP", symbol: "£" },
];

export const rtlCurrencies = ["BHD", "SAR", "AED"];

/**
 * Function to get currency symbol, from currency
 * @param currency , AED, PKR, USD, GBP, ...
 * @returns currency symbol, string
 */
export function getCurrencySymbol(currency: string): string {
  if (!currency) {
    return "$";
  }
  const found = countriesAndCurrencies.find(
    (c) => c.currency.toLowerCase() === currency.toLowerCase()
  );
  if (found) {
    return found.symbol;
  }
  return "$";
}

export function getFormattedPrice(currency: string, price: string): string {
  if (rtlCurrencies.includes(currency)) {
    return `${getCurrencySymbol(currency)} ${price}`;
  }
  return `${getCurrencySymbol(currency)}${price}`;
}
