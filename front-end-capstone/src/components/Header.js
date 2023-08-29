import '../styles/header.css'
import headerImg from '../icons_assets/restauranfood.jpg'

export default function Header() {
    return (
        <header className='main-header'>
            <div></div>
            <section className='header-text-section'>
                <h1 className='header-title display-title'>
                    Little Lemon
                </h1>
                <h2 className='header-text subtitle'>
                    Chicago
                </h2>
                <h3 className='header-text description'>
                    We are a family owned mediterranean restaurant,
                    focused on tranditional recipes served with a modern twist.
                </h3>
            </section>
            <div className='header-foto'>
                <img src={headerImg} alt='image with food' />
            </div>
            <div></div>
        </header>
    )
}