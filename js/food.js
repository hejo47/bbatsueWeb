const API_KEY = "L%2Fb%2BfQ9y55je7IXprugDIh9H%2F2k29xdC4W4IqCo36EPBgUz8DVdtezAHCrk4aRyQaZgMrrM%2BRQRSINADGG4NgQ%3D%3D";

let bread_name = "샌드위치";
let items_num = 2;

get_data();

async function get_data() {
  const url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=${API_KEY}&desc_kor=${bread_name}&numOfRows=20&type=json`;
  const response = await fetch(url);
  data = await response.json();
  console.log("data", data); 
  api_data(data);
}

function api_data(data) {
  document.querySelector(".product-item-text b").innerText = `${data.body.items[items_num].DESC_KOR}`;
  document.querySelector(".bread_sweet").innerText = `${data.body.items[items_num].NUTR_CONT5}g`;

}
