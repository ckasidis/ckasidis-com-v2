const Logo = () => {
	return (
		<a href="/" className="flex items-center gap-2">
			<img className="w-10 rounded-md" src="/profile.jpeg" />
			<div className="text-xs font-medium text-gray-800">
				<p>Kasidis</p>
				<p>Chantharojwong</p>
			</div>
		</a>
	);
};

export default Logo;
