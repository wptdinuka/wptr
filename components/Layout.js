import { Children } from 'react'
import { Navbar } from './Navbar'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <h1  className={styles.title}>
                <a href="/" >
                WPT RECIPE
                </a>
                </h1>
            <Navbar/>
            <main className={styles.main}>{children}</main>
            
      

      <footer className={styles.footer}>
         
      © Copyrights 2021
       
      </footer>
            
        </div>
    )
}

export default Layout