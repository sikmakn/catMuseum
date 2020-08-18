import './buy.scss';
import React from 'react';
import Header from '../../components/Header';

const Buy: React.FC = () => (
    <>
        <Header isDarkPageArr={[false]}/>
        <div className="buy-container">
            <h2>Финансовая поддержка музея</h2>
            <div className="content-container">
                <div className="remittance">
                    <h3>Денежный перевод <br/>на благотворительный счет</h3>
                    <p>Музей будет вам благодарен за любую оказанную помощь (кормами, кошачьими принадлежностями,
                        приобретением билетов). Мы принимаем денежные пожертвования, которые полностью будут потрачены
                        на улучшение условий жизни бездомных животных. Сделать такое пожертвование можно с помощью
                        сервисов:</p>
                    <div className="payments">
                        <a href="https://yasobe.ru/na/catmuseumby"><img src="yandex-pay-logo.svg" alt="яндекс"/></a>
                        <a href="https://qiwi.me/catmuseumby"><img src="qiwi-pay-logo.svg" alt="Qiwi"/></a>
                        <a href="https://www.patreon.com/bePatron?u=32421712">
                            <img src="patreon-logo.svg" alt="патреон"/>
                        </a>
                    </div>
                    <span>а также наших WebMoney-счетов:</span>
                    <span className="bank-account">B693541992499</span>
                    <span className="bank-account">Z445284634467</span>
                </div>
                <div className="buy-ticket">
                    <h3>Приобретение билетов</h3>
                    <p>Музей Кота направляет часть средств от продажи входных билетов на благотворительную помощь
                        бездомным животным. Билеты действительны в течение года с момента приобретения. Приобрести билет
                        можно через систему “Расчёт” (ЕРИП), в любом удобном для вас месте: интернет-банкинге,
                        М-банкинге, инфокиоске, банковской кассе и т.д. Для проведения платежа необходимо выбрать
                        следующие пункты меню:</p>
                    <div className="guide">
                        <img src="long-arrow-black-down.svg" alt=""/>
                        <div>
                            <span>Система “Расчёт” (ЕРИП)</span>
                            <span>Туризм и отдых</span>
                            <span>Активный отдых, развлечения</span>
                            <span>Минск</span>
                            <span>АртФокус — Музей Кота</span>
                        </div>
                    </div>
                    <div className="price">
                        <img src="price-star-logo.svg" alt=""/>
                        <span>дети и студенты: 8 рублей <br/>
                        взрослые: 10 рублей</span>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Buy;