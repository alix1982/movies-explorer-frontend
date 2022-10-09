import React from 'react';
// import { Link } from 'react-router-dom';
// import foto from '../../../images/foto-student.jpg';

function Footer (props) {
  return (
    <section className="footer">
      <p className="footer__partners">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>
      <div className="footer__nav">
        <p className="footer__copyright">&copy; 2022 Alix</p>
        <ul className="footer__list">
          <li className="footer__point">
            <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li className="footer__point">
            <a className="footer__link" href="https://github.com/alix1982">Github</a>
          </li>
        </ul>
      </div>
      {/* <Link to="/sign-in" className="portfolio__link" ></Link> */}
    </section>
  )
}

export default Footer