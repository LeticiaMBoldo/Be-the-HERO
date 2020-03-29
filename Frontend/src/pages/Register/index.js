import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Register(){
  return (
    <div className="register-container">
      <div className="content">
        <section>
          {/* logo */}
          <img src={logoImg} alt="Be The Hero"/>
          {/* informações sobre o cadastro */}
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          {/* voltar para a pagina anterior, nesse caso Logon */}
          <Link className="back-link" to="/">
            {/* todos esses icones aceitam o tamanho e a cor */}
            <FiArrowLeft size={16} color="#E02041"/>
            Já tenho Cadastro
          </Link>

        </section>
        <form >
          <input placeholder="Nome da Ong"/>
          <input type="email" placeholder="E-mail"/>
          <input placeholder="WhatsApp"/>

          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{width: 80}}/>
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>

  );
}