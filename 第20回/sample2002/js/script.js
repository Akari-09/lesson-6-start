// 1. 商品データ（配列＋オブジェクト）
const products = [
    { name: "ノート", price: 300, category: "文房具" },
    { name: "ボールペン", price: 150, category: "文房具" },
    { name: "トートバッグ", price: 1200, category: "雑貨" }
];

// 2. 表示する場所を取得する
const productList = document.querySelector("#productList");

// 3. 商品データをカードにして表示する
products.forEach(function(product) {
    const card = document.createElement("article");
    card.className = "card";

    const category = document.createElement("span");
    category.className = "category";
    // TODO 1：カテゴリーを表示する
    // category.textContent = product.category;

    const name = document.createElement("h2");
    // TODO 2：商品名を表示する
    // name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "price";
    // TODO 3：価格の後ろに「円」を付けて表示する
    // price.textContent = product.price + "円";

    // TODO 4：cardにcategory、name、priceを追加する
    // card.appendChild(...);

    productList.appendChild(card);
});
