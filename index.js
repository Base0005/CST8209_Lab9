const MovieSection = document.getElementById("MovieSection");
const MovieSearchBar = document.getElementById("MovieSearchBar");
const SearchBtn = document.getElementById("SearchBtn");
SearchBtn.addEventListener("click", SearchBtnPressed);
MovieSearchBar.addEventListener("keydown", SearchBarTyped);
// MovieSearchBar.addEventListener("submit", MovieSearchedBarKeyboard)

function SearchBtnPressed() {
	MovieSearchedBar();
}

function SearchBarTyped(event) {
	console.log(event.key);
	if (event.key === "Enter") {
		MovieSearchedBar();
		event.preventDefault();
	}
}

function MovieSearchedBar() {
	console.log(MovieSearchBar.value);
	const filteredMovies = movies.filter((movie) =>
		movie.title.toLowerCase().includes(MovieSearchBar.value.toLowerCase())
	);
	console.log(filteredMovies);
	MovieSection.innerHTML = "";
	for (let i = 0; i < filteredMovies.length; i++) {
		const filteredTitles = filteredMovies[i].title;
		console.log(filteredTitles);
		const filteredYear = filteredMovies[i].year;
		console.log(filteredYear);
		const filteredDescription = filteredMovies[i].description;
		console.log(filteredDescription);
		const MovieCard = document.createElement("div");
		MovieCard.className = "MovieCard";
		const MovieTitle = document.createElement("h2");
		MovieTitle.className = "MovieTitle";
		MovieTitle.textContent = filteredTitles;
		const MovieYear = document.createElement("p");
		MovieYear.className = "MovieYear";
		MovieYear.textContent = filteredYear;
		const MovieDesc = document.createElement("p");
		MovieDesc.className = "MovieDesc";
		MovieDesc.textContent = filteredDescription;
		MovieCard.appendChild(MovieTitle);
		MovieCard.appendChild(MovieYear);
		MovieCard.appendChild(MovieDesc);
		MovieSection.appendChild(MovieCard);
		MovieCard.addEventListener("click", function () {
			console.log("MovieCardClicked");
			MovieDesc.style.display =
				MovieDesc.style.display === "none" ? "block" : "none";
		});
	}
}
