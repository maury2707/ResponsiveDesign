import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import { Presentation } from "../components/home/Presentation";

export default function Home() {
  return (
    <div>
      <Header/>
      <main >
      <Presentation/>
        
      </main>
      <Footer/> 
    </div>
  );
}