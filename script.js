
  window.onload = function() {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // fonction qui gérè les couleurs 
  function getRandomColor() {
    let red = Math.floor(Math.random() * 256);  
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  // changer la couleur quand en clique sur le botton
  changeColorBtn.onclick = function() {
    colorBox.style.backgroundColor = getRandomColor();
  };
}