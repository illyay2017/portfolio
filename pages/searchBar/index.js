const input = document.getElementById('searchInput');
input.addEventListener('keyup', showMatches);

let storedNamesDOMCollection = [];

function showMatches(e) {
  let searchQuery = e.target.value.toLowerCase();
  if (!storedNamesDOMCollection.length) {
    storedNamesDOMCollection = getAllNames();
  }

  storedNamesDOMCollection.forEach((el, idx) => {
    let name = el.textContent.toLowerCase();
    if (name.includes(searchQuery) || searchQuery.includes(name)) {
      storedNamesDOMCollection[idx].style.display = 'block';
    } else {
      storedNamesDOMCollection[idx].style.display = 'none';
    }
  });
}

function getAllNames() {
  return Array.from(document.getElementsByClassName('name'));
}
