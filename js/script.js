var btn = document.createElement("button");
btn.innerHTML = "Click me";
btn.style.fontSize = "20px";
btn.style.marginBottom = "20px";
btn.onclick = function() {
  var name = input.value;
  alert("Hello, " + name + "!");
}

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter your name");
input.style.fontSize = "20px";
input.style.marginBottom = "20px";
input.onkeyup = function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
}

var div = document.getElementById("myDiv");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.appendChild(btn);
div.appendChild(input);

// Optional: You can use JavaScript to add hover effect to multiple elements with the same class

// Get all elements with class "box"
const boxes = document.querySelectorAll('.box');

// Add hover effect to each element
boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'translateY(-20px)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'translateY(0)';
  });
});
