let balance = 0;
const balanceEl = document.getElementById("balance");
const transactionList = document.getElementById("transaction-list");

function addTransaction() {
  const desc = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!desc || isNaN(amount)) {
    alert("Please enter valid description and amount.");
    return;
  }

  const li = document.createElement("li");
  li.classList.add(type);
  li.innerHTML = `
    <span>${desc}: $${amount.toFixed(2)}</span>
    <button onclick="removeTransaction(this, ${type === 'expense' ? -amount : amount})">&times;</button>
  `;

  transactionList.appendChild(li);
  updateBalance(type === "expense" ? -amount : amount);

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}

function removeTransaction(btn, amount) {
  const li = btn.parentElement;
  li.remove();
  updateBalance(amount);
}

function updateBalance(change) {
  balance += change;
  balanceEl.textContent = balance.toFixed(2);
}
