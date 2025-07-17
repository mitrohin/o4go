import { useEffect, useState } from "react";
import { imgOgorodDark1 } from "./images";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 bg-[#fffefb] h-[100px] ${
        scrolled ? "shadow-[0_4px_16px_0_rgba(0,0,0,0.07)]" : "shadow-none"
      }`}
    >
      <div className="relative w-full h-full">
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-10 relative">
          {/* Бургер слева (только tablet/mobile) */}
          <div className="flex items-center h-full">
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-20 gap-1.5"
              aria-label="Открыть меню"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <span className="block w-6 h-0.5 bg-black rounded transition-all" />
              <span className="block w-6 h-0.5 bg-black rounded transition-all" />
              <span className="block w-6 h-0.5 bg-black rounded transition-all" />
            </button>
            {/* Пункты меню только на desktop */}
            <div className="hidden lg:flex gap-[40px] items-center h-full ml-0">
              <a href="#program" className="font-montserrat text-[12px] text-black not-italic leading-none whitespace-nowrap hover:underline focus:underline transition-all">ПРОГРАММА FMD</a>
              <a href="#menu" className="font-montserrat text-[12px] text-black not-italic leading-none whitespace-nowrap ml-[17px] hover:underline focus:underline transition-all">МЕНЮ FMD</a>
              <a href="#reviews" className="font-montserrat text-[12px] text-black not-italic leading-none whitespace-nowrap ml-[15px] hover:underline focus:underline transition-all">ОТЗЫВЫ</a>
            </div>
          </div>
          {/* Логотип по центру абсолютно */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[79px] w-[175px] bg-center bg-cover bg-no-repeat focus:outline-none"
            style={{ backgroundImage: `url('${imgOgorodDark1}')` }}
            aria-label="На главную"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMenuOpen(false);
            }}
            type="button"
          />
          {/* Телефон справа (только desktop) */}
          <div className="hidden lg:flex items-center h-full">
            <a href="tel:+79164280183" className="font-montserrat text-[12px] text-black not-italic leading-none whitespace-nowrap hover:underline focus:underline transition-all">+7 (916) 428-01-83</a>
          </div>
        </div>
        {/* Выпадающее меню */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#fffefb] z-50 flex flex-col items-center justify-center animate-fade-in transition-all duration-300">
            <button
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <span className="block w-6 h-0.5 bg-black rotate-45 absolute" style={{ top: '18px' }} />
              <span className="block w-6 h-0.5 bg-black -rotate-45 absolute" style={{ top: '18px' }} />
            </button>
            <nav className="flex flex-col gap-8 items-center mt-8">
              <a href="#program" className="font-montserrat text-[20px] text-black not-italic leading-none whitespace-nowrap hover:underline focus:underline transition-all" onClick={() => setMenuOpen(false)}>ПРОГРАММА FMD</a>
              <a href="#menu" className="font-montserrat text-[20px] text-black not-italic leading-none whitespace-nowrap hover:underline focus:underline transition-all" onClick={() => setMenuOpen(false)}>МЕНЮ FMD</a>
              <a href="#reviews" className="font-montserrat text-[20px] text-black not-italic leading-none whitespace-nowrap hover:underline focus:underline transition-all" onClick={() => setMenuOpen(false)}>ОТЗЫВЫ</a>
            </nav>
            <div className="mt-16 flex flex-col items-center">
              <a href="tel:+79164280183" className="font-montserrat text-[18px] text-black not-italic leading-none whitespace-nowrap hover:underline focus:underline transition-all">+7 (916) 428-01-83</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 