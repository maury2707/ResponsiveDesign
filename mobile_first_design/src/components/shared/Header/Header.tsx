import styles from "./Header.module.sass";
export const Header = () => {
    return(
      <header className={styles.header}>
        <h1>¡Navalu!</h1>
        <nav>
            <a href="">Quienes somos!</a>
            <a href="">Servicios!</a>
            <a href="">Productos!</a>

            <img src="a" alt="Imagen de carrito" />
        </nav>
      </header>
    )
}