import Logo from '../icons_assets/Logo.svg'

export default function Head() {
    return (
        <head>
            <meta name="description" content="Little lemon is a charming neighborhood bistro"/>
            <meta name="og:title" content="Little Lemon bistro"/>
            <meta name="og:description" content="Little lemon is a charming neighborhood bistro"/>
            <meta name="og:image" content={Logo}/>
        </head>
    )
}
