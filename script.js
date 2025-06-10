const exchangeRates = {
  USD: { INR: 83.2, EUR: 0.92, JPY: 157.3 },
  INR: { USD: 0.012, EUR: 0.011, JPY: 1.89 },
  EUR: { USD: 1.09, INR: 90.1, JPY: 170.5 },
  JPY: { USD: 0.0064, INR: 0.53, EUR: 0.0058 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('from-currency').value;
  const to = document.getElementById('to-currency').value;

  if (isNaN(amount)) {
    document.getElementById('result').innerText = "Please enter a valid number!";
    return;
  }

  if (from === to) {
    document.getElementById('result').innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = (amount * rate).toFixed(2);

  document.getElementById('result').innerText = `${amount} ${from} = ${converted} ${to}`;
}
