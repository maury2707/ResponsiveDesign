import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import 'app/sass/globals.sass'

export default function Home() {
  return (
    <div>
      <Header/>
      <main >
        <p>Plain text</p>
      </main>
      <Footer/> 
    </div>
  );
}
