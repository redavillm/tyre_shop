import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  StyledContactForm,
  StyledContacts,
  StyledIcons,
  StyledMap,
} from "./StyledContacts";

export const Contacts = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Как связаться с нами?</h1>
        <StyledContacts>
          <div>
            <span>
              <h4>Нам можно позвонить:</h4>
              <a href="/">+7(981)122-23-444</a>
            </span>
            <span>
              <h4>Или нам можно написать на почту:</h4>
              <a href="/">info@tyre-shop.ru</a>
            </span>
            <h4>Так же можно воспользоваться мессенджером:</h4>
            <StyledIcons>
              <Link to="/contacts">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </Link>
              <Link to="/contacts">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </Link>
            </StyledIcons>
            <span>
              <h4>Наш адрес:</h4>
              <Link to="https://yandex.com/maps/-/CDRBqMKR">
                Санкт-Петербург, ул. Фучика 74 корпус 3
              </Link>
            </span>
            <StyledMap>
              <a href="https://yandex.com/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps">
                Saint Petersburg
              </a>
              <a href="https://yandex.com/maps/2/saint-petersburg/?ll=30.384783%2C59.882728&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=30.382703%2C59.883020&whatshere%5Bzoom%5D=18.5&z=17.65">
                Fuchika Street, 12к1В — Yandex Maps
              </a>
              <iframe
                title="map"
                src="https://yandex.com/map-widget/v1/?ll=30.384783%2C59.882728&mode=whatshere&whatshere%5Bpoint%5D=30.382703%2C59.883020&whatshere%5Bzoom%5D=18.5&z=17.65"
                width="560"
                height="400"
                frameBorder="1"
                allowFullScreen={true}
              />
            </StyledMap>
          </div>
          <StyledContactForm>
            <form>
              <h4>Форма обратной связи</h4>
              <label>Ваше имя:</label>
              <br />
              <input type="text" placeholder="Имя" />
              <br />
              <label>Ваша контактная почта:</label>
              <br />
              <input type="text" placeholder="Почта" />
              <br />
              <label>Сообщение:</label>
              <br />
              <textarea
                name="feedback"
                rows="5"
                cols="50"
                placeholder="Напишите ваше сообщение тут."
              ></textarea>
            </form>
          </StyledContactForm>
        </StyledContacts>
      </div>
    </>
  );
};
