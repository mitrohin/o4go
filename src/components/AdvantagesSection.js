import React, { useState, useRef } from "react";
import { imgLine4, imgLine1, imgLine2, imgLine3, imgOgorodLemon1, imgOgorodLemon2 } from "./images";

const cards = [
  {
    title: <>Ежедневное приготовление<br/>и доставка</>,
    text: <>Мы не используем полуфабрикаты и заготовки — каждое блюдо мы начинаем готовить накануне с вечера перед днем доставки. Это позволяет гарантировать исключительное качество блюд.</>,
    line: imgLine4,
  },
  {
    title: <>Натуральные<br/>продукты</>,
    text: <>Для гармоничного вкуса и заботы о здоровье в нашем меню используются натуральные и органические продукты, отобранные с учетом сезонности, а также суперфуды.</>,
    line: imgLine1,
  },
  {
    title: <>Индивидуальный<br/>подход</>,
    text: <>При составлении меню мы учитываем ваши пожелания, ограничения и рекомендации специалистов: исключим нежелательные продукты, откорректируем рецепт.</>,
    line: imgLine4,
  },
  {
    title: <>Безопасность<br/>и качество</>,
    text: <>Наше производство полностью соответствует стандартам безопасности: чистота на кухне поддерживается на высоком уровне, а за блюда готовят опытные повара. Мы используем исключительно свежие продукты, чтобы гарантировать качество и вкус каждой порции.</>,
    line: imgLine2,
  },
  {
    title: <>Разнообразное и вкусное<br/>меню</>,
    text: <>Мы стремимся обеспечить разнообразие рациона и обещаем, что блюда в вашем меню не повторятся в течение трех недель. Каждое наше блюдо соответствует высоким стандартам качества, чтобы мы могли радовать вас “по-домашнему” вкусной едой.</>,
    line: imgLine1,
  },
  {
    title: <>Удобная<br/>доставка</>,
    text: <>Для вашего удобства мы предлагаем разные варианты времени доставки — как утром, так и вечером. Будь то дом или офис, мы привезем ваш заказ точно в срок и по указанному адресу.</>,
    line: imgLine3,
  },
];

function AdvantageCard({ title, text, line }) {
  return (
    <div className="rounded-[24.5px] px-0 pt-0 pb-0 flex flex-col min-h-[180px]">
      <div className="font-poiret text-[24px] tablet:text-[25px] text-[#000] mb-3 leading-[1.1] px-6 pt-6">{title}</div>
      <img src={line} alt="line" className="w-full h-2 object-contain mb-4" />
      <div className="font-montserrat text-[16px] tablet:text-[20px] text-[#000] leading-[1.4] px-6 pb-6">{text}</div>
    </div>
  );
}

export default function AdvantagesSection() {
  const [showAll, setShowAll] = useState(false);
  const [animating, setAnimating] = useState(false);
  const moreRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggle = () => {
    if (showAll) {
      setAnimating(true);
      setShowAll(false);
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        setAnimating(false);
      }, 400); // Ждём окончания transition
    } else {
      setShowAll(true);
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-[#fffefb] py-[120px] px-4 overflow-hidden">
      {/* Заголовок */}
      <div className="text-center mb-[72px]">
        <h2 className="font-playfair italic text-[40px] tablet:text-[64px] text-[#000] leading-[1.1] mb-0">Преимущества</h2>
        <div className="font-montserrat text-[40px] tablet:text-[64px] text-[#000] opacity-80 leading-[1.1]">меню от OgorodForGorod</div>
      </div>
      {/* Лимон для мобильных */}
      <div className="block tablet:hidden mb-8 w-full flex justify-center">
        <div
          className="bg-center bg-cover bg-no-repeat w-[180px] h-[180px]"
          style={{ backgroundImage: `url('${imgOgorodLemon1}')`, maskImage: `url('${imgOgorodLemon2}')`, WebkitMaskImage: `url('${imgOgorodLemon2}')` }}
        />
      </div>
      {/* Карточки и Подробнее для мобильных */}
      <div className="flex flex-col tablet:hidden w-full max-w-[420px] mx-auto gap-[32px] z-10">
        {cards.slice(0, 3).map((card, idx) => (
          <AdvantageCard key={idx} {...card} />
        ))}
        {/* Анимированное раскрытие */}
        <div
          ref={moreRef}
          style={{
            maxHeight: showAll ? 1000 : 0,
            opacity: showAll ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s cubic-bezier(.4,0,.2,1)',
            pointerEvents: showAll ? 'auto' : 'none',
          }}
        >
          {cards.slice(3).map((card, idx) => (
            <AdvantageCard key={idx + 3} {...card} />
          ))}
        </div>
        <button
          ref={buttonRef}
          type="button"
          className="mt-2 text-left text-[24px] font-poiret text-black underline underline-offset-4"
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            textDecorationSkipInk: 'auto',
            textDecorationThickness: 'auto',
            textUnderlineOffset: 'auto',
            textUnderlinePosition: 'from-font',
            fontFamily: 'Poiret One',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 'normal',
          }}
          onClick={handleToggle}
          disabled={animating}
        >
          {showAll ? 'Скрыть' : 'Подробнее'}
        </button>
      </div>
      {/* Desktop: три колонки */}
      <div className="relative w-full max-w-[1280px] mx-auto flex-row justify-between items-stretch gap-[32px] z-10 hidden tablet:flex">
        {/* Левая колонка */}
        <div className="flex flex-col justify-between flex-1 max-w-[370px] gap-[40px]">
          {cards.slice(0, 3).map((card, idx) => (
            <AdvantageCard key={idx} {...card} />
          ))}
        </div>
        {/* Центральная колонка — лимон */}
        <div className="flex flex-col items-center justify-center w-[220px] min-w-[180px] max-w-[260px] relative">
          <div
            className="bg-center bg-cover bg-no-repeat w-[221px] h-[221px]"
            style={{ backgroundImage: `url('${imgOgorodLemon1}')`, maskImage: `url('${imgOgorodLemon2}')`, WebkitMaskImage: `url('${imgOgorodLemon2}')` }}
          />
        </div>
        {/* Правая колонка */}
        <div className="flex flex-col justify-between flex-1 max-w-[370px] gap-[40px]">
          {cards.slice(3).map((card, idx) => (
            <AdvantageCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
} 