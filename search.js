const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}
function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistList = document.getElementById('artist-list');

    // Limpa resultados anteriores
    artistList.innerHTML = '';

    if (result.length > 0) {
        result.forEach(element => {
            const artistDiv = document.createElement('div');
            artistDiv.innerHTML = `
                <p>${element.name}</p>
                <img src="${element.urlImg}" alt="${element.name}">
            `;
            artistList.appendChild(artistDiv);
        });
        resultArtist.classList.remove('hidden');
    } else {
        resultArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
    }
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});