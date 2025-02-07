import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"

function Loggin() {
    return (
        <main>
            <section>
                <img src={Capa} alt="Capa" />
            </section>


            <section>
                <img src={Logo} alt="Logo da Wilson Sons" />
                <h1> Boas vindas ao Novo Portal SISPAR</h1>
                <p>Sistena de Emissão de Boletos e Parcelas</p>

                <form action="">
                    <input type="email" name="email" id="email" placeholder="E-mail" />
                    <input type="password" name="password" id="password" placeholder="Eenha" />
                    <a href="">Esqueci a senha</a>

                </form>
                <div>
                    <button></button>
                </div>
            </section>
        </main>
    )
}

export default Loggin 