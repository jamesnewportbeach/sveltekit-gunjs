<script lang="ts">
	import { run } from 'svelte/legacy';

	import { getBezierPath, type EdgeProps, useInternalNode } from '@xyflow/svelte';

	import { getEdgeParams } from './utils';

	type $$Props = EdgeProps;

	interface Props {
		source: $$Props['source'];
		target: $$Props['target'];
		id: $$Props['id'];
	}

	let { source, target, id }: Props = $props();

	let sourceNode = $derived(useInternalNode(source));
	let targetNode = $derived(useInternalNode(target));

	let edgePath: string | undefined = $state();

	run(() => {
		if ($sourceNode && $targetNode) {
			const edgeParams = getEdgeParams($sourceNode, $targetNode);
			edgePath = getBezierPath({
				sourceX: edgeParams.sx,
				sourceY: edgeParams.sy,
				sourcePosition: edgeParams.sourcePos,
				targetPosition: edgeParams.targetPos,
				targetX: edgeParams.tx,
				targetY: edgeParams.ty
			})[0];
		} else {
			edgePath = undefined;
		}
	});
</script>

<path class="svelte-flow__edge-path" {id} d={edgePath} />
