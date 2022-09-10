document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  if (newWithdrawAmount > previousBalanceTotal) {
    alert(
      "Sorry!! You don't have enough balance. Please deposit or change withdraw amount."
    );
  } else {
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("withdraw-total", newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  }
});
