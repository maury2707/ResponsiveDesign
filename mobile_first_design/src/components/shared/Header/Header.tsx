import styles from "./Header.module.sass";
import Image from "next/image";

export const Header = () => {
    return(
      <header className={styles.header}>
        <h1>¡Navalu!</h1>
        <nav>
            <a href="">Quienes somos!</a>
            <a href="">Servicios!</a>
            <a href="">Productos!</a>
            
            <Image
              src="/icons/cart-plus-svgrepo-com.svg"
              alt="Logo de Navalu"
              width={25}
              height={25}
            />
        </nav>
      </header>
    )
}