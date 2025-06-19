<script lang="ts">
	import { gun } from '$lib/stores';
	import { onMount } from 'svelte';

	export let key;
	export let locale = 'en-US';

	let label = '';

	onMount(() => {
		gun
			.get(key)
			.get(locale)
			.once((d) => {
				label = d;
			});
	});
</script>

<span>{label}</span>
