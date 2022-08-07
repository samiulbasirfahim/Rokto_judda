import { ReactElement } from "react"
import { Link, NavLink } from "react-router-dom"
import ManageRoutes from "../../utils/ManageRoutes"

const Navbar = (): ReactElement => {
	const navBarItem: ReactElement = (
		<>
			<li>
				<NavLink
					className="font-mono rounded-tl-3xl rounded-br-3xl ml-6 font-bold rounded-xl "
					to="/"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className="font-mono rounded-tl-3xl rounded-br-3xl ml-6 font-bold rounded-xl "
					to="/events"
				>
					Events
				</NavLink>
			</li>
			<li>
				<NavLink
					className="font-mono rounded-tl-3xl rounded-br-3xl ml-6 font-bold rounded-xl "
					to="/gallery"
				>
					Gallery
				</NavLink>
			</li>
			<li>
				<NavLink
					className="font-mono rounded-tl-3xl rounded-br-3xl ml-6 font-bold rounded-xl "
					to="/blogs"
				>
					Blogs
				</NavLink>
			</li>
			<li>
				<NavLink
					className="font-mono rounded-tl-3xl rounded-br-3xl ml-6 font-bold rounded-xl "
					to="/contact"
				>
					Contact
				</NavLink>
			</li>
			<li>
				<NavLink
					className="font-mono rounded-tl-3xl rounded-br-3xl ml-6 font-bold rounded-xl"
					// style={({ isActive }) =>
					// 	isActive
					// 		? { backgroundColor: "#c10f4a" }
					// 		: { backgroundColor: "green" }
					// }
					to="/donate"
				>
					Donate ❤
				</NavLink>
			</li>
		</>
	)

	return (
		<div className="drawer drawer-end">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col ">
				<div className=" bg-white">
					<div className="w-full navbar container mx-auto">
						<div className="flex-1 px-2 mx-2">Rokto Judda</div>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal text-black">
								{navBarItem}
							</ul>
						</div>
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
					</div>
				</div>
				<ManageRoutes />
			</div>
			<div className="drawer-side ">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-white pt-16">
					{navBarItem}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
