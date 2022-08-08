import { ReactElement } from "react"
import { Link } from "react-router-dom"

const Banner = (): ReactElement => {
	return (
		<div className="banner-height w-full banner-image">
			<div className="h-full w-full bg-black/70 backdrop-blur">
				<div className="container mx-auto flex justify-between items-center h-full w-full">
					<div className="lg:w-2/3 w-full px-4">
						<h1 className="lg:text-7xl text-4xl text-white font-mouse mb-6">
							Be the reason for someone's heartbeat
						</h1>
						<Link
							to="/donate"
							className="btn btn-primary rounded-none"
						>
							Donate
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
