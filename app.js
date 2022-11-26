/** @format */

const purchase = document.querySelector(".purchase");
const items = document.querySelector(".item");
const current = document.querySelector(".current");
const main = document.querySelector(".con");
const btn = document.querySelector(".button");
const msg = document.querySelector(".msg");

btn.addEventListener("click", check_profit_loss);

function check_profit_loss() {
  let pno = purchase.value;
  let ino = items.value;
  let cno = current.value;

  //   remove msg tag all class
  msg.classList.remove("error");
  msg.classList.remove("profit");
  msg.classList.remove("loss");
  msg.innerText = "";

  if (check_number(pno, ino, cno)) {
    pno = Number(pno);
    // console.log(pno);
    ino = Number(ino);
    cno = Number(cno);

    const pricediff = Math.abs(pno - cno).toFixed(2);
    console.log(pricediff);
    const profit_loss = (pricediff * ino).toFixed(2);
    console.log(profit_loss);
    const percent = ((pricediff / pno) * 100).toFixed(2);
    console.log(percent);

    if (pno > cno) {
      msg.className = "loss";
      msg.innerHTML = `You lost ${percent}%.<br/>Your loss is: ${pricediff}/ stock. <br/>Total loss is: ${profit_loss}`;
    } else if (pno < cno) {
      msg.className = "profit";
      msg.innerHTML = `You gained ${percent}%.<br/>Your profit is: ${pricediff}/ stock.<br/> Total profit is: ${profit_loss}`;
    } else {
      msg.className = "box";
      msg.innerHTML = `You gained 0%.<br/>Your profit is: 0/ stock.<br/> Total profit is: 0`;
    }
  }
}

function check_number(p, i, c) {
  if (p === "" || i === "" || c === "") {
    msg.className = "error";
    msg.innerText = "Please enter all the values";
    return false;
  } else if (
    Number.parseInt(i) <= 0 ||
    Number.parseInt(p) <= 0 ||
    Number.parseInt(c) <= 0
  ) {
    msg.className = "error";
    msg.innerHTML = "Please enter values greater than 0";
    return false;
  } else {
    return true;
  }
}
