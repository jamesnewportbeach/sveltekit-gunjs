<script lang="ts">
	import { createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	import { Handle, Position, NodeResizeControl, type NodeProps } from '@xyflow/svelte';
	import { type Edge, type Node } from '@xyflow/svelte';
	import { onMount } from 'svelte';
	import { gun, nodes, edges } from '$lib/stores';
	import { nanoid } from 'nanoid';

	type $$Props = NodeProps;

	interface Props {
		data: $$Props['data'];
		isConnectable: $$Props['isConnectable'];
		selected?: $$Props['selected'];
		id: $$Props['id'];
	}

	let {
		data,
		isConnectable,
		selected = $bindable(undefined),
		id
	}: Props = $props();

	let isHovered = $state(false);

	const resizeNode = (e, p) => {
		gun.path(id.replaceAll('/', '.')).put({ width: p.width, height: p.height });
	};

	const changeLabel = () => {
		gun.path(id.replaceAll('/', '.')).put({ label: label });
	};

	onMount(() => {
		gun.path(id.replaceAll('/', '.')).map((data) => {
			if (data !== undefined && typeof data !== 'object') {
			}

			if (data !== undefined && typeof data === 'object') {
				const childId = data._['#'];
				const newNode = {
					id: childId,
					data: { id: childId, ...data },
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
						d[existingIndex].data = newNode.data;
						return d;
					}
				});

				console.log($nodes);

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

	let childNodeLength = $derived($nodes.filter((d) => d.id.indexOf(id) === 0).length - 1);

	let label = $state(data.label
		? data.label
		: data.id === '/'
			? window.location.host
			: data.id.toString().split('/').pop());
</script>

<div
	style="background-color: rgba(0,0,0,.08); border-radius: 5px; height: 100%; overflow: auto"
	onpointerover={() => (isHovered = true)}
	onpointerout={() => (isHovered = false)}
>
	<Handle type="target" id="c" position={Position.Top} {isConnectable} />
	<Handle type="target" id="d" position={Position.Bottom} {isConnectable} />
	<Handle type="source" id="a" position={Position.Bottom} style="background: #555;" />
	<Handle type="source" id="b" position={Position.Top} style="background: #555;" />

	<NodeResizeControl
		onResize={(event, params) => resizeNode(event, params)}
		minWidth={50}
		minHeight={10}
		style="background: transparent; border: none; height: 24px; width: 24px; bottom: -8px; right: -8px; opacity: .3; left: auto; top: auto"
	>
		<svg
			height="100%"
			style="width: 100%; height: 100%"
			viewBox="0 0 24 24"
			width="100%"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="m22 22h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm0-4h-2v-2h2zm-4 4h-2v-2h2zm8-8h-2v-2h2z"
			/></svg
		>
	</NodeResizeControl>

	{#if selected === true}
		<span
			role="button"
			tabindex="0"
			onmousedown={stopPropagation(bubble('mousedown'))}
			onkeyup={(e) => changeLabel}
			contenteditable="true"
			bind:textContent={label}
			style={'padding: 5px 10px; text-transform: capitalize; outline-solid: none; ' +
				(data.label ? '' : 'font-style: italic; color: rgba(0,0,0,.3); cursor: text')}
		>
		</span>
	{/if}

	{label}

	{#if selected !== true}
		<button
			onclick={() => (selected = true)}
			style={'padding: 5px 10px; text-transform: capitalize; outline-solid: none; ' +
				(data.label ? '' : 'font-style: italic; color: rgba(0,0,0,.3); cursor: text')}
		>
			{label}
		</button>
	{/if}

	{#if childNodeLength > 0}
		({childNodeLength})
	{/if}
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
