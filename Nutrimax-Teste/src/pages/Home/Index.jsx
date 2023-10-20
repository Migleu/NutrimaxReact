import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/navbar';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Teste from './teste';
import Feedback from '../Feedback/feedback';
import iconapple from '../../assets/iconApple.svg';
import iconorange from '../../assets/iconOrange.svg';
import orangePNG from '../../assets/orange.svg';




const Home = () => {
    const [comments, setComments] = useState([]);
    const [redirect, setRedirect] = useState(0);
    const [feedback, setFeedback] = useState(0);
    const navigation = useNavigate();

    console.log(comments);

    return (<>
        <Navbar />
        <div id="container_tudo">

            <div className="inicio">
                <div className="container-inicio scrolling-text">
                    <img src={iconapple} alt="" />
                    <h2 >- Atinja seus objetivos com Nutrimax -</h2>
                    <img src={iconapple} alt="" />
                </div>

            </div>

            <div className="container_plano">
                <div className="plano">
                    <h1><span>Atinja seus</span> objetivos com nosso site:</h1>
                    <div className="balao">
                        <h1>01-</h1>
                        <p>Desenhado para si</p>
                    </div>
                    <div className="balao">
                        <h1>02-</h1>
                        <p>Perfil de dieta para você</p>
                    </div>
                    <div className="balao">
                        <h1>03-</h1>
                        <p>Preparação de uma refeição rápida</p>
                    </div>
                </div>
                <div className="img">
                    <img src={orangePNG} alt="" />
                </div>
            </div>
            <hr id="hr" />
            <div className="container_programa">
                <div className="programa_titulo">
                    <h1>Metodologia Nutri<span>Max</span></h1>
                </div>
                <div className="programa_subtitulo">
                    <p>Deixe no passado as tentativas frustradas de ser mais saudável,
                        as dietas mirabolantes e os treinos sem resultados.
                        Confira como funcionam os programas do NutriMax.
                    </p>
                </div>
                <div className="programa">
                    <div className="programa_elementos">
                        <img src="https://cdn-icons-png.flaticon.com/512/815/815128.png" alt="" />
                        <h1>Sem desafios dolorosos</h1>
                        <p>Metodologias e programas são desenvolvidos por uma IA especialista focada em tirar o corpo da
                            estagnação, melhor nutrição, reprogramar o corpo para queimar mais gordura e transformá-la em
                            massa magra.</p>
                    </div>
                    <div className="programa_elementos">
                        <img src="https://cdn-icons-png.flaticon.com/512/977/977451.png" alt="" />
                        <h1>Chegue no seu objetivo</h1>
                        <p>Metodologias e programas são desenvolvidos por uma IA especialista focada em tirar o corpo da
                            estagnação, melhor nutrição, reprogramar o corpo para queimar mais gordura e transformá-la em
                            massa magra.</p>
                    </div>
                    <div className="programa_elementos">
                        <img src="https://cdn-icons-png.flaticon.com/256/606/606534.png" alt="" />
                        <h1>melhore seu jeito de viver</h1>
                        <p>Metodologias e programas são desenvolvidos por uma IA especialista focada em tirar o corpo da
                            estagnação, melhor nutrição, reprogramar o corpo para queimar mais gordura e transformá-la em
                            massa magra.</p>
                    </div>
                </div>
                <button id="programa_btn">Conheça nossos programas</button>
            </div>

            <div className="container_feedback">
                <h2>Observe alguns Feedbacks feitos para nosso site!</h2>
                <div className="feedback">
                    {
                        comments?.map((item, index) => (
                            <div class="feedback_elemento" key={index}>
                                <div class="feedback_user">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                        alt="" />
                                    <h3>Roger Santos</h3>
                                </div>
                                <p>{item}</p>
                                <img id="stars" src="https://www.tecnonutri.com.br/campanha/15em3/img/tecnonutri/fivestars.png"
                                    alt="" />
                            </div>
                        ))
                    }
                    <button className="buttonFeedback" onClick={() => setFeedback(1)}>Dar meu feedback</button>
                </div>
            </div>
        </div>




        <Footer />
        {feedback == 1 && <Feedback comments={comments} setcomment={setComments} />}


    </>);
}

export default Home;

{/* <Navbar setredirect={setRedirect} />
{redirect == 0 && <InicioHome />}
{redirect == 1 && <Dieta />}
{redirect == 2 && <Dieta />}
{redirect == 3 && <Dieta />} */}