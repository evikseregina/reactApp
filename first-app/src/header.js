import { Button } from "./button"
export function Header() {
    return { 
    <>
        < header class="header" > <a class="header__logo" href="index.html">
            <img class="header__image1" src="img/logo.svg" alt="logotype" /> </a>
            <nav>
                <ul class="header__menu">
                    <li class="header__menu-list"><a class="header__menu-link header__menu-link_active"
                        href="index.html">Главная</a></li>
                    <li class="header__menu-list"><a class="header__menu-link" href="students.html">Студенты</a></li>
                    <li class="header__menu-list"><a class="header__menu-link" href="about.html">О курсе</a></li>
                    <li class="header__menu-list"><a class="header__menu-link" href="contacts.html">Контакты</a></li>
                </ul>
                <Button />
            </nav>
        </ header>
    </>


}
}