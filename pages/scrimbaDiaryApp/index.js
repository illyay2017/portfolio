const entryForm = document.getElementById("entry-form");
const entryTextBox = document.querySelector(".entry-textbox");
const entriesSection = document.querySelector("#entries");
const entriesNav = document.querySelector(".entries-nav");

function addEntryToDom(e) {
  e.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.classList.add("single-entry", "hide");
  entryDiv.textContent = entryTextBox.value;
  entriesSection.appendChild(entryDiv);
  entryTextBox.value = '';

  addEntryButton();
}

function toggleDisplayEntry(e) {
  const entryNumberClicked = Number(e.target.textContent);
  let entries = document.querySelectorAll(".single-entry");
  entries.forEach((entry, idx) => {
    if (entryNumberClicked -1 !== idx) {
      entry.classList.add("hide")
    }
  });
  entriesSection.children.item(entryNumberClicked).classList.toggle("hide");
}

entryForm.addEventListener("submit", addEntryToDom);


function addEntryButton() {
  const entryCount = entriesNav.childElementCount;
  const displayEntryButton = document.createElement("button");
  displayEntryButton.classList.add("display-entry-button");
  displayEntryButton.textContent = entryCount + 1;
  displayEntryButton.addEventListener("click", toggleDisplayEntry);
  entriesNav.append(displayEntryButton);
}
