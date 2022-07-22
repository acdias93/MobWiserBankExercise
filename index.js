const transaction = [];

let saldo = 0;

document.querySelector ("#atual-balance").innerHTML = saldo + `€`;

document.querySelector("form#transf-form").addEventListener("submit", Transf);

document.querySelector("form#transf-form").addEventListener("submit", createTransaction);

document.querySelector("form#deposit-form").addEventListener("submit", Deposit);

document.querySelector("form#deposit-form").addEventListener("submit", createTransaction);

function Transf () {
  saldo -= document.querySelector("#transf-value").value;
  document.querySelector ("#atual-balance").innerHTML = saldo + `€`;
}

function Deposit () {
  saldo += document.querySelector("#deposit-value").value;
  document.querySelector ("#atual-balance").innerHTML = saldo + `€`;
}

function createTransaction(event) {
  event.preventDefault();
  console.log(event);
  const form = event.target;
  const type = form.querySelector('h2').innerHTML;
  const description = form.querySelector('input[name="description"]').value;
  const value = form.querySelector('input[name="value"]').value;
  const balance = saldo;
  const date = new Date().getDate() + '-' + [new Date().getMonth()+1] + '-' + new Date().getFullYear() + '/'+ new Date().getHours() + 'H' + new Date().getMinutes(); 
  let newTransaction = {
    type,
    description,
    value,
    balance,
    date,
  };
  transaction.push(newTransaction);
  document.querySelector("#transaction-body").innerHTML = generateTransactionBody();
}

function generateTransactionBody() {
  let result = "";
  for (let i = 0; i < transaction.length; i++) {
    result =
      result +
      `<tr>
      <td> ${transaction[i].type} </td>
      <td> ${transaction[i].description} </td>
      <td> ${transaction[i].value + '€'} </td>
      <td> ${transaction[i].balance + '€'} </td>
      <td> ${transaction[i].date} </td>
    </tr>`;
  }
  return result;
}

