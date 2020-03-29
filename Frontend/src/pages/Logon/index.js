import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon(){
  return (
    <div className="logon-container">
      <section className="form">
        {/* para puxar a imagem importada */}
        <img src={logoImg} alt="Be the Hero" />
        <form>
          {/* para fazer o login */}
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID"/>
          {/* No javascript não se usa class e sim class name porque class é uma palavra reservada */}
          <button className="button" type="submit">Entrar</button>
          {/* para puxar a pagina de cadastro */}
          <Link className="back-link" to="/register">
            {/* todos esses icones aceitam o tamanho e a cor */}
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>

        </form>
      </section>
      <img src={heroesImg} alt="Heroís"/>
    </div>
  );
}