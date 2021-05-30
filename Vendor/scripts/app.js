let orderList = document.querySelector(".order-list");
let rooms = document.querySelector('.order-rooms');
let roomIdentifier = document.querySelector("h4");
let proceed = document.querySelector(".proceed");

rooms.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    uiClass.clear();
    orderroom.updateRoom(e.target.getAttribute('id'));
    orderroom.getOrders(chat => uiClass.render(chat));
    roomIdentifier.innerText = `${e.target.getAttribute('id')}`
  }
});

const uiClass = new UIClass(orderList);
const orderroom = new orderRoom("OrderPlaced");

orderroom.getOrders(data => uiClass.render(data));

orderList.addEventListener("click", function (event) {
  if (event.target.dataset.action === "proceed") {
    if (event.target.tagName === 'BUTTON') {
      console.log(event.target.dataset.objectid)
      if(orderroom.room === "OrderPlaced"){
        orderroom.changeOrderStatus("Approved", event.target.dataset.objectid)
      }
    }
  }
});

// proceed.addEventListener('click', e => {
//     if(e.target.tagName === 'BUTTON'){
//         console.log("proceed")
//     }
// })