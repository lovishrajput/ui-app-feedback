
import { Link } from "react-router-dom"
import Card from "../shared/Card"
function AboutPage(){
    return(
        <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React App to leave feedback for a product or service</p>
            About
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
        </Card>
    )
}
export default AboutPage