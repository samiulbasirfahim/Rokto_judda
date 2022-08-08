import { ReactElement } from "react"
import About from "./About"
import Banner from "./Banner"

const Home = (): ReactElement => {
	return (
		<div>
			<Banner />
			<About />
		</div>
	)
}

export default Home
