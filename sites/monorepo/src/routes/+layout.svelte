<script lang="ts">
	import '@svelte-thing/css/base';
	import type { Snippet } from 'svelte';
	import { Darkmode } from '@svelte-thing/components';

	const { children }: { children: Snippet } = $props();
</script>

<Darkmode />

{@render children()}
