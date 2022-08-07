import { ReactElement } from "react"
import { Link } from "react-router-dom"
import ManageRoutes from "../../utils/ManageRoutes"

const Navbar = (): ReactElement => {
	const navBarItem: ReactElement = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/">Events</Link>
			</li>
			<li>
				<Link to="/">Gallery</Link>
			</li>
			<li>
				<Link to="/">Blog</Link>
			</li>
			<li>
				<Link to="/">Contact</Link>
			</li>
			<li>
				<Link to="/">Donate</Link>
			</li>
		</>
	)

	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col container mx-auto">
				<div className="w-full navbar">
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
					<div className="flex-1 px-2 mx-2">Navbar Title</div>
					<div className="flex-none hidden lg:block">
						<ul className="menu menu-horizontal">{navBarItem}</ul>
					</div>
				</div>
				<ManageRoutes />
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
					{navBarItem}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
