import logo from '../assets/logo.png';

type Links = {
	url: string;
	displayInNav: boolean;
	displayInFooter: boolean;
	linkText: string;
};

export type NavBarData = {
	logo: boolean;
	logoSrc: string;
	logoLink: boolean;
	linkUrl: string;
	optionalLinkText: string;
	altText: string;
	links: Links[];
};

export const navbarData: NavBarData = {
	logo: true,
	logoSrc: logo,
	logoLink: true,
	linkUrl: '/',
	optionalLinkText: 'KitchenKrafts',
	altText: 'KitchenKrafts Logo',
	links: [
		{
			url: '/',
			displayInNav: true,
			displayInFooter: false,
			linkText: 'Home'
		},
		{
			url: '/about',
			displayInNav: true,
			displayInFooter: false,
			linkText: 'About us'
		},
		{
			url: '/blog',
			displayInNav: true,
			displayInFooter: false,
			linkText: 'Blog'
		},
		{
			url: '/contact',
			displayInNav: true,
			displayInFooter: true,
			linkText: 'Contact'
		},
		{
			url: '/privacy-policy',
			displayInNav: false,
			displayInFooter: true,
			linkText: 'Privacy Policy'
		},
		{
			url: '/terms-conditions',
			displayInNav: false,
			displayInFooter: true,
			linkText: 'Terms & Conditions'
		},
		{
			url: '/notFound',
			displayInNav: false,
			displayInFooter: false,
			linkText: ''
		}
	]
};
