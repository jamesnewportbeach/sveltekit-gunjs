<script lang="ts">
	import { onMount } from 'svelte';
	import * as gmapsLoader from '@googlemaps/js-api-loader';
	import { location } from '$lib/stores';

	const { Loader } = gmapsLoader;

	interface Props {
		apiKey: any;
		zoom?: number;
		lat?: number;
		lng?: number;
	}

	let {
		apiKey,
		zoom = 10,
		lat = 0,
		lng = 0
	}: Props = $props();

	let ele: HTMLElement = $state();
	let map;

	location.subscribe((d: any) => {
		if (map && d) {
			map.setCenter({ lat: d.lat, lng: d.lng });
			map.setZoom(d.zoom);
		}
	});

	onMount(async function () {
		const loader = new Loader({
			apiKey,
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');
		map = new Map(ele, {
			zoom,
			center: { lat, lng },
			disableDefaultUI: true
		});

		/*
		const { AdvancedMarkerElement } = await loader.importLibrary('marker');
		new AdvancedMarkerElement({
			map,
			position: coords,
			title: 'Home'
		});
		*/
	});
</script>

<div bind:this={ele} style:height={'100%'}></div>
