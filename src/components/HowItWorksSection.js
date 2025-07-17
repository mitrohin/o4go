import { img43Cfcae505Bb405BAdae96Dac10A5Bef1, imgVisualelectric1749023757083, img3Befb5566E2345Ca820F5Feb912D87191 } from "./images";

export default function HowItWorksSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-24 bg-[#fffefb] overflow-x-hidden">
      {/* Заголовок */}
      <div className="w-full max-w-[1280px] mx-auto mb-8 pl-0">
        <h2 className="font-poiret text-[32px] sm:text-[64px] text-[#000] leading-tight text-center">
          Как <span className="font-playfair italic">работает</span> программа <span className="font-playfair italic">FMD</span>
        </h2>
      </div>
      {/* Подзаголовок */}
      <div className="font-montserrat text-[16px] sm:text-[32px] text-center text-[#000] max-w-[644px] mx-auto mb-16 px-4 md:px-10 lg:px-0">
        Во время программы вы едите, но в строго ограниченном количестве и с определённым соотношением белков, жиров и углеводов.
      </div>
      {/* Блоки */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col">
        {/* 1. Ограничение калорий и белков */}
        <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-[1200px] mx-auto">
          <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 h-[320px] md:h-[625px] bg-center bg-cover flex-shrink-0" style={{ backgroundImage: `url('${img43Cfcae505Bb405BAdae96Dac10A5Bef1}')` }} />
          <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 flex flex-col justify-center mt-8 md:mt-0 md:ml-8 px-4 md:px-10" style={{paddingTop:0,paddingBottom:0}}>
            <div className="font-poiret text-[32px] text-[#000] mb-4 leading-tight">Ограничение<br />калорий и белков</div>
            <div className="font-montserrat text-[16px] text-[#000] leading-normal">
              При FMD калорийность питания снижается примерно до 40% от вашей стандартной суточной нормы.<br /><br />
              При этом основу рациона составляют полезные растительные жиры, а количество белков и углеводов строго контролируется.<br />
              Это нужно для того, чтобы замедлить работу сигнального пути роста клеток (mTOR).<br /><br />
              Когда белков и энергии мало, организм понимает: сейчас не время для роста и накопления ресурсов, а время для защиты, экономии и восстановления.
            </div>
          </div>
        </div>
        {/* 2. Организм думает, что это голодание */}
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center w-full max-w-[1200px] mx-auto -mt-16">
          <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 flex flex-col justify-center mt-8 md:mt-0 md:mr-8 px-4 md:px-10" style={{paddingTop:0,paddingBottom:0}}>
            <div className="font-poiret text-[32px] text-[#000] mb-4 leading-tight">Организм думает,<br />что это голодание</div>
            <div className="font-montserrat text-[16px] text-[#000] leading-normal">
              Еда в рационе подобрана так по составу и калорийности, что тело чувствует это как период голодания.<br />
              <br />Что происходит внутри?<br /><br />
              Запускается аутофагия — процесс очищения клеток от повреждённых, ненужных компонентов.<br /><br />
              Начинается восстановление — включаются защитные механизмы, которые обычно «спят», когда есть достаток пищи.<br /><br />
              Тело начинает расщеплять жировые запасы — потому что новых калорий мало, и энергия берётся из накопленного.
            </div>
          </div>
          <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 h-[320px] md:h-[640px] bg-center bg-cover flex-shrink-0" style={{ backgroundImage: `url('${imgVisualelectric1749023757083}')` }} />
        </div>
        {/* 3. Польза для здоровья без голодания */}
        <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-[1200px] mx-auto -mt-16">
          <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 h-[320px] md:h-[640px] bg-center bg-cover flex-shrink-0" style={{ backgroundImage: `url('${img3Befb5566E2345Ca820F5Feb912D87191}')` }} />
          <div className="w-full md:basis-1/2 md:max-w-1/2 min-w-0 flex flex-col justify-center mt-8 md:mt-0 md:ml-8 px-4 md:px-10" style={{paddingTop:0,paddingBottom:0}}>
            <div className="font-poiret text-[32px] text-[#000] mb-4 leading-tight">Польза для здоровья<br />без голодания</div>
            <div className="font-montserrat text-[16px] text-[#000] leading-normal">
              С FMD вы получаете ту же пользу, что и от настоящего голодания, но без его жёстких ограничений.<br />
              <br />Вам не нужно полностью отказываться от еды.<br /><br />
              Организм активирует процессы очищения и восстановления.<br /><br />
              Вы сохраняете силы для работы, спорта и других дел.<br /><br />
              Растительная пища и полезные жиры помогают избежать стресса и голодных срывов.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 