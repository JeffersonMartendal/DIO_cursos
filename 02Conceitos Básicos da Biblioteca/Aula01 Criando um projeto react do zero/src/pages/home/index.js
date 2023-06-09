import { Header } from "../../components/Header"
import background from '../../assets/background.png'

import './styles.css'

function App() {
    return <div className="App">
        <Header />
        <div className="conteudo">
            <img src={background} className="background" alt="background app"/>
            <div className="info">
            <div>
                <input name="usuario" placeholder="@username" />
                <button>Buscar</button>
            </div>
            <div className="perfil">
                <img src="https://avatars.githubusercontent.com/u/55723528?v=4" className="profile" alt="imagen de perfil"/>
                <div>
                    <h3>Jefferson Martendal</h3>
                    <span>@jeffersonmartendal</span>
                    <p>Descrição</p>
                </div>
            </div>
            <hr />
            </div>
        </div>
    </div>
}

export default App