import { PropsWithChildren, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import DesktopSidebar from '../navigation/DesktopSidebar';
import MobileSidebar from '../navigation/MobileSidebar';

interface NavLayoutProps extends PropsWithChildren {
	current?: string;
}

const NavLayout: React.FC<NavLayoutProps> = ({ current, children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div>
			<MobileSidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				current={current}
			/>
			<DesktopSidebar current={current} />
			<div className="flex flex-1 flex-col lg:pl-64">
				<div className="sticky top-0 z-10 bg-white pl-1 py-1 sm:pl-3 sm:py-2 lg:hidden">
					<button
						type="button"
						className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<HiBars3 className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<main className="flex-1">
					<div className="py-6">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							{children}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default NavLayout;
