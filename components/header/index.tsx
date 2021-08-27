import Link from "next/link"
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
        <li className={styles.item}><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
    </header>
  )
}
