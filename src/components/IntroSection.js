import React from "react";

export default function IntroSection() {
  return (
    <section id="program" className="relative w-full flex flex-col items-center justify-center py-10 md:py-10 lg:py-10 bg-[#fffefb]">
      {/* Заголовок */}
      <div className="w-full max-w-[941px] text-center mb-6 md:mb-8 px-2">
        <h2 className="font-playfair italic text-[40px] sm:text-[40px] md:text-[48px] lg:text-[64px] text-[rgba(50,50,50,0.8)] leading-tight not-italic text-center">
          <span className="font-playfair italic">FMD </span>
          <span className="not-italic">или</span>
          <span className="font-playfair italic"> Fast Mimicking Diet</span>
        </h2>
      </div>
      {/* Подзаголовок */}
      <div className="font-montserrat text-[24px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center text-[#000] w-full max-w-[850px] mx-auto mb-8 md:mb-12 leading-normal px-2">
        <p>Это научно разработанное 5-дневное питание, которое "обманывает" тело, включая процессы голодания, но без лишений. Под контролем специально составленного рациона организм перестраивается и начинает использовать внутренние ресурсы.</p>
      </div>
      {/* Карточки */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center w-full max-w-[1280px] mb-6 md:mb-8 px-2">
        {/* Недельное меню */}
        <div className="bg-white rounded-[18px] sm:rounded-[20px] md:rounded-[24.5px] border border-black p-5 sm:p-6 md:p-8 lg:p-10 min-h-[420px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[612px] w-full sm:w-[220px] md:w-[300px] lg:w-[380px] flex flex-col items-center mb-4 sm:mb-0">
          <div className="font-poiret text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#000] mb-3 sm:mb-4 text-center leading-none">Недельное меню</div>
          <div className="font-montserrat text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000] text-left leading-normal w-full">
            <p>День 1: 1040 - 1060 ккал</p>
            <p>Плавный вход.</p>
            <p>Организм входит в режим экономии</p>
            <p className="mb-2">&nbsp;</p>
            <p>Дни 2–3: 750 ккал</p>
            <p>Питание.</p>
            <p>Запускается кетоз - сжигается жир</p>
            <p className="mb-2">&nbsp;</p>
            <p>Дни 4–5: 750 ккал</p>
            <p>Питание.</p>
            <p>Начинается процесс клеточного обновления</p>
            <p className="mb-2">&nbsp;</p>
            <p>Дополнительные дни 6-7: 1100-1200 ккал с добавлением животного белка</p>
            <p>Плавный выход без срывов.</p>
          </div>
        </div>
        {/* Результат */}
        <div className="bg-white rounded-[18px] sm:rounded-[20px] md:rounded-[24.5px] border border-black p-5 sm:p-6 md:p-8 lg:p-10 min-h-[420px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[612px] w-full sm:w-[220px] md:w-[300px] lg:w-[380px] flex flex-col items-center mb-4 sm:mb-0">
          <div className="font-poiret text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#000] mb-3 sm:mb-4 text-center leading-none">Результат</div>
          <div className="font-montserrat text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000] text-left leading-normal w-full">
            <p>Минус 2–3 кг.</p>
            <p>Потеря веса происходит естественно, без истощения мышц.</p>
            <p className="mb-2">&nbsp;</p>
            <p>Лёгкость, ясность, энергия - уже на 3–4 день, словно после качественного отдыха или ретрита.</p>
            <p className="mb-2">&nbsp;</p>
            <p>Меньше тяги к сладкому. Рецепторы обостряются.</p>
            <p className="mb-2">&nbsp;</p>
            <p>Новый старт для пищевых привычек.</p>
            <p>Питание становится более осознанным.</p>
          </div>
        </div>
        {/* Для кого */}
        <div className="bg-white rounded-[18px] sm:rounded-[20px] md:rounded-[24.5px] border border-black p-5 sm:p-6 md:p-8 lg:p-10 min-h-[420px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[612px] w-full sm:w-[220px] md:w-[300px] lg:w-[380px] flex flex-col items-center">
          <div className="font-poiret text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#000] mb-3 sm:mb-4 text-center leading-none">Для кого</div>
          <div className="font-montserrat text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000] text-left leading-normal w-full">
            <p>Тем, кто хочет мягкий, но глубокий детокс без жесткого голодания.</p>
            <p className="mb-2">&nbsp;</p>
            <p>Тем, кто устал от срывов, подсчёта калорий и диет.</p>
            <p className="mb-2">&nbsp;</p>
            <p>Тем, кто заботится о здоровье, долголетии и профилактике.<br/>FMD положительно влияет на биомаркеры старения, уровень инсулина, сахара, холестерина и воспаления.</p>
            <p className="mb-2">&nbsp;</p>
            <p>Тем, кто проходит фазу восстановления стрессов — FMD помогает мягко сбалансировать внутренние процессы и вернуться в ресурсное состояние.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 