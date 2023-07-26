import logo from '../assets/logo.png';
import { base } from '$app/paths';

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
	linkUrl: base,
	optionalLinkText: 'KitchenKrafts',
	altText: 'KitchenKrafts Logo',
	links: [
		{
			url: base,
			displayInNav: true,
			displayInFooter: false,
			linkText: 'Home'
		},
		{
			url: `${base}/about`,
			displayInNav: true,
			displayInFooter: false,
			linkText: 'About us'
		},
		{
			url: `${base}/blog`,
			displayInNav: true,
			displayInFooter: false,
			linkText: 'Blog'
		},
		{
			url: `${base}/contact`,
			displayInNav: true,
			displayInFooter: true,
			linkText: 'Contact'
		},
		{
			url: `${base}/privacy-policy`,
			displayInNav: false,
			displayInFooter: true,
			linkText: 'Privacy Policy'
		},
		{
			url: `${base}/terms-conditions`,
			displayInNav: false,
			displayInFooter: true,
			linkText: 'Terms & Conditions'
		},
		{
			url: `${base}/not-found`,
			displayInNav: false,
			displayInFooter: false,
			linkText: ''
		}
	]
};
