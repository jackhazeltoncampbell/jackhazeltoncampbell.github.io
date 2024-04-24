document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-container input[type="text"]'); //Get the text from the search box
    const searchButton = document.querySelector('.search-container button[type="submit"]'); //Get the search button
    const resetButton = document.getElementById('resetButton'); //Get the reset button



    //JS Function to do the search
    function executeSearch() {
        const searchText = searchInput.value.toLowerCase(); //pull the text from the search-container element
        const deityEntries = document.querySelectorAll('.deity-entry');


        //Creating a foreach loop to iterate through all the deity entries
        deityEntries.forEach(entry => {
            const text = entry.textContent.toLowerCase();
            if (text.includes(searchText)) {
                entry.style.display = ''; //for each of the entries, show it if it matches what the user searches
            } else {
                entry.style.display = 'none'; //show nothing if the entry doesn't match the searched text
            }
        });
    }

    //JS Function to reset the search to default
    function resetSearch() {
        searchInput.value = ''; //Sets the search input to nothing
        const deityEntries = document.querySelectorAll('.deity-entry');
        deityEntries.forEach(entry => {
            entry.style.display = ''; //Ensures each entry is displayed
        });
    }

    //Trigger for when the user clicks on the search button
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        executeSearch();
    });

    //Trigger for when the user presses "Enter" while in the search box
    searchInput.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) { //keycode 13 is the "enter" keycode, so it triggers when they press Enter
            event.preventDefault();
            executeSearch();
        }
    });

    //Trigger for when the users actually clicks the reset button
    resetButton.addEventListener("click", function() {
        resetSearch();
    });
});
