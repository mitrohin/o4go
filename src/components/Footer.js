import { imgDinaNasyrovaNc5M3Jn840Unsplash, imgOgorodLight1, imgLine7 } from "./images";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOrderClick(e) {
    e.preventDefault();
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setIsModalOpen(false);
  }
  function handleModalConfirm() {
    setIsModalOpen(false);
    window.open("https://wa.me/79164280183", "_blank");
  }
  return (
    <footer className="relative w-full min-h-[650px] md:min-h-[650px] bg-transparent mt-10">
      {/* Фоновое изображение */}
      <div
        className="absolute left-0 right-0 top-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url('${imgDinaNasyrovaNc5M3Jn840Unsplash}')` }}
      />
      {/* Overlay для затемнения фона на мобильных */}
      <div className="absolute left-0 top-0 w-full h-full bg-black/60 z-10 md:hidden pointer-events-none" />
      {/* Контейнер для контента футера */}
      <div className="absolute left-1/2 top-0 w-full max-w-[1280px] -translate-x-1/2 h-full flex flex-col justify-between px-4 z-10 md:block">
        {/* Мобильная/адаптивная верстка */}
        <div className="flex flex-col gap-8 md:hidden pt-10 pb-6 w-full items-center">
          {/* Подписка */}
          <div className="w-full max-w-[382px]">
            <div className="font-montserrat text-[16px] text-white text-left leading-tight mb-2 text-center">
              Подпишитесь на наши обновления,<br />чтобы не пропустить новости
            </div>
            <form className="relative w-full h-[57px] flex items-center" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Введите e-mail"
                className="font-montserrat text-[20px] text-black placeholder:text-white bg-white/50 rounded-[28.5px] pl-8 pr-[90px] h-full w-full outline-none border-none"
                style={{ boxShadow: 'none' }}
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[57px] h-[57px] flex items-center justify-center bg-white/50 rounded-full hover:bg-white/80 transition-colors"
                aria-label="Подписаться"
              >
                <span className="text-2xl text-gray-700">→</span>
              </button>
            </form>
          </div>
          {/* Меню */}
          <div className="flex flex-col gap-4 w-full max-w-[382px] items-center">
            <a href="#program" className="font-montserrat text-[16px] text-white text-left leading-none not-italic cursor-pointer">Что такое FMD</a>
            <a href="#menu" className="font-montserrat text-[16px] text-white text-left leading-none not-italic cursor-pointer">Меню FMD</a>
            <a href="#reviews" className="font-montserrat text-[16px] text-white text-left leading-none not-italic cursor-pointer">Отзывы</a>
            <a href="#order" className="font-montserrat text-[16px] text-white text-left leading-none not-italic cursor-pointer" onClick={handleOrderClick}>Заказать</a>
            <a href="tel:+79164280183" className="font-montserrat text-[16px] text-white text-left leading-none not-italic cursor-pointer mt-8">+7 (916) 428-01-83</a>
          </div>
          {/* Логотип */}
          <div
            className="w-[206.63px] h-[97px] bg-center bg-contain bg-no-repeat cursor-pointer mt-4"
            style={{ backgroundImage: `url('${imgOgorodLight1}')` }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Наверх"
          />
          {/* Политика и копирайт */}
          <div className="flex flex-col items-center gap-2 mt-6">
            <a
              href="/policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[16px] text-white leading-none cursor-pointer hover:underline"
            >
              Политика конфиденциальности
            </a>
            <p className="font-montserrat text-[16px] text-white break-words text-center md:whitespace-nowrap md:text-left leading-none">Ogorod for Gorod © 2016-2025. Интернет-магазин натуральных продуктов питания</p>
          </div>
        </div>
        {/* Десктопная верстка */}
        <div className="hidden md:block w-full h-full">
          <div className="relative w-full h-[585px]">
            {/* Логотип */}
            <div
              className="absolute left-10 top-[470px] w-[206.63px] h-[97px] bg-center bg-contain bg-no-repeat cursor-pointer"
              style={{ backgroundImage: `url('${imgOgorodLight1}')` }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Наверх"
            />
            {/* Вертикальная линия и меню */}
            <div className="absolute right-[250px] top-[52px] h-[303px] w-0 flex items-center justify-center">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[303px]">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <img src={imgLine7} alt="line" className="block max-w-none w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* Меню и контакты */}
            <div className="absolute right-[40px] top-[52px] flex flex-col gap-[25px]">
              <a href="#program" className="font-montserrat text-[20px] text-white text-left leading-none not-italic cursor-pointer">Что такое FMD</a>
              <a href="#menu" className="font-montserrat text-[20px] text-white text-left leading-none not-italic cursor-pointer">Меню FMD</a>
              <a href="#reviews" className="font-montserrat text-[20px] text-white text-left leading-none not-italic cursor-pointer">Отзывы</a>
              <a href="#order" className="font-montserrat text-[20px] text-white text-left leading-none not-italic cursor-pointer" onClick={handleOrderClick}>Заказать</a>
              <a href="tel:+79164280183" className="font-montserrat text-[20px] text-white text-left leading-none not-italic cursor-pointer mt-8">+7 (916) 428-01-83</a>
            </div>
            {/* Подписка */}
            <div className="absolute left-10 top-[52px]">
              <div className="font-montserrat text-[20px] text-white text-left leading-tight mb-2">
                Подпишитесь на наши обновления,<br />чтобы не пропустить новости
              </div>
              <form className="relative w-[382px] h-[57px] mt-[40px] flex items-center" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Введите e-mail"
                  className="font-montserrat text-[20px] text-black placeholder:text-white bg-white/50 rounded-[28.5px] pl-8 pr-[90px] h-full w-full outline-none border-none"
                  style={{ boxShadow: 'none' }}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[57px] h-[57px] flex items-center justify-center bg-white/50 rounded-full hover:bg-white/80 transition-colors"
                  aria-label="Подписаться"
                >
                  <span className="text-2xl text-gray-700">→</span>
                </button>
              </form>
            </div>
          </div>
          {/* Нижняя часть: политика и копирайт */}
          <div className="relative w-full h-[65px]">
            <div className="absolute right-[40px] top-[0px] w-[270px]">
              <a
                href="https://www.ogorodforgorod.ru/docs/policy.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[16px] text-white leading-none cursor-pointer hover:underline"
              >
                Политика конфиденциальности
              </a>
            </div>
            <div className="absolute right-[40px] top-[30px]">
              <p className="font-montserrat text-[16px] text-white whitespace-nowrap leading-none">Ogorod for Gorod © 2016-2025. Интернет-магазин натуральных продуктов питания</p>
            </div>
          </div>
        </div>
        {/* Модальное окно заказа */}
        <Modal open={isModalOpen} onClose={handleModalClose} onConfirm={handleModalConfirm} />
      </div>
    </footer>
  );
} 