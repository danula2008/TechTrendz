let products = [
  {
    src: "assets/Products/1/1.webp",
    txt: "SoundWave Wireless Earbuds",
    price: "Rs. 999",
  },
  {
    src: "assets/Products/2/1.webp",
    txt: "Aurora True Wireless Earphones",
    price: "Rs. 1,299",
  },
  {
    src: "assets/Products/3/1.webp",
    txt: "BassBoost In-Ear Wireless Headphones",
    price: "Rs. 799",
  },
  {
    src: "assets/Products/4/1.webp",
    txt: "ThunderBeat Wireless Earbuds with Power Bank",
    price: "Rs. 1,499",
  },
  {
    src: "assets/Products/5/1.webp",
    txt: "MelodyBuds Wireless Earphones with Mic",
    price: "Rs. 1,099",
  },
  {
    src: "assets/Products/6/1.webp",
    txt: "RhythmRun Wireless Sports Earbuds",
    price: "Rs. 899",
  },
  {
    src: "assets/Products/7/1.webp",
    txt: "SonicWave Pro Wireless Earbuds with ANC",
    price: "Rs. 1,699",
  },
  {
    src: "assets/Products/8/1.webp",
    txt: "HarmonyHub Wireless Earbuds with Charging Case",
    price: "Rs. 2,099",
  },
];

code = "";

products.forEach((item) => {
  code += `<div class="col-lg-2 col-md-3 col-sm-4 col-4 my-2">
    <div class="card">
        <img src="${item.src}" class="card-img-top" alt="product">
        <div class="card-body">
            <p id="product_discription" class="card-text">${item.txt}</p>
            <h4 id="product_price" class="text-primary">${item.price}</h4>
        </div>
    </div>
</div>`;
});

document.getElementById("product_grid").innerHTML = code;
