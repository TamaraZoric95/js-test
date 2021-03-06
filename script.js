/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

// Baseline HTML output
const articleContent = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// Creating function that creates html for <figure> element
function helperImageFunction(newObject) {
  const newFigure = document.createElement("figure");
  const newImage = document.createElement("img");
  const newFigcaption = document.createElement("figcaption");
  newImage.setAttribute("src", newObject.image);
  newImage.setAttribute("alt", newObject.name);
  newFigcaption.innerHTML = newObject.name;

  newFigure.append(newImage);
  newFigure.append(newFigcaption);
  return newFigure;
}

console.log(helperImageFunction(frogpack).innerHTML);

(() => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = articleContent;
  newArticle.append(helperImageFunction(frogpack));
  document.querySelector("main").appendChild(newArticle);
})();
