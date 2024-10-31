<script lang="ts">
	import { onMount } from 'svelte';
	import { gun, nodes, edges, location } from '$lib/stores';

	import {
		SvelteFlow,
		Controls,
		useSvelteFlow,
		Background,
		BackgroundVariant,
		MiniMap,
		type OnConnectEnd,
		type Node
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';

	import { nanoid } from 'nanoid';
	import CustomNode from './Node.svelte';
	import GoogleMap from './Map.svelte';
	import FloatingEdge from './FloatingEdge.svelte';
	import AddressAutocomplete from './AddressAutocomplete.svelte';

	const PUBLIC_GOOGLEMAPS_API_KEY = 'AIzaSyDjcC3UTMdAi8cZXcK7POtXJ7TYf4KvdVE';

	interface PageData {
		path: string;
	}

	const nodeTypes = {
		customNode: CustomNode
	};
	const edgeTypes = {
		floating: FloatingEdge
	};

	const snapGrid = [10, 10];

	export let data: PageData;

	let DrawingCanvas;

	onMount(async () => {
		DrawingCanvas = (await import('./Konva.svelte')).default;

		/*
		gun
			.path(data.path.split('/').length > 1 ? data.path.split('/').splice(-1) : data.path)
			.put(null);
			*/

		gun.path(data.path.replaceAll('/', '.')).once((existingData) => {
			if (existingData) {
				gun.path(data.path.replaceAll('/', '.')).on((rootData) => {
					if (rootData) {
						nodes.update((n) => {
							const existingIndex = n.findIndex((d) => d.id === data.path);
							const newNode: Node = {
								id: data.path || '/',
								type: 'customNode',
								data: {
									id: data.path || '/',
									label: rootData.label
								},
								width: rootData.width || undefined,
								height: rootData.height || undefined,
								position: { x: rootData.x, y: rootData.y }
							};

							if (existingIndex === -1) {
								return [...n, ...[newNode]];
							} else {
								n[existingIndex].width = newNode.width;
								n[existingIndex].height = newNode.height;
								n[existingIndex].position = newNode.position;
								return n;
							}
						});
					}
				});
			} else {
				const newNode: Node = {
					id: data.path || '/',
					type: 'customNode',
					data: {
						id: data.path || '/'
					},
					width: 100,
					height: 50,
					position: { x: 0, y: 0 }
				};
				nodes.set([newNode]);
			}
		});
	});

	const { screenToFlowPosition } = useSvelteFlow();

	const handleMoveNode = (e) => {
		gun.path(e.targetNode.id.replaceAll('/', '.')).put(e.targetNode.position);
	};

	const handleConnectEnd: OnConnectEnd = (event, connectionState) => {
		if (connectionState.isValid) return;

		const sourceNodeId = connectionState.fromNode?.id;
		const id =
			sourceNodeId === '/' ? nanoid(11) : sourceNodeId.replaceAll('/', '.') + '.' + nanoid(11);

		const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event;

		const flowPosition = screenToFlowPosition({
			x: clientX,
			y: clientY
		});

		gun.path(id).put(flowPosition);
	};

	const somePlaceChangeFunction = (e) => {
		location.set(e.detail);
	};

	const zoomIn = () => {
		location.update((d) => {
			return { ...d, ...{ zoom: d.zoom === 20 ? d.zoom : d.zoom + 1 } };
		});
	};

	const zoomOut = () => {
		location.update((d) => {
			return { ...d, ...{ zoom: d.zoom === 0 ? d.zoom : d.zoom - 1 } };
		});
	};

	$: metersPerPx =
		(156543.03392 * Math.cos(($location.lat * Math.PI) / 180)) / Math.pow(2, $location.zoom);
</script>

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
			<svelte:component this={DrawingCanvas} />
		</div>
	{/if}
</div>

<!-- 
<div style:height="100%">
	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		{edgeTypes}
		fitView
		onconnectend={handleConnectEnd}
		on:nodedrag={(event) => handleMoveNode(event.detail)}
	>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
		<MiniMap />
	</SvelteFlow>
</div>
-->
<style>
	button:disabled {
		opacity: 0.3;
	}
</style>
