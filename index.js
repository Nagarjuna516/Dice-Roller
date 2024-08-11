function rolldice() {
  const nofdice = document.getElementById("tdice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimg = document.getElementById("diceimg");
  const values = [];
  const images = [];
  for (let i = 0; i < nofdice; i++) {
    const a = Math.floor(Math.random() * 6) + 1;
    values.push(a);
    images.push(`<img src="https://www.calculator.net/img/dice${a}.png">`);
  }
  diceresult.textContent = `dice: ${values.join(", ")}`;
  diceimg.innerHTML = images.join(" ");
}
