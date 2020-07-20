import VueRouter from "vue-router";

import InfoPage from "./pages/InfoPage";
import AnnouncementsPage from "./pages/announcements/AnnouncementsPage";
import DownloadGenso from "./pages/downloads/Download";
import DownloadSurvival from "./pages/downloads/DownloadSurvival";
import MarkdownPage from "./pages/MarkdownPage";
import _404Page from "./pages/404Page";
import AnnouncementPostPage from "./pages/announcements/AnnouncementPostPage";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";

import {autoImage} from "./images";
import {removeExtension} from "./files";
import announcementList from "../content/announcements/announcementList.yaml";

const mdPagesResolve = require.context('../content/pages', true, /\.md$/);

export const router = new VueRouter({
	base: '/',
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'info',
			component: InfoPage,
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/announcements/',
			name: 'announcements',
			component: AnnouncementsPage,
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/ranks/',
			name: 'ranks',
			component: () => ({
				component: import(/* webpackChunkName: "ranksPage" */ "./pages/ranks/RanksPage"),
				loading: LoadingPage,
				error: ErrorPage
			}),
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/staff/',
			name: 'staff',
			component: () => ({
				component: import(/* webpackChunkName: "staffPage" */ "./pages/StaffPage"),
				loading: LoadingPage,
				error: ErrorPage
			}),
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/commands/',
			name: 'commands',
			component: () => ({
				component: import(/* webpackChunkName: "commandsPage" */ "./pages/commands/CommandsPage"),
				loading: LoadingPage,
				error: ErrorPage
			}),
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/gensokyo/',
			name: 'gensokyo',
			component: () => ({
				component: import(/* webpackChunkName: "gensokyoPage" */ "./pages/gensokyo/LocationsPage"),
				loading: LoadingPage,
				error: ErrorPage
			}),
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/gensokyo/help/',
			name: 'gensokyo_help',
			component: () => ({
				component: import(/* webpackChunkName: "gensokyoHelpPage" */ "./pages/gensokyo/HelpPage"),
				loading: LoadingPage,
				error: ErrorPage
			}),
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/downloads/gensokyo/',
			name: 'download_genso',
			component: DownloadGenso,
			pathToRegexpOptions: { strict: true }
		},
		{
			path: '/downloads/survival/',
			name: 'download_survival',
			component: DownloadSurvival,
			pathToRegexpOptions: { strict: true }
		},
		...mdPagesResolve.keys().map(mdPagesResolve).filter(p => !p.attributes.isLocalization).map(page => ({
			path: page.attributes.path,
			name: page.attributes.vueRouterName,
			component: MarkdownPage,
			props: {
				component: page,
				localizedComponents: page.attributes.localizations && page.attributes.localizations.map((
					file,
					locale
				) => [locale, mdPagesResolve(file)]) || {},
				parallaxImages: () => page.attributes.parallaxImages && autoImage(page.attributes.parallaxImages),
			},
			pathToRegexpOptions: {strict: true}
		})),
		...announcementList.posts.map(post => {
			let name = removeExtension(post.file, '.md');
			let slug = post.slug || name;

			return {
				path: `/announcements/${slug}/`,
				component: AnnouncementPostPage,
				props: {
					postName: name,
					postSlug: slug
				},
				pathToRegexpOptions: { strict: true }
			}
		}),
		{
			path: '*',
			name: '404',
			component: _404Page
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if(to.hash.length) {
			return { selector: '#' + CSS.escape(to.hash.substring(1)) }
		} else {
			return { x: 0, y: 0 }
		}
	}
});