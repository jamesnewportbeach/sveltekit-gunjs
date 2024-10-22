<script lang="ts">
	import { Handle, Position, NodeResizeControl, type NodeProps } from '@xyflow/svelte';
	import { type Edge, type Node } from '@xyflow/svelte';
	import { onMount } from 'svelte';
	import { gun, nodes, edges } from '$lib/stores';
	import { nanoid } from 'nanoid';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let isConnectable: $$Props['isConnectable'];
	export let selected: $$Props['selected'] = undefined;
	export let id: $$Props['id'];

	let isHovered = false;

	const resizeNode = (e, p) => {
		gun.path(id.replaceAll('/', '.')).put({ width: p.width, height: p.height });
	};

	onMount(() => {
		gun.path(id.replaceAll('/', '.')).map((data) => {
			if (data !== undefined && typeof data === 'object') {
				const childId = data._['#'];
				const newNode: Node = {
					id: childId,
					data: { id: childId },
					type: 'customNode',
					width: data.width || undefined,
					height: data.height || undefined,
					position: {
						x: data.x,
						y: data.y
					}
				};

				nodes.update((d) => {
					const existingIndex = d.findIndex((d) => d.id === childId);
					if (existingIndex === -1) {
						return [...d, ...[newNode]];
					} else {
						d[existingIndex].width = data.width || undefined;
						d[existingIndex].height = data.height || undefined;
						d[existingIndex].position = newNode.position;
						return d;
					}
				});

				edges.update((d) => {
					const existingIndex = d.findIndex((d) => d.source === id && d.target === newNode.id);
					if (existingIndex === -1) {
						const newEdge: Edge = {
							source: id,
							target: newNode.id,
							id: nanoid(11)
						};
						return [...d, ...[newEdge]];
					} else {
						return d;
					}
				});
			}
		});
	});
</script>

<div
	style="background-color: rgba(0,0,0,.08); border-radius: 5px; height: 100%; overflow: auto"
	on:pointerover={() => (isHovered = true)}
	on:pointerout={() => (isHovered = false)}
>
	<Handle type="target" id="c" position={Position.Top} {isConnectable} />
	<Handle type="target" id="d" position={Position.Bottom} {isConnectable} />
	<Handle type="source" id="a" position={Position.Bottom} style="background: #555;" />
	<Handle type="source" id="b" position={Position.Top} style="background: #555;" />

	<NodeResizeControl
		onResize={(event, params) => resizeNode(event, params)}
		minWidth={50}
		minHeight={10}
		style="background: transparent; border: none; height: 10px; width: 10px; bottom: -3px; right: -3px; left: auto; top: auto"
	>
		<svg
			height="100%"
			style="width: 10px; height: 10px"
			viewBox="0 0 24 24"
			width="100%"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="m22 22h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm8-8h-2v-2h2z"
			/></svg
		>
	</NodeResizeControl>

	<div
		style={'padding: 5px 10px; font-size: 12px; text-transform: capitalize; ' +
			(data.label ? '' : 'font-style: italic; color: rgba(0,0,0,.3)')}
	>
		{data.label || 'new'}
	</div>
</div>

<style>
	:global(.svelte-flow__node-selectorNode) {
		font-size: 12px;
		background: #eee;
		border: 1px solid #555;
		border-radius: 5px;
		text-align: center;
	}
</style>
