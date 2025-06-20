<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { models, localeData } from '$lib/stores';

	import '@xyflow/svelte/dist/style.css';
	import Label from './label.svelte';
	import SpeciesAutocomplete from './SpeciesAutocomplete.svelte';

	interface PageData {
		path: string;
	}

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div style:height="100%">
	<SpeciesAutocomplete />
	<input
		placeholder="Add New..."
		onchange={(e) => models.add({ label: localeData(e.target.value) }) && (e.target.value = '')}
	/>

	{#each Object.entries($models) as [key, { label }] (key)}
		<div style="padding: .4rem">
			<Label key={label} />
			<a href="#" onclick={preventDefault(() => models.delete(key))}>delete</a>
		</div>
	{/each}
</div>

<!-- 

<div style=" height: 100%; width: 100%; position: relative">
	<div style="z-index: 2; position: absolute; left: 0; top: 0;">
		{#if $location.name}
			<p>Scale: {metersPerPx} meters/px</p>
			<h2>{$location['name']}</h2>
			<button on:click={() => location.set({})}>Clear</button>
			<button on:click={zoomIn} disabled={$location['zoom'] === 20}>+ Zoom</button>
			<button on:click={zoomOut} disabled={$location['zoom'] === 1}>- Zoom</button>
		{:else}
			<AddressAutocomplete
				value={$location['address']}
				apiKey={PUBLIC_GOOGLEMAPS_API_KEY}
				on:changed={somePlaceChangeFunction}
			/>
		{/if}
	</div>
	{#if $location.name}
		<div style="z-index: 1; height: 100%; width: 100%; position: absolute; left: 0; top: 0;">
			<GoogleMap
				apiKey={PUBLIC_GOOGLEMAPS_API_KEY}
				lat={$location['lat']}
				lng={$location['lng']}
				zoom={$location['zoom']}
			/>
		</div>

		<div style="z-index: 2; height: 100%; width: 100%; position: absolute; left: 0; top: 0">
			P<polygon-canvas></polygon-canvas>C

			<svelte:component this={DrawingCanvas} />
		</div>
	{/if}
</div>

-->
<style>
	button:disabled {
		opacity: 0.3;
	}
</style>
