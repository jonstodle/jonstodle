import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { slugs } from '$lib/redirects';

export const GET = (({ params: { slug } }) => {
	const dest = slugs.find((s) => s.slug == slug);

	if (!dest) {
		throw redirect(307, '/');
	}

	throw redirect(307, dest.url);
}) satisfies RequestHandler;
