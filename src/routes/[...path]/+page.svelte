<script lang="ts">
	import { onMount } from 'svelte';
	import { gun, nodes, edges } from '$lib/stores';

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
	import FloatingEdge from './FloatingEdge.svelte';

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

	onMount(async () => {
		/*
		gun
			.path(data.path.split('/').length > 1 ? data.path.split('/').splice(-1) : data.path)
			.put(null);
			*/

		gun.path(data.path.replaceAll('/', '.')).on((rootData) => {
			if (rootData) {
				nodes.update((n) => {
					const existingIndex = n.findIndex((d) => d.id === data.path);
					const newNode: Node = {
						id: data.path || '/',
						type: 'customNode',
						data: {
							id: data.path || '/'
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
			} else {
				const newNode: Node = {
					id: data.path || '/',
					type: 'customNode',
					data: {
						id: data.path || '/'
					},
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
		const id = sourceNodeId.replaceAll('/', '.') + '.' + nanoid(11);

		const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event;

		const flowPosition = screenToFlowPosition({
			x: clientX,
			y: clientY
		});

		gun.path(id).put(flowPosition);
	};
</script>

<div style:height="100%">
	<SvelteFlow
		{nodes}
		{edges}
		{nodeTypes}
		{edgeTypes}
		fitView
		onconnectend={handleConnectEnd}
		on:nodedrag={(event) => handleMoveNode(event.detail)}
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
		<MiniMap />
	</SvelteFlow>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
