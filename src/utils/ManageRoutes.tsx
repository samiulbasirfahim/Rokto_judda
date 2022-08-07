import { ReactElement } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../components/pages/home/Home"

const ManageRoutes = (): ReactElement => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default ManageRoutes
