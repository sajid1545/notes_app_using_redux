import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<nav className="w-full mb-20 bg-[url('/src/assets/images/low-poly-grid-haikei.png')] text-white p-6">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative ">
					<ul className="  items-center justify-center hidden space-x-8 lg:flex">
						<div className="flex gap-20 text-2xl font-extrabold">
							<Link to="/">All Notes</Link>

							<Link to="/add-notes">Add Notes</Link>
						</div>
					</ul>
					<div className="lg:hidden flex justify-end">
						<button
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => setIsMenuOpen(true)}>
							<FaBars className="text-2xl" />
						</button>
						{isMenuOpen && (
							<div className="absolute top-[-40px] left-[-39px]  w-full h-screen">
								<div className="p-5 w-screen h-screen bg-[url('/src/assets/images/low-poly-grid-haikei.png')] rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div className="flex justify-end w-full">
											<button
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}>
												<AiOutlineClose className="w-14 h-10" />
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<div className="flex flex-col space-y-10 text-center text-xl font-bold">
												<Link to="/">All Notes</Link>

												<Link to="/add-notes">Add Notes</Link>
											</div>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
