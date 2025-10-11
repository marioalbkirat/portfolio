import { Link } from "react-router-dom";
import Image from "./images.png"
const NotFound = () => {
    return (
        <section id="page-404" className=" d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
            <div className="d-flex flex-column align-items-center">
                <img src={Image} alt="NotFound" />
                <h3 className="mb-2 text-uppercase">page not found </h3>
                <Link style={{ borderRadius: "10px" }} className='text-white bg-info px-5 py-2 mt-2 text-decoration-none text-capitalize' to="/portfolio">go back to home</Link>
            </div>
        </section>
    )
}
export default NotFound;