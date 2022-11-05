import {
	SiAmazonaws,
	SiDocker,
	SiEthereum,
	SiFlutter,
	SiGo,
	SiReact,
} from 'react-icons/si/index';

export const skills = [
	{
		name: 'Front End',
		description:
			'HTML, CSS, Sass, JavaScript, TypeScript, React, Next.js, Tailwind, Chakra UI',
		icon: SiReact,
	},
	{
		name: 'Back End',
		description:
			'Go, Node.js, Python, Java, C#, PostgreSQL, MySQL, MongoDB, GraphQL, Firebase',
		icon: SiGo,
	},
	{
		name: 'Web3',
		description:
			'Ethers.js, Solidity, Hardhat, OpenZeppelin, Hyperledger Fabric, IPFS',
		icon: SiEthereum,
	},
	{
		name: 'Mobile',
		description:
			'Xcode, Android Studio, Dart, Flutter, React Native, Expo, NativeBase',
		icon: SiFlutter,
	},
	{
		name: 'DevOps',
		description:
			'Linux, Docker, Kubernetes, Git, GitHub, CI/CD, Test Driven Development',
		icon: SiDocker,
	},
	{
		name: 'Cloud',
		description:
			'AWS, Google Cloud Platform, Microsoft Azure, Vercel, Fly.io, Cloudflare',
		icon: SiAmazonaws,
	},
];
