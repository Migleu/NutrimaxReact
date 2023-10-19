import React from 'react';
import './login.css';



const Login = () => {
    return ( <>
    <main>
     <div className="login-container" id="login-container">
            <div className="form-container">
                <form className="form form-login" action="bancoLogin.php" method="post">
                    <a href="./">Voltar</a>
                    <h2 className="form-title">Entrar com</h2>
                    <div className="form-social">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <p className="form-text">ou utilize sua conta</p>
                    <div className="form-input-container">
                        <input name="email" type="email" className="form-input" placeholder="Email"/>
                        <input name="senha" type="password" className="form-input" placeholder="Senha"/>
                    </div>
                    <a href="#" className="form-link">Esqueceu a senha?</a> 
                    <button type="button" className="form-button" id="btn-login">Logar</button>
                    <p className="mobile-text">
                        Não tem conta?
                        <a href="#" id="open-register-mobile">Registre-se</a>
                    </p>
                </form>
                <form className="form form-register">
                    <a href="./">Voltar</a>
                    <h2 className="form-title">Criar Conta</h2>
                    <div className="form-social">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <p className="form-text">ou cadastre seu email</p>
                    <div className="form-input-container">
                        <input name="nome" type="text" className="form-input" placeholder="Nome" />
                        <input name="email" type="email" className="form-input" placeholder="Email"/>
                        <input name="senha" type="password" className="form-input" placeholder="Senha"/>
                    </div>
                    <button type="button" className="form-button" id="btn-cadastrar">Cadastrar</button>
                    <p className="mobile-text">
                        Já tem conta?
                        <a href="#" id="open-login-mobile">Login</a>
                    </p>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <h2 className="form-title form-title-light">Já tem conta?</h2>
                    <p className="form-text">Faça o login em sua conta ja existente</p>
                    <button className="form-button form-button-light" id="open-login">Entrar</button>
                </div>
                <div className="overlay">
                    <h2 className="form-title form-title-light">Ops!</h2>
                    <p className="form-text">Cadastre-se e tenha acesso a todos os beneficios do nosso site</p>
                    <button className="form-button form-button-light" id="open-register">Cadastrar</button>
                </div>
            </div>
        </div>
        </main>
    </> );
}
 
export default Login;