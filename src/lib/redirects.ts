export type Slug = {
	slug: string;
	title: string;
	url: string;
	icon: string;
};

export const slugs: Slug[] = [
	{ slug: 'blog', title: 'Blog', url: 'https://blog.jonstodle.com/', icon: 'fa-solid fa-blog' },
	{
		slug: 'talks',
		title: 'Talks',
		url: 'https://talks.jonstodle.com/',
		icon: 'fa-solid fa-person-chalkboard'
	},
	{
		slug: 'mastodon',
		title: 'Mastodon',
		url: 'https://snabelen.no/@jonstodle',
		icon: 'fa-brands fa-mastodon'
	},
	{
		slug: 'github',
		title: 'GitHub',
		url: 'http://github.com/jonstodle',
		icon: 'fa-brands fa-github'
	},
	{
		slug: 'stackoverflow',
		title: 'Stack Overflow',
		url: 'https://stackoverflow.com/users/1339804',
		icon: 'fa-brands fa-stack-overflow'
	},
	{
		slug: 'twitch',
		title: 'Twitch',
		url: 'https://www.twitch.tv/jonstodle',
		icon: 'fa-brands fa-twitch'
	}
];
