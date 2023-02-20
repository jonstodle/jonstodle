<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let icon: string;
	export let slug: string;
	export let index: number;

	let rootTag: HTMLElement;

	onMount(() => {
		const num = [...`0${index + 1}`].slice(-2).join('');
		rootTag.style.backgroundImage = `url(/backgrounds/pic${num}.jpg)`;
	});
</script>

<a
	href="/{slug}"
	class="aspect-square bg-cover relative group rounded-3xl overflow-clip hover:scale-105 transition-transform"
	bind:this={rootTag}
>
	<div class="absolute inset-0 flex justify-center items-center">
		<i class="{icon} fa-8x opacity-75" />
	</div>
	<div
		class="absolute inset-0 flex justify-center items-center group-hover:backdrop-blur-lg [@media(hover:none)]:backdrop-blur-lg transition-all duration-300 p-2"
	>
		<h2
			class="text-4xl text-neutral-900 font-bold text-center opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity delay-100"
		>
			{title}
		</h2>
	</div>
</a>
