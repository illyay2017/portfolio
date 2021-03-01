const entryForm = document.getElementById("entry-form");
const entryTextBox = document.querySelector(".entry-textbox");
const entriesSection = document.getElementById("entries");

function addEntryToDom(e) {
  e.preventDefault();
  const entryDiv = document.createElement('div');
  entryDiv.classList.add("single-entry");
  entryDiv.textContent = entryTextBox.value;
  entriesSection.appendChild(entryDiv);
  entryTextBox.value = '';
}

entryForm.addEventListener("submit", addEntryToDom);
