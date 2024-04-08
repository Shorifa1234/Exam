function deposit(accountId) {
    const amount = parseFloat(document.getElementById(accountId + '-amount').value);
    const balanceElement = document.getElementById(accountId + '-balance');
    let currentBalance = parseFloat(balanceElement.textContent);
    currentBalance += amount;
    balanceElement.textContent = currentBalance.toFixed(2);
}

function withdraw(accountId) {
    const amount = parseFloat(document.getElementById(accountId + '-amount').value);
    const balanceElement = document.getElementById(accountId + '-balance');
    let currentBalance = parseFloat(balanceElement.textContent);
    if (amount > currentBalance) {
        alert('Insufficient funds');
    } else {
        currentBalance -= amount;
        balanceElement.textContent = currentBalance.toFixed(2);
    }
}
