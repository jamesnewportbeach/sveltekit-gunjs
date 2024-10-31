<script>
	import { Stage, Layer, Rect } from 'svelte-konva';
</script>

<Stage config={{ width: 1000, height: 1000 }}>
	<Layer>
		<Rect config={{ x: 100, y: 100, width: 400, height: 200, fill: 'blue' }} />
	</Layer>
</Stage>
