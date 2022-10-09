import React from 'react';
// import { Link } from 'react-router-dom';
// import foto from '../../../images/foto-student.jpg';

function Portfolio (props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__point">
          <p className="portfolio__text">Статичный сайт</p>
          <a className="portfolio__link" href="https://github.com/alix1982/how-to-learn"></a>
        </li>
        <li className="portfolio__point">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a className="portfolio__link" href="https://github.com/alix1982/russian-travel"></a>
        </li>
        <li className="portfolio__point">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a className="portfolio__link" href="https://github.com/alix1982/react-mesto-api-full"></a>
        </li>
      </ul>
      {/* <Link to="/sign-in" className="portfolio__link" ></Link> */}
    </section>
  )
}

export default Portfolio