import { ReactElement } from "react"
import { Link } from "react-router-dom"
const bloodDrop = require("../../../assets/images/bloodDrop.png")

const Banner = (): ReactElement => {
	return (
		<div className="banner-height w-full banner-image">
			<div className="h-full w-full bg-black/70 backdrop-blur">
				<div className="container mx-auto flex justify-between items-center h-full w-full">
					<div className="w-2/3">
						<h1 className="text-7xl text-white font-mouse">
							Be the reason for someone's heartbeat
						</h1>
						<Link
							to="/donate"
							className="btn rounded-none px-8 bg-red-500 font-bold text-2xl font-mono hover:bg-red-900 hover:text-black mt-4"
						>
							Donate
						</Link>
					</div>
					{/* <div className="w-1/2 flex justify-center items-center">
						<img
							src={bloodDrop}
							alt=""
							className="max-w-xs pointer-events-none"
						/>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Banner
