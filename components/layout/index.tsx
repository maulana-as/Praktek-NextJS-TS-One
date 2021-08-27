import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import styles from './Layout.module.css'

interface ILayout {
  children: ReactNode
}

export default function Layout(props: ILayout) {
  const { children } = props
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}