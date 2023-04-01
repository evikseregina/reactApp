import logo from './logo.svg';
import './App.css';
import { Contacts } from './contacts';

export default function App() {
  return (
    <>
      <div class="all">
        <header class="header"> <a class="header__logo" href="index.html">
          <img class="header__image1" src="img/logo.svg" alt="logotype" /> </a>
          <nav class="header__nav" />
          <ul class="header__menu">
            <li class="header__menu-list"><a class="header__menu-link " href="index.html">Главная</a>
            </li>
            <li class="header__menu-list"><a class="header__menu-link" href="students.html">Студенты</a></li>
            <li class="header__menu-list"><a class="header__menu-link" href="about.html">О курсе</a></li>
            <li class="header__menu-list"><a class="header__menu-link header__menu-link_active"
              href="contacts.html">Контакты</a></li>
          </ul>
          <nav />
          <a class="header__button" href="#">Войти</a>
        </header>
        <div class="main">
          <main class="main__content-contacts" />
          <h1 class="main__heading-contacts">Как нас найти </h1>
          <div class="main__map-contacts"><iframe class="main__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511634.70962970407!2d29.534289435013047!3d59.93922591096038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1677008804773!5m2!1sru!2sru"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          <Contacts />
        </div>
      </div>
      <footer class="footer">
        <p class="footer__text">2023 &copy; <a class="footer__work-centr" href="#">учебный центр</a></p>
      </footer>
    </>);
}
