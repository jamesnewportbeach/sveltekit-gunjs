<script>
    import { debounce } from 'lodash-es'; // or any debounce utility
    import { writable } from 'svelte/store';
  
    let query = "";
    let suggestions = [];
    let isLoading = false;
    let currentPage = 1; // For pagination
    const limit = 10; // Number of results per page
  
    async function fetchSuggestions(value, page) {
      isLoading = true;
      try {
        const response = await fetch(`https://perenual.com/api/v2/species-list?key=sk-jAqX6854a1be1071d11086&q=${value}&page=${page}&limit=${limit}`);
        const data = await response.json();
        suggestions = [];
        console.log(data)
        suggestions = data.data; // Assuming the API returns an object with a 'suggestions' array
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        suggestions = [];
      } finally {
        isLoading = false;
      }
    }
  
    const debouncedFetch = debounce(fetchSuggestions, 1000);
  
    $: { // Reactive declaration
      if (query) {
        debouncedFetch(query, currentPage);
      } else {
        suggestions = [];
      }
    }
</script>

<input type="text" bind:value={query} />

{#if isLoading}
	<p>Loading...</p>
{/if}

{#if suggestions}
	<ul class="flex">
		{#each suggestions as suggestion}
			<li>
				{suggestion.id} - {suggestion.common_name}<br />
				<i>{suggestion.genus + ' ' + suggestion.species_epithet}</i>
				<img src={suggestion.default_image.thumbnail} alt="Image of {suggestion.common_name}" />
			</li>
		{/each}
	</ul>
{/if}

<!-- Pagination controls (optional) -->
{#if suggestions.length > 0}
	<button on:click={() => currentPage++}>Next Page</button>
{/if}
