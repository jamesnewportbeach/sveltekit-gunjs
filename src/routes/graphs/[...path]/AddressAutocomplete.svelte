<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import * as gmapsLoader from '@googlemaps/js-api-loader';

	const dispatch = createEventDispatcher();

	const { Loader } = gmapsLoader;

	let { apiKey, value } = $props();

	let autocomplete;
	let ele: HTMLInputElement = $state();

	onMount(async function () {
		if (value) ele.value = value;

		const loader = new Loader({
			apiKey,
			version: 'weekly'
		});

		const { Autocomplete } = await loader.importLibrary('places');
		autocomplete = new Autocomplete(ele);
		autocomplete.addListener('place_changed', onPlaceChanged);
	});

	const onPlaceChanged = async () => {
		const address = autocomplete.getPlace();
		console.log(address);
		dispatch('changed', {
			lat: address.geometry.location.lat(),
			lng: address.geometry.location.lng(),
			address: address.formatted_address,
			name: address.name,
			zoom: 19
		});
	};
</script>

<input style="width: 100%" bind:this={ele} type="search" autocomplete="off" />
