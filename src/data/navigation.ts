import {
	HiOutlineCheckBadge,
	HiOutlineCodeBracket,
	HiOutlineComputerDesktop,
	HiOutlineDocumentText,
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
		name: 'Awards',
		href: '/awards',
		icon: HiOutlineCheckBadge,
	},
	{
		name: 'Resume',
		href: '/resume',
		icon: HiOutlineDocumentText,
	},
];
