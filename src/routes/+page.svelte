<script>
	import Link from './Link.svelte';
	import { slugs } from '$lib/redirects.ts';
</script>

<section class="p-4 rounded-3xl bg-neutral-800 mt-8">
	<h1>Jon Grythe Stødle</h1>
</section>

<section class="grid grid-cols-fit gap-12">
	{#each slugs as slug, index}
		<Link title={slug.title} icon={slug.icon} slug={slug.slug} {index} />
	{/each}
</section>
