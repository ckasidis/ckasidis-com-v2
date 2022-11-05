import { primaryNavItems } from '../../data/navigation';
import { classNames } from '../../utils/classNames';
import Logo from '../brand/Logo';

interface DesktopSidebarProps {
	current?: string;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ current }) => {
	return (
		<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
			<div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
				<div className="flex flex-shrink-0 items-center px-4">
					<Logo />
				</div>
				<div className="mt-5 flex flex-grow flex-col">
					<nav className="flex-1 space-y-1 px-2 pb-4">
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
									'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
								)}
							>
								<item.icon
									className={classNames(
										item.href === current
											? 'text-gray-500'
											: 'text-gray-400 group-hover:text-gray-500',
										'mr-3 flex-shrink-0 h-6 w-6'
									)}
									aria-hidden="true"
								/>
								{item.name}
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default DesktopSidebar;
