import {
	HiOutlineCodeBracket,
	HiOutlineComputerDesktop,
	HiOutlineDocumentText,
	HiOutlineInbox,
	HiOutlineUser,
} from 'react-icons/hi2';

export const primaryNavItems = [
	{
		name: 'About',
		href: '/',
		icon: HiOutlineUser,
	},
	{
		name: 'Skills',
		href: '/skills',
		icon: HiOutlineCodeBracket,
	},
	{
		name: 'Projects',
		href: '/projects',
		icon: HiOutlineComputerDesktop,
	},
	{
		name: 'Resume',
		href: '/resume',
		icon: HiOutlineDocumentText,
	},
	{
		name: 'Contact',
		href: '/contact',
		icon: HiOutlineInbox,
	},
];
