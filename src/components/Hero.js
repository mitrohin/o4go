import { imgIstockphoto5065919702048X2048 } from "./images";
import ActionButtons from "./ActionButtons";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[730px] bg-bg overflow-hidden">
      {/* Фоновое изображение на всю ширину экрана */}
      <div
        className="absolute left-0 top-[80px] md:top-[112px] w-full h-[480px] md:h-[562px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('${imgIstockphoto5065919702048X2048}')` }}
      />
      {/* Контент */}
      <div className="absolute left-1/2 top-[80px] md:top-[112px] w-full max-w-[1280px] -translate-x-1/2 flex flex-col items-center px-4">
        {/* Заголовок FMD */}
        <div className="font-playfair italic text-white text-[40px] md:text-[101px] leading-[1] text-center drop-shadow-lg select-none pointer-events-none w-full mt-12 md:mt-6 mb-6 md:mb-12">
          FMD
        </div>
        {/* Подзаголовок */}
        <div className="font-montserrat text-white text-[24px] md:text-[32px] text-center leading-[1.2] w-full max-w-[900px] mx-auto drop-shadow whitespace-normal mb-6 md:mb-12">
          <span className="font-playfair italic">Обновление</span> клеток начинается с <span className="font-playfair italic">правильного питания.</span>
        </div>
        {/* Старт программы */}
        <div className="w-full max-w-[600px] md:max-w-[850px] text-center mb-2 md:mb-0">
          <div className="font-montserrat text-white text-[16px] md:text-[24px] pb-2 md:pb-4 drop-shadow">Ближайший старт программы</div>
          <div className="font-poiret text-white text-[32px] md:text-[40px] pb-6 md:pb-16 drop-shadow">01/12/2025</div>
        </div>
        {/* Кнопки */}
        <ActionButtons />
      </div>
    </section>
  );
} 