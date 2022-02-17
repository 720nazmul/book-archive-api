const errorDiv = document.getElementById('error-message');
const searchResult = document.getElementById('search-result');
const loadSearch = () => {
    // search field
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear previous data
    searchField.value = '';
    errorDiv.innerText = '';
    searchResult.textContent = '';
    // error message
    if (searchText === '') {
        errorDiv.innerText = 'Search field cannot be empty.....!';
        return;
    }
    // fetch
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.docs));

};

const displaySearch = (books) => {
    // loop through data
    books.forEach(book => {
        const divBox = document.createElement('div');
        divBox.classList.add('col');
        divBox.innerHTML = `
            <div class="card">
                  <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top h-100" alt="...">
                    <div class="card-body">
                        <h3 class="text-warning">${book.subject_facet}</h3>
                        <h4 class="text-primary">Author name:${book.author_name}</h4>
                        <h5 class="text-success">Publisher:${book.publisher}</h5>
                        <p class="text-info">published date: ${book.first_publish_year}</p>
                    </div>
                </div>
            `;
        searchResult.appendChild(divBox);
    });

}


