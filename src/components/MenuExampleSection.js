import React, { useState, useRef, useEffect } from "react";
import { imgA84698Bb441631304A8600Dcc468C62F, imgRectangle11, imgArrowLeft, imgArrowRight } from "./images";

const menuCards = [
  {
    title: "1000 ккал",
    total: "1022 ккал БЖУ 15/46/40 %",
    items: [
      { name: "Бататные оладьи с клубникой", label: "ЗАВТРАК" },
      { name: "Суп-пюре из сельдерея с микрозеленью", label: "ОБЕД" },
      { name: "Салат сезонными овощами и ароматным маслом", label: "ОБЕД 2" },
      { name: "Тушенная молодая капуста с лисичками", label: "УЖИН" },
    ],
  },
  {
    title: "750 ккал",
    total: "752 ккал БЖУ 8/47/45 %",
    items: [
      { name: "Каша пшенная с тыквой и яйцом", label: "ЗАВТРАК" },
      { name: "Постные щи с молодой капустой и щавелем", label: "ОБЕД" },
      { name: "Теплый овощной салат с зеленью и томатами", label: "ОБЕД 2" },
      { name: "Зеленый салат с авокадо, голубикой и миндалем", label: "УЖИН" },
    ],
  },
  {
    title: "День выхода",
    total: "1214 ккал БЖУ 18/40/42 %",
    items: [
      { name: "Запеканка с ягодами", label: "ЗАВТРАК" },
      { name: "Крем суп из цветной капусты с трюфельным маслом", label: "ОБЕД" },
      { name: "Киноа с морепродуктами", label: "ОБЕД 2" },
      { name: "Филе судака с овощным соусом с цуккини и шпинатом", label: "УЖИН" },
    ],
  },
];

export default function MenuExampleSection() {
  const [isSlider, setIsSlider] = useState(false);
  const [idx, setIdx] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [transition, setTransition] = useState("");
  const CARD_WIDTH = 340;
  const CARD_GAP = 40;
  const dragStartX = useRef(null);
  const dragLastX = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsSlider(window.innerWidth < 1140);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Drag/swipe logic
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
    const SLIDE_WIDTH = CARD_WIDTH + CARD_GAP;
    const delta = dragLastX.current - dragStartX.current;
    if (Math.abs(delta) > SLIDE_WIDTH / 4) {
      if (delta < 0) {
        // Свайп влево - следующий слайд с циклом
        slideTo(idx >= menuCards.length - 1 ? 0 : idx + 1);
      } else if (delta > 0) {
        // Свайп вправо - предыдущий слайд с циклом
        slideTo(idx === 0 ? menuCards.length - 1 : idx - 1);
      }
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
    const SLIDE_WIDTH = CARD_WIDTH + CARD_GAP;
    setTransition("transform 0.35s cubic-bezier(0.4,0,0.2,1)");
    setOffsetX(-(newIdx - idx) * SLIDE_WIDTH);
    setTimeout(() => {
      setTransition("");
      setOffsetX(0);
      setIdx(newIdx);
    }, 350);
  }
  const SLIDE_WIDTH = CARD_WIDTH + CARD_GAP;
  const slideStyle = {
    transform: `translateX(calc(${-idx * SLIDE_WIDTH + offsetX}px))`,
    transition: transition,
    cursor: isDragging ? "grabbing" : "grab",
    userSelect: "none",
  };

  return (
    <section id="menu" className="relative w-full bg-[#fffefb]">
      {/* Заголовок */}
      <div className="absolute left-1/2 top-[60px] -translate-x-1/2 z-20">
        <h2 className="font-playfair italic text-[40px] text-[#000] leading-none text-center whitespace-nowrap">
          <span className="italic">Пример</span>
          <span className="not-italic"> меню </span>
          <span className="italic">FMD</span>
        </h2>
      </div>
      {/* Фоновое изображение */}
      <div className="w-full h-[660px] bg-center bg-cover bg-no-repeat absolute left-1/2 top-[180px] -translate-x-1/2 z-10" style={{ backgroundImage: `url('${imgA84698Bb441631304A8600Dcc468C62F}')` }} />
      {/* Карточки меню */}
      {isSlider ? (
        <div className="absolute left-1/2 top-[210px] -translate-x-1/2 flex flex-col items-center w-full z-20">
          <div className="overflow-hidden" style={{ width: 340, minWidth: 340, maxWidth: 340 }}>
            <div
              className="flex flex-row gap-[40px] select-none"
              style={slideStyle}
              onTouchStart={onDragStart}
              onTouchMove={onDragMove}
              onTouchEnd={onDragEnd}
              onMouseDown={onDragStart}
              onMouseMove={onDragMove}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
            >
              {menuCards.map((card, i) => (
                <MenuCard
                  key={i}
                  {...card}
                  showArrows={true}
                  onPrev={() => slideTo(idx === 0 ? menuCards.length - 1 : idx - 1)}
                  onNext={() => slideTo(idx >= menuCards.length - 1 ? 0 : idx + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute left-1/2 top-[210px] -translate-x-1/2 flex flex-row gap-[40px] w-[1100px] justify-center z-20">
          {menuCards.map((card, i) => (
            <MenuCard key={i} {...card} />
          ))}
        </div>
      )}
      {/* Блок-заполнитель для высоты секции */}
      <div className="h-[900px]" />
    </section>
  );
}

function MenuCard({ title, total, items, showArrows, onPrev, onNext }) {
  return (
    <div
      className="bg-[rgba(217,217,217,0.8)] rounded-[24.5px] p-10 w-[340px] min-h-[560px] flex flex-col items-center shadow-md relative"
      style={{ width: 340, minWidth: 340, maxWidth: 340, flex: 'none' }}
    >
      <div className="font-poiret text-[32px] text-[#000] mb-6 leading-none">{title}</div>
      <div className="flex flex-col gap-6 w-full flex-1">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col w-full">
            <div className="flex flex-row items-center mb-1">
              <img src={imgRectangle11} alt="decor" className="w-[30px] h-[14px] object-contain mr-2" />
              <span className="font-poiret text-[16px] text-[#000] uppercase tracking-wide">{item.label}</span>
            </div>
            <span className="font-montserrat text-[16px] text-[#000] pl-[32px]">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full flex flex-row items-center justify-center">
        <span className="font-poiret text-[16px] text-[#000]">ВСЕГО:</span>
        <span className="font-montserrat text-[14px] ml-2">{total}</span>
      </div>
      {/* Стрелки для мобильного слайдера */}
      {showArrows && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 bottom-4 w-10 h-10 flex items-center justify-center z-10 bg-transparent hover:opacity-80"
            aria-label="Предыдущая карточка"
            type="button"
          >
            <img src={imgArrowLeft} alt="Влево" className="w-10 h-auto" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center z-10 bg-transparent hover:opacity-80"
            aria-label="Следующая карточка"
            type="button"
          >
            <img src={imgArrowRight} alt="Вправо" className="w-10 h-auto" />
          </button>
        </>
      )}
    </div>
  );
} 