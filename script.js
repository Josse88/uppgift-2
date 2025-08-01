function enterclub() {
  let age = document.getElementById("ageinput").valueAsNumber;
  let vip = false;

  if (vip == true) {
    console.log("välkommen");
  } else {
    if (age >= 18) {
      alert("Access granted");
    } else {
      alert("Access denied");
    }
  }
}
