/**
 * KoD3X-Search
 * A lightweight library for filtering elements on a page
 * 
 * Usage:
 * 1. Add kod3x-search="searchId" to elements you want to filter
 * 2. Add kod3x-search-input="searchId" to the input field
 * 3. Optional: Add a #no-results element to display when no results are found
 *
 * Search is performed only on the textual content of elements.
 * 
 * @author KoD3X
*/

class KoD3XSearch {
	constructor() {
		this.init();
	}

	/**
	 * Initialize the library
	*/
	init() {
		// Find all search inputs with kod3x-search-input attribute
		const searchInputs = document.querySelectorAll('[kod3x-search-input]');
		
		// Attach event listeners to each input field
		searchInputs.forEach(input => {
			const searchId = input.getAttribute('kod3x-search-input');
			
			// Listener for real-time input
			input.addEventListener('input', () => {
				this.filterItems(searchId, input.value.trim().toLowerCase());
			});
			
			// Initial filter on page load with empty value
			this.filterItems(searchId, '');
		});
	}

	/**
	 * Filter items based on search query
	 * 
	 * @param {string} searchId - The ID of the search group
	 * @param {string} query - The search query
	*/
	filterItems(searchId, query) {
		// Find all items with matching kod3x-search attribute
		const items = document.querySelectorAll(`[kod3x-search="${searchId}"]`);
		const noResultsElement = document.getElementById('no-results');
		
		let visibleItemsCount = 0;
		
		items.forEach(item => {
			// Get item's text content for searching
			const text = item.textContent.toLowerCase();
			
			// Check if query matches the text
			const matchesText = text.includes(query);
			
			// Show or hide item with CSS classes
			if (query === '' || matchesText) {
				item.classList.remove('kod3x-search-hidden', 'kod3x-search-completely-hidden');
				visibleItemsCount++;
			} else {
				item.classList.add('kod3x-search-hidden');
				
				// Hide element completely after fade animation
				setTimeout(() => {
					if (item.classList.contains('kod3x-search-hidden')) {
						item.classList.add('kod3x-search-completely-hidden');
					}
				}, 300); // Match the CSS transition duration
			}
		});
		
		// Handle "No results" message display
		if (noResultsElement) {
			if (visibleItemsCount === 0 && query !== '') {
				noResultsElement.style.display = 'block';
			} else {
				noResultsElement.style.display = 'none';
			}
		}
		
	}

}

// Initialize the library when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	// Create a globally accessible instance
	window.KoD3XSearch = new KoD3XSearch();
	
	// Optional: Log to confirm initialization
	// console.log('KoD3X-Search initialized successfully');
});
