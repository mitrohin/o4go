import React, { useState, useRef } from "react";
import { imgD639Be080Fb8F940Cc0Ee6Bc76422570, imgArrow2, imgArrow1 } from "./images";

const facts = [
  {
    num: "01/06",
    title: "Снижение биологического возраста – на 2,5 года",
    text: "Участники 3–4 циклов FMD (неделя раз в месяц) снизили свой биологический возраст в среднем на 2,5 года по шкале желудочно-кишечных и иммунных маркеров"
  },
  {
    num: "02/06",
    title: "Минус ~2–3 кг",
    text: "После трёх циклов FMD потеря жира составила примерно 2,3 кг без снижения мышечной массы"
  },
  {
    num: "03/06",
    title: "Снижение на −30–60 % гормона IGF-1",
    text: "Клеточные исследования, животные и клинические испытания показывают снижение уровня гормона  IGF‑1, участвующим в процессах старения, на 30–60 % во время FMD"
  },
  {
    num: "04/06",
    title: "Улучшение когнитивных функций",
    text: "Исследования на животных показали усиление нейрогенеза, улучшение памяти. У людей  — повышение ясности мышления и внимания"
  },
  {
    num: "05/06",
    title: "Снижение жира в области живота и печени",
    text: "МРТ-исследования подтвердили уменьшение висцерального и печёночного жира у участников FMD"
  },
  {
    num: "06/06",
    title: "Улучшение показателей метаболизма",
    text: "Снижение HOMA‑IR (инсулинорезистентности)<br>Падение HbA1c на 0.3–1 %<br>Уменьшение уровня глюкозы, инсулина и воспалительных маркеров (CRP)"
  },
];

const CARD_GAP = 20;

function getResponsiveSettings() {
  const width = window.innerWidth;
  if (width < 640) {
    return { cardWidth: 290, containerMaxWidth: 375 };
  } else if (width < 1024) {
    // Динамическая ширина: отступы по 16px, максимум 600px
    const cardWidth = Math.min(width - 32, 600);
    return { cardWidth, containerMaxWidth: width };
  } else {
    return { cardWidth: 850, containerMaxWidth: 1280 };
  }
}

