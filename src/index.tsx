import ReactDom from "react-dom/client"
import App from "./components/App"

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)
