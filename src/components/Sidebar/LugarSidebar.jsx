import React, { Component } from 'react';
import PointForm from '../Forms/PointForm'
import LugarAPI, {getEndereco} from './Lugares/LugarAPI'
import chat from './chat-image.png'
import happy_face from './happy-face.jpg'
import bored_face from './bored-face.jpg'
import sad_face from './sad-face.png'

import '../../App.css'

export default class LugarSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome : '',
            endereco : '',
            pessoas_chat : 0,
            happy : 0,
            bored : 0,
            sad : 0,
            fotos : [],
            comentarios : [],
        }
        this.fetchLugar(this.props.match.params.id)
    }

    fetchLugar(id) {
        this.fetchEndereco(id)
        LugarAPI(id).then((response) => {
            const lugar = response.data
            this.setState({
                nome : lugar.nome,
            })
        })
    }

    fetchEndereco(id) {
        getEndereco(id).then((endereco) => {
            this.setState({
                endereco : endereco
            })
        })
    }

    render() {
        return (
            <aside className="flex-column-container">
                <article className="flex-column-container">
                    <header>
                        <h3>
                            {this.state.nome}
                        </h3>
                    </header>
                    <section>
                        <h5>
                            {this.state.endereco}
                        </h5>
                    </section>
                    <nav className="flex-light-container">
                        <a>Mudar endereço</a>
                        <a>Deletar ponto</a>
                        <a>Compartilhar</a>
                    </nav>
                </article>

                <article className="flex-normal-container">
                    <img src={chat} height="60" width="80" alt="imagem-chat" />
                    <section className="flex-column-container">
                        <h4>{this.state.pessoas_chat} pessoas no chat</h4>
                        <a>entrar</a>
                    </section>
                </article>

                <article>
                    <header>
                        <h4>Avaliações</h4>
                    </header>
                    <section className="flex-container">
                        <img src={happy_face} height="60" width="80" alt="happy-face" />
                        <p>{this.state.happy}</p>
                        <img src={bored_face} height="60" width="80" alt="bored-face" />
                        <p>{this.state.bored}</p>
                        <img src={sad_face} height="60" width="80" alt="sad-face" />
                        <p>{this.state.sad}</p>
                    </section>
                </article>

                <article>
                    <header>
                        <h4>Minhas Fotos</h4>
                    </header>
                    <section className="centro content-foto">
                        <header>
                            Nenhuma foto inserida
                        </header>
                        <br/>
                        <a>Adicionar nova foto</a>
                    </section>
                </article>

                <article>
                    <header>
                        <h4>Comentários</h4>
                    </header>
                    <section>
                        <main>
                            Nenhum comentário inserido
                        </main>
                    </section>
                </article>

            </aside>
        );
    }
}