export default function FactsSection() {
  const [idx, setIdx] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [transition, setTransition] = useState("");
  const [cardWidth, setCardWidth] = useState(getResponsiveSettings().cardWidth);
  const [containerMaxWidth, setContainerMaxWidth] = useState(getResponsiveSettings().containerMaxWidth);
  const total = facts.length;

  React.useEffect(() => {
    function handleResize() {
      const { cardWidth, containerMaxWidth } = getResponsiveSettings();
      setCardWidth(cardWidth);
      setContainerMaxWidth(containerMaxWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dragStartX = useRef(null);
  const dragLastX = useRef(null);

  // Свайп/drag
  const onDragStart = (e) => {
    setTransition("");
    setIsDragging(true);
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    dragLastX.current = dragStartX.current;
  };
  const onDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setOffsetX(clientX - dragStartX.current);
    dragLastX.current = clientX;
  };
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const SLIDE_WIDTH = cardWidth + CARD_GAP;
    const delta = dragLastX.current - dragStartX.current;
    if (Math.abs(delta) > SLIDE_WIDTH / 4) {
      if (delta < 0 && idx < total - 1) slideTo(idx + 1);
      else if (delta > 0 && idx > 0) slideTo(idx - 1);
      else resetSlide();
    } else {
      resetSlide();
    }
  };
  function resetSlide() {
    setTransition("transform 0.25s cubic-bezier(0.4,0,0.2,1)");
    setOffsetX(0);
    setTimeout(() => setTransition(""), 250);
  }
  function slideTo(newIdx) {
    const SLIDE_WIDTH = cardWidth + CARD_GAP;
    setTransition("transform 0.35s cubic-bezier(0.4,0,0.2,1)");
    setOffsetX(-(newIdx - idx) * SLIDE_WIDTH);
    setTimeout(() => {
      setTransition("");
      setOffsetX(0);
      setIdx(newIdx);
    }, 350);
  }
  // Стили для плавного slide
  const SLIDE_WIDTH = cardWidth + CARD_GAP;
  const slideStyle = {
    transform: `translateX(calc(${-idx * SLIDE_WIDTH + offsetX}px))`,
    transition: transition,
    cursor: isDragging ? "grabbing" : "grab",
    userSelect: "none",
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[730px] bg-[#fffefb] overflow-hidden flex flex-col items-center justify-center py-24 mt-12">
      {/* Фоновое изображение на всю ширину */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${imgD639Be080Fb8F940Cc0Ee6Bc76422570}')` }}
      />
      {/* Заголовок */}
      <div className="relative z-10 w-full flex flex-col items-center mb-12 px-6">
        <h2 className="font-poiret text-[40px] md:text-[64px] text-white leading-tight text-center">
          Немного <span className="font-playfair italic">фактов</span> об <span className="font-playfair italic">FMD</span>
        </h2>
      </div>
      {/* Слайдер карточек */}
      <div
        className="relative w-full flex flex-col items-center mx-auto"
        style={{ maxWidth: containerMaxWidth, paddingLeft: containerMaxWidth < 1024 ? 16 : 0, paddingRight: containerMaxWidth < 1024 ? 16 : 0 }}
      >
        <div className="overflow-hidden" style={{ width: cardWidth }}>
          <div
            className="flex flex-row gap-5 select-none"
            style={slideStyle}
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
          >
            {facts.map((fact, i) => (
              <div
                key={i}
                className="relative bg-[rgba(217,217,217,0.8)] rounded-[24.5px] flex items-center justify-center flex-shrink-0"
                style={{ width: cardWidth, height: window.innerWidth < 1024 ? 400 : 350 }}
              >
                {/* Левая стрелка (внизу) */}
                <button
                  onClick={() => idx > 0 && slideTo(idx - 1)}
                  disabled={idx === 0}
                  className={`absolute left-8 bottom-8 flex items-center justify-center z-10 ${idx === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
                  style={{ width: 48, height: 48 }}
                  aria-label="Предыдущий факт"
                >
                  <img src={imgArrow2} alt="Влево" className="w-12 h-auto rotate-180" />
                </button>
                {/* Правая стрелка (внизу) */}
                <button
                  onClick={() => idx < facts.length - 1 && slideTo(idx + 1)}
                  disabled={idx === facts.length - 1}
                  className={`absolute right-8 bottom-8 flex items-center justify-center z-10 ${idx === facts.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80'}`}
                  style={{ width: 48, height: 48 }}
                  aria-label="Следующий факт"
                >
                  <img src={imgArrow1} alt="Вправо" className="w-12 h-auto" />
                </button>
                {/* Номер */}
                <div className="absolute font-poiret text-[32px] sm:text-[40px] text-[#000] not-italic leading-[0] select-none lg:left-[50px] lg:top-[148px] left-1/2 bottom-8 -translate-x-1/2 text-center lg:bottom-auto lg:translate-x-0">
                  {fact.num}
                </div>
                {/* Заголовок */}
                <div
                  className="absolute font-poiret text-[32px] sm:text-[40px] text-[#000] not-italic select-none leading-[1.1] sm:leading-tight lg:text-left lg:w-[500px] lg:top-[46px] lg:left-1/2 lg:-translate-x-[148px] w-full top-8 left-0 px-4 text-center"
                >
                  {fact.title}
                </div>
                {/* Текст */}
                <div
                  className="absolute font-montserrat text-[14px] sm:text-[20px] text-[#000] not-italic select-none lg:text-left lg:w-[523px] lg:left-[277px] lg:top-[181px] w-full left-0 top-40 sm:top-32 px-4 text-center mt-8 lg:mt-0"
                >
                  {fact.text.split('<br>').map((line, j) => (
                    <div key={j}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}