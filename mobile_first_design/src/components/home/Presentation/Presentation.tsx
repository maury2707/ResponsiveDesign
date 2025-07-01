import styles from "./Presentation.module.sass";
export const Presentation = () => {
    return(
      <div>
        <div className={styles.Containers}>
          <p>
            <strong>¡Bienvenido a Navalu!</strong>
          </p>
          <p>
            Nosotros somos Navalu, una empresa dedicada a la venta de productos de repostería y panadería.
            <br />
            Contamos con una amplia variedad de productos, desde ingredientes básicos hasta utensilios especializados.
            <br />
            Nuestro objetivo es ofrecer a nuestros clientes la mejor calidad y servicio, para que puedan disfrutar de la experiencia de cocinar y hornear.
            <br />
            ¡Explora nuestro catálogo y descubre todo lo que tenemos para ofrecerte!
            <span> Droplist </span>
          </p>
        </div>
        <div className={styles.Containers}> 
          <p>
            <strong>¡Estos son nuestros productos!</strong>
          </p>
          <ul className={styles.ProductList}>
            <li>Cupcakes</li>
            <li>Galletas</li>
            <li>Pasteles</li>
            <li>Panadería</li>
          </ul>
        </div>
      </div>
    )
}