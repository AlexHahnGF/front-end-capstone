import { ReactComponent as Brand } from '../icons_assets/Logo.svg'
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-logo'>
                    {/* <Brand /> */}
                    ©Little Lemon
                </div>
                <div className='footer-elements'>
                    <ul>
                        <li>
                            <button>Order</button>
                        </li>
                        <li>
                            <button>Reserve</button>
                        </li>
                        <li>
                            <button>Menu</button>
                        </li>
                    </ul>
                </div>
           </div>
       </footer>
    )
}