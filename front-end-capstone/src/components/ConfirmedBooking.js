import { useNavigate } from "react-router-dom";
import { SuccessSVG } from "../svg/FormSVG";
import '../styles/confirmedBooking.css'


export default function ConfirmedBooking() {
    const navigate = useNavigate();

    return (
        <section className="center-section">
            {/* // style={{ textAlign: 'center', width: 'max-content', margin: 'auto', border: "1px solid var(--primary-green)", height: "100vh" }}> */}
            <SuccessSVG />
            <h1 className="section-title">We got your reservation.</h1>
            <p  className="paragraph">Please check your email for booking details.
            </p>
            <button aria-label="back to main" title="Go back to Little Lemon" style={{ marginTop: '75px' }} className="lead-text yellow-rounded" onClick={() => navigate('/')}>Go home</button>
        </section>
    )
};