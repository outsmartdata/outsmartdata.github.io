import Image from 'next/image'
import styles from '../../styles/header.module.css'
import logo from '../../public/images/OutsmartDataLogo.svg'


export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <Image src={logo} alt="Outsmart Data" className={styles.logo}/>
            </div>
        </header>
                    )
}