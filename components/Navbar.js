import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li className='first-item'>
                    <Link href='/'>Top Picks</Link>
                </li>
                <li>
                    <Link href='/rice'>Rice/Mixes</Link>
                </li>
                <li>
                    <Link href='/bread'>Bread/Carbs</Link>
                </li>
                <li>
                    <Link href='/carnivore'>Carnivore</Link>
                </li>
                <li>
                    <Link href='/healthy'>Healthy</Link>
                </li>
                <li className='last-item'>
                    <Link href='/snacks'>Snacks</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar