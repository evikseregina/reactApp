import logo from './logo.svg';
import './App.css';
import { Header } from './header';

export default function App() {
  return (
    <>
      <div class="all">
        <Header />
        <section class="section">
          <div class="section__info">
            <form class="section__form" action="login" method="post">
              <h2 class="section__title">Войти на сайт</h2>
              <p class="section__login"><input class="section__log" type="text" placeholder="Логин" required />
              </p>
              <p class="section__password"><input class="section__password2" type="password" placeholder="Пароль"
                required />
              </p>
              <button type="submit" class="section__btn section__btn-login">Войти</button>
            </form>
          </div>
        </section>
        <div class="main">
          <main class="main__content">
            <h1 class="main__title">Добро пожаловать на курс “Создание веб-сайтов (HTML, CSS)”!</h1>
            <img class="main__image" src="img/contentphoto.jpg" alt="Главное фото" />
            <div class="main__content-info">
              <div class="main__content-section">
                <div class="main__content-article">
                  <h3 class="main__subtitle">Для кого этот курс</h3>
                  <p class="main__about-text">Этот курс рассчитан на новичков, которые только начинают
                    знакомство
                    с
                    веб-разработкой. В начале курса вы узнаете о том, как устроен Интернет и веб-сайты.</p>
                  <p class="main__about-text">Для обучения необходимо только владеть компьютерной грамотностью
                    (пользоваться браузером, создавать папки и файлы, устанавливать программы).</p>

                </div>

                <div class="main__content-article">
                  <h3 class="main__subtitle">Чему вы научитесь</h3>
                  <p class="main__about-text ">На этом курсе вы узнаете, как устроены веб-сайты и как
                    создавать
                    их с нуля.
                    Изучите основы языков <strong>HTML</strong> ,<strong>CSS</strong> и немного
                    <strong>JavaScript</strong>. Мы вместе сверстаем сайт нашей группы по этому
                    макету. А затем вы <em class="main__detail">сами</em> сверстаете свои личные странички в
                    качестве
                    домашнего задания и
                    мы
                    выложим
                    все это на сервер.
                  </p>
                </div>
              </div>
              <h2 class="main__heading">“Учимся вместе!”</h2>
            </div>
          </main>
        </div>
      </div>
      <footer class="footer">
        <p class="footer__text">2023 &copy; <a class="footer__work-centr" href="#">учебный центр</a></p>
      </footer>
      {/* { <script>
    const buttonEl = document.querySelector('.header__button');
    const blockPopup = document.querySelector('.section');
    const secondButton = document.querySelector('.section__btn');

    buttonEl.addEventListener('click', function (e) {
        blockPopup.classList.toggle('visible');
    });
    secondButton.addEventListener('click', () => {
        blockPopup.classList.toggle('visible');
    });
</script> } */}

    </>

  );
}
