
























// const form = document.querySelector('.js-form');
// form.addEventListener('submit', handleSubmit);
// const nextBtn = document.querySelector('.js-next');
// const prevBtn = document.querySelector('.js-prev');
// let resultStats = document.querySelector('.js-result-stats');
// const spinner = document.querySelector('.js-spinner');
// let totalResults;
// let currentPage = 1;
// let searchQuery;

// const apiKey = "ES0TEP6l7fbiWXQeTs9z3OhVCd852vcvW_ZQw0CyJCE";

// nextBtn.addEventListener('click', () => {
//   currentPage += 1;
//   fetchResults(searchQuery);
// });

// prevBtn.addEventListener('click', () => {
//   currentPage -= 1;
//   fetchResults(searchQuery);
// });

// function pagination(totalPages) {
//   nextBtn.classList.remove('hidden');
//   if (currentPage >= totalPages) {
//     nextBtn.classList.add('hidden');
//   }

//   prevBtn.classList.add('hidden');
//   if (currentPage !== 1) {
//     prevBtn.classList.remove('hidden');
//   }
// }

// async function fetchResults(searchQuery) {
//   spinner.classList.remove('hidden');
//   try {
//     const results = await searchUnsplash(searchQuery);
//     pagination(results.total_pages);
//     console.log(results);
//     displayResults(results);
//   } catch (err) {
//     // console.log(err);
//     // alert('Failed to search Unsplash');
//   }
//   spinner.classList.add('hidden');
// }

// function handleSubmit() {
//   // event.preventDefault();
//   currentPage = 1;
//   // const inputValue = document.querySelector('.js-search-input').value;
//   // searchQuery = inputValue.trim();
//   // console.log(searchQuery);
//   searchQuery = "Dog";
//   fetchResults(searchQuery);
// }

// handleSubmit();

// async function searchUnsplash(searchQuery) {
//   const endpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=30&page=${currentPage}&client_id=${apiKey}`;
//   const response = await fetch(endpoint);
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   const json = await response.json();
//   return json;
// }

// function displayResults(json) {
//   const searchResults = document.querySelector('.search-results');
//   searchResults.textContent = '';
//   json.results.forEach(result => {
//     const url = result.urls.small;
//     console.log("URL", url)
//     const unsplashLink = result.links.html;
//     const photographer = result.user.name;
//     const photographerPage = result.user.links.html;

//     var elem = document.querySelector(".grilla");
//     imagesLoaded(elem, () => {
//       var msnry = new Masonry(elem, {
//         // options
//         itemSelector: ".grid-item",
//         columnWidth: 230,
//         // gutter: 20,
//       });
//     })



//     searchResults.insertAdjacentHTML(
//       'beforeend',
//       `
//           <img class="grid-item" src="${url}" width="230" height="286" />
// 				</a>
// 			`
//     );
//   });
//   totalResults = json.total;
//   resultStats.textContent = `About ${totalResults} results found`;
// };

