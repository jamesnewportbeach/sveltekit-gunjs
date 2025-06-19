<script lang="ts">
	import { gun } from '$lib/stores';
	import { onMount } from 'svelte';

	interface Props {
		key: any;
		locale?: string;
	}

	let { key, locale = 'en-US' }: Props = $props();

	let label = $state('');

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
