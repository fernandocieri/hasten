import "./candidature.scss"
import InputField from "@/components/inputField/InputField"

export default function Candidature() {
    return (
        <section id="candidature">
            <h2>REINVENTA EL CINE</h2>
            <form id="candidature-form">
                <InputField label="NOMBRE" type="text" />
                <InputField label="CORREO" type="email" />
                <InputField label="GÉNERO PREFERIDO" type="text" />
                <InputField label="CARTA MOTIVACIÓN" type="text" textarea={true} />
                <button className="candidature-submit" type="submit">¡ENVIAR MI CANDIDATURA!</button>
            </form>
        </section>
    )
}