const myEmojis = ["👨‍🍼", "🧑‍💻", "🎛️", "🏎️", "⛷️", "🗺️"];
const addEmojiBtns = document.querySelectorAll(".add-emoji-btn");
const removeEmojiBtns = document.querySelectorAll(".remove-emoji-btn");

addEmojiBtns.forEach((btn) => btn.addEventListener("click", addEmoji));
removeEmojiBtns.forEach((btn) => btn.addEventListener("click", removeEmoji));

function addEmoji(e){
  const emojiInput = document.getElementById("emoji-input");
  
  if (emojiInput.value) {
    const wasPushBtnClicked = e.target.id === "push-btn";
    if (wasPushBtnClicked) {
      myEmojis.push(emojiInput.value);
    } else {
      myEmojis.unshift(emojiInput.value);
    }
    emojiInput.value = "";
    renderEmojis();
  }
}

function removeEmoji(e){
  if (myEmojis.length) {
    const wasPopBtnClicked = e.target.id === "pop-btn";
    if (wasPopBtnClicked) {
      myEmojis.pop();
    } else {
      myEmojis.shift();
    }
  }
  renderEmojis();
}

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container");
    removeOldEmojisFromPage(emojiContainer);
    addMyEmojisToPage(emojiContainer);
}

function removeOldEmojisFromPage(emojiContainer) {
  removeChildNodes(emojiContainer);
}

function addMyEmojisToPage(emojiContainer) {
  for (let i = 0; i < myEmojis.length; i++) {
      const emoji = document.createElement('span')
      emoji.textContent = myEmojis[i]
      emojiContainer.append(emoji)
  }
}

function removeChildNodes(htmlElement) {
    while (htmlElement.firstChild) {
        htmlElement.removeChild(htmlElement.firstChild);
    }
}

renderEmojis();
