import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import { primaryNavItems } from '../../data/navigation';
import { classNames } from '../../utils/classNames';
import Logo from '../brand/Logo';

interface MobileSidebarProps {
	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	current?: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
	sidebarOpen,
	setSidebarOpen,
	current,
}) => {
	return (
		<Transition.Root show={sidebarOpen} as={React.Fragment}>
			<Dialog
				as="div"
				className="relative z-40 lg:hidden"
				onClose={setSidebarOpen}
			>
				<Transition.Child
					as={React.Fragment}
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</Transition.Child>

				<div className="fixed inset-0 z-40 flex">
					<Transition.Child
						as={React.Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
							<Transition.Child
								as={React.Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										type="button"
										className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<HiXMark
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Transition.Child>
							<div className="flex flex-shrink-0 items-center px-4">
								<Logo />
							</div>
							<div className="mt-5 h-0 flex-1 overflow-y-auto">
								<nav className="space-y-1 px-2">
									{primaryNavItems.map((item) => (
										<a
											key={item.name}
											href={item.href}
											target={item.newTab ? '_blank' : undefined}
											rel={item.newTab ? 'noopener noreferrer' : undefined}
											className={classNames(
												item.href === current
													? 'bg-gray-100 text-gray-900'
													: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
												'group flex items-center px-2 py-2 text-base font-medium rounded-md'
											)}
										>
											<item.icon
												className={classNames(
													item.href === current
														? 'text-gray-500'
														: 'text-gray-400 group-hover:text-gray-500',
													'mr-4 flex-shrink-0 h-6 w-6'
												)}
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</nav>
							</div>
						</Dialog.Panel>
					</Transition.Child>
					<div className="w-14 flex-shrink-0" aria-hidden="true">
						{/* Dummy element to force sidebar to shrink to fit close icon */}
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default MobileSidebar;
