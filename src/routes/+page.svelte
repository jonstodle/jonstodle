<script>
	import Link from './Link.svelte';
	import { slugs } from '$lib/redirects.ts';
</script>

<section
	class="p-4 rounded-3xl bg-neutral-800 grid grid-rows-[200px_1fr] md:grid-cols-[200px_1fr] gap-4"
>
	<div class="flex items-center justify-center">
		<img
			src="/profile-picture.jpg"
			alt="Jon G Stødle"
			class="rounded-3xl w-[200px] aspect-square"
		/>
	</div>
	<div>
		<h1 class="text-4xl">Jon Grythe Stødle</h1>
		<p>
			Jon has been programming for over 10 years and is currently smashing keys for money at
			Webstep.
		</p>
		<p>
			In his spare time he&#x27;s an open source contributer, Dungeon Master and likes long sessions
			in front of the computer.
		</p>
		<p>
			His exploits can be read either on his blog (<a
				href="https://jonstodle.com/blog"
				class="inline-block px-1 underline underline-offset-4 transition-transform hover:scale-105"
				>https://jonstodle.com/blog</a
			>) or on Mastodon (<a
				href="https://jonstodle.com/mastodon"
				class="inline-block px-1 underline underline-offset-4 transition-transform hover:scale-105"
				>@jonstodle@stodle.net</a
			>).
		</p>
	</div>
</section>

<section class="grid grid-cols-fit gap-12">
	{#each slugs as slug, index}
		<Link title={slug.title} icon={slug.icon} slug={slug.slug} {index} />
	{/each}
</section>

<style>
	p {
		@apply my-2;
	}
</style>
