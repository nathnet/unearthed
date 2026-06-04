const renderGifts = async () => {
  const response = await fetch("/gifts");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((gift) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${gift.image})`;

      const name = document.createElement("h3");
      name.textContent = gift.name;
      bottomContainer.append(name);

      const pricePoint = document.createElement("p");
      pricePoint.textContent = "Price: " + gift.pricePoint;
      bottomContainer.append(pricePoint);

      const audience = document.createElement("p");
      audience.textContent = "Great For: " + gift.audience;
      bottomContainer.append(audience);

      const readMoreButton = document.createElement("a");
			readMoreButton.textContent = "Read More >";
			readMoreButton.href = `/gifts/${gift.id}`;
			readMoreButton.setAttribute("role", "button");
			bottomContainer.append(readMoreButton);

			card.append(topContainer);
			card.append(bottomContainer);

			mainContent.append(card);
    });
  } else {
    const noGiftsAvailableHeading = document.createElement("h2");
    noGiftsAvailableHeading.textContent = "No Gifts Available 😞";
    mainContent.append(noGiftsAvailableHeading);
  }
};

const renderGift = async () => {
  const requestID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/gifts");
  const data = await response.json();

  const giftContent = document.getElementById("gift-content");
  let gift;

  gift = data.find(gift => gift.id === requestID);

  if (gift) {
    document.getElementById('image').src = gift.image;
    document.getElementById('name').textContent = gift.name;
    document.getElementById('submittedBy').textContent = `Submitted by: ${gift.submittedBy}`;
    document.getElementById('pricePoint').textContent = `Price: ${gift.pricePoint}`;
    document.getElementById('audience').textContent = `Great For: ${gift.audience}`;
    document.getElementById('description').textContent = gift.description;
    document.title = `UnEarthed - ${gift.name}`;
  } else {
    const message = document.createElement('h2')
    message.textContent = 'No Gifts Available 😞'
    giftContent.append(message)
  }
}

const url = window.location.pathname;

if (url === "/") {
  renderGifts();
} else if (url.match(/^\/gifts\/(\d+)$/)) {
  console.log("test");
  renderGift();
} else {
  window.location.href = "/404.html";
}