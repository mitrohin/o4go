import { img645Dcb5EDe3A42E28Da8Feba7D1F2E46, imgE03B81Df852245A787Cc6F2D65Da03661, imgPngtreeWhatsappPhoneIcon9015282 } from "./images";

export default function PriceDeliverySection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-0 bg-[#fffefb] overflow-x-hidden mb-14">
      {/* Присоединяйтесь! */}
      <div className="w-full max-w-[1280px] mx-auto mb-32 pl-0">
        <h2 className="font-playfair italic text-[32px] sm:text-[64px] text-[#000] leading-tight text-center">
          Присоединяйтесь!
        </h2>
      </div>
      {/* Первый блок: стоимость меню */}
      <div className="flex flex-col md:flex-row gap-0 items-center w-full max-w-[1200px] mx-auto">
        {/* Картинка слева */}
        <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 h-[320px] md:h-[625px] bg-center bg-cover flex-shrink-0" style={{ backgroundImage: `url('${imgE03B81Df852245A787Cc6F2D65Da03661}')` }} />
        {/* Текст справа */}
        <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 flex flex-col justify-center mt-8 md:mt-0 md:ml-8 px-4 md:px-10 pb-8 md:pb-0">
          <div className="font-poiret text-[32px] text-[#000] mb-24 leading-tight">Стоимость меню<br />22 800</div>
          <div className="font-montserrat text-[16px] md:text-[20px] text-[#000] leading-normal mb-2">Меню включает 5 дней основной диеты и 2 дополнительных дня для плавного выхода.<br /><br />В пределах МКАД доставка осуществляется бесплатно.<br /><br />Стоимость доставки за МКАД:<br />До 5 км - 500 рублей<br />Далее 5 км - 45 рублей за км<br /><br />Оплата осуществляется online (по ссылке или по QR-коду) после выставления счета.</div>
        </div>
      </div>
      {/* Второй блок: вопросы и доставка */}
      <div className="flex flex-col-reverse md:flex-row gap-0 items-center w-full max-w-[1200px] mx-auto -mt-[2px]">
        {/* Текст слева (на десктопе) */}
        <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 flex flex-col justify-center mt-8 md:mt-0 md:mr-8 px-4 md:px-10 pb-0 md:pb-0">
          <div className="font-poiret text-[32px] text-[#000] mb-24 leading-tight">Остались вопросы?</div>
          <div className="font-montserrat text-[16px] md:text-[20px] text-[#000] leading-normal mb-4">
            Если у вас остались вопросы, свяжитесь с нами по WhatsApp.<br /><br />Наши специалисты с удовольствием ответят на них, помогут определиться с датами старта или при необходимости порекомендуют другую оптимальную для вас программу.
          </div>
          <div className="flex flex-row items-center gap-4 mt-2">
            <img src={imgPngtreeWhatsappPhoneIcon9015282} alt="WhatsApp" className="w-[50px] h-[50px] filter grayscale" />
            <a href="tel:+79164280183" className="font-poiret text-[24px] text-[#000] hover:underline focus:underline">+7 (916) 428-01-83</a>
          </div>
        </div>
        {/* Картинка справа (на десктопе) */}
        <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 h-[320px] md:h-[625px] bg-center bg-cover flex-shrink-0" style={{ backgroundImage: `url('${img645Dcb5EDe3A42E28Da8Feba7D1F2E46}')` }} />
      </div>
    </section>
  );
} 