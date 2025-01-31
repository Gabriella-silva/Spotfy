const searchInput = document.getElementById('search-Input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestAPI(searchTerm){
  const url =('http://localhost:3000/artists?name_like=${searchTerm}')
  fetch(url)
  .then
};

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase;
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
})
console.log('It*s working');