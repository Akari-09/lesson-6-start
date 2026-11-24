// 1. 表示する場所を取得する
const productList = document.querySelector("#productList");
const message = document.querySelector("#message");

// 2. JSONファイルを読み込む
// TODO 1：fetch() で data.json を読み込もう
// fetch("data.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(products) {
//         // TODO 2：読み込んだ商品データを1件ずつ表示する
//         products.forEach(function(product) {
//             const card = document.createElement("article");
//             card.className = "card";
//
//             const name = document.createElement("h2");
//             name.textContent = product.name;
//
//             const price = document.createElement("p");
//             price.className = "price";
//             price.textContent = product.price + "円";
//
//             const category = document.createElement("p");
//             category.textContent = product.category;
//
//             card.appendChild(name);
//             card.appendChild(price);
//             card.appendChild(category);
//             productList.appendChild(card);
//         });
//
//         message.textContent = "商品データを表示しました。";
//     })
//     .catch(function(error) {
//         message.textContent = "データを読み込めませんでした。";
//         console.log(error);
//     });
