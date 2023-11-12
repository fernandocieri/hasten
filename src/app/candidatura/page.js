import CandidatureForm from "./CandidatureForm";

const metaTitle = "Participa en HASTEN | Envía tu Candidatura como Filmmaker";
const metaDescription = "¿Eres filmmaker y quieres desafiar tus límites? Presenta tu candidatura para ser parte del próximo ciclo de HASTEN. Rellena el formulario, comparte tu visión y únete a nuestro laboratorio fílmico."
export const metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
  }
}

export default function Candidature() {


  return (
    <section id="candidature">
      <h2 className='main-title'>REINVENTA EL <span className='basteleur'>C</span>INE</h2>
      <CandidatureForm />
    </section>
  );
}