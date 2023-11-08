import React, { useState } from 'react';
import iconGoogle from '../../assets/iconGoogle.svg';
import iconFacebook from '../../assets/iconFacebook.svg';
import iconLinkedin from '../../assets/iconLinkedin.svg';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import imgSorriso from "../../assets/sorriso.webp"


const Login = () => {
    const [state, setState] = useState(0)  
    const navigation = useNavigate();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/", {
                email: email,
                password: senha,
            });

            if (response.data?.athenticated) {
                navigation("/");
            }
            
        }  catch (error) {
            if (error?.response?.status == 401) {
                alert("Email ou Senha incorreto! Tente novamente.");
                return;
            }

            alert("Ocorreu um erro inesperado!");
        }
    }


    const handleSubmitRegister = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/", {
                email: email,
                password: senha,
                idade: idade,
            });

            setLoading(false);

            if (response.data?.athenticated) {
                alert("Login feito com sucesso");
            }
            
        }  catch (error) {
            if (error?.response?.status == 401) {
                alert("Email ou Senha incorreto! Tente novamente.");
                return;
            }

            alert("Ocorreu um erro inesperado!");
        } finally {
            setLoading(false);
        }
    };


    return ( <>

    <main>
        {loading && <img src={imgSorriso} />}
     <div className={`login-container ${ state == 1 && 'move'}`} id="login-container">
            <div className="form-container">

                <form onSubmit={(event) => handleSubmitLogin(event)} className="form form-login">
                    <a href="./">Voltar</a>
                    <h2 className="form-title">Entrar<span> com</span></h2>
                    <div className="form-social">
                        <a href="#" className="social-icon">
                            <img src={iconFacebook} alt="" />
                        </a>
                        <a href="#" className="social-icon">
                            <img src={iconGoogle} alt="" />
                        </a>
                        <a href="#" className="social-icon">
                        <img src={iconLinkedin} alt="" />
                        </a>
                    </div>
                    <p className="form-text">ou utilize sua conta</p>

                    <div className="form-input-container">
                        <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-input" placeholder="Email"/>
                        <input onChange={(e) => setSenha(e.target.value)} name="senha" type="password" className="form-input" placeholder="Senha"/>
                    </div>

                    <a href="#" className="form-link">Esqueceu a senha?</a> 
                    <button type="submit" className="form-button" id="btn-login">Logar</button>


                    <p className="mobile-text">
                        Não tem conta?
                        <a href="#" onClick={() => setState(state => !state)} >Registre-se</a>
                    </p>
                </form>
                
                <form className="form form-register"  onSubmit={(event) => handleSubmitRegister(event)}>
                    <a href="./">Voltar</a>
                    <h2 className="form-title"><span>Criar</span> Conta</h2>
                    <div className="form-social">
                    <a href="#" className="social-icon">
                            <img src={iconFacebook} alt="" />
                        </a>
                        <a href="#" className="social-icon">
                            <img src={iconGoogle} alt="" />
                        </a>
                        <a href="#" className="social-icon">
                        <img src={iconLinkedin} alt="" />
                        </a>
                    </div>
                    <p className="form-text">ou cadastre seu email</p>
                    <div className="form-input-container">
                        <input  type="text" className="form-input" placeholder="Nome" />
                        <input  type="email" className="form-input" placeholder="Email"/>
                        <input  type="password" className="form-input" placeholder="Senha"/>
                    </div>
                    <button type="button" className="form-button" id="btn-cadastrar">Cadastrar</button>
                    <p className="mobile-text">
                        Já tem conta?
                        <a href="#" onClick={() => setState(state => !state)}>Login</a>
                    </p>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <h2 className="form-title form-title-light">Já tem conta?</h2>
                    <p className="form-text">Faça o login em sua conta ja existente</p>
                    <button className="form-button form-button-light" onClick={() => setState(state => !state)}>Entrar</button>
                </div>
                <div className="overlay">
                    <h2 className="form-title form-title-light">Ops!</h2>
                    <p className="form-text">Cadastre-se e tenha acesso a todos os beneficios do nosso site</p>
                    <button className="form-button form-button-light" onClick={() => setState(state => !state)}>Cadastrar</button>
                </div>
            </div>
        </div>
        </main>
    </> );
}
 
export default Login;   