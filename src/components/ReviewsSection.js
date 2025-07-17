import { img5337324853826547944, img5298832029774896687, img5337324853826547946, imgArrowLeft, imgArrowRight } from "./images";
import { useState, useRef, useEffect } from "react";

const reviews = [
  img5337324853826547944,
  img5298832029774896687,
  img5337324853826547946,
  img5337324853826547944,
  img5298832029774896687,
  img5337324853826547946,
];

const CARD_GAP = 20;

function getResponsiveSettings() {
  const width = window.innerWidth;
  if (width < 640) {
    return { visibleCount: 1, cardWidth: Math.min(340, width * 0.9) };
  } else if (width < 1024) {
    return { visibleCount: 2, cardWidth: 320 };
  } else {
    return { visibleCount: 3, cardWidth: 380 };
  }
}

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [transition, setTransition] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(380);
  const total = reviews.length;

  // Responsive effect
  useEffect(() => {
    function handleResize() {
      const { visibleCount, cardWidth } = getResponsiveSettings();
      setVisibleCount(visibleCount);
      setCardWidth(cardWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SLIDE_WIDTH = cardWidth + CARD_GAP;
  const containerWidth = visibleCount * cardWidth + (visibleCount - 1) * CARD_GAP;

  // Drag/swipe refs
  const dragStartX = useRef(null);
  const dragLastX = useRef(null);

  // Начало свайпа/drag
  const onDragStart = (e) => {
    setTransition('');
    setIsDragging(true);
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    dragLastX.current = dragStartX.current;
  };
  // Перемещение
  const onDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setOffsetX(clientX - dragStartX.current);
    dragLastX.current = clientX;
  };
  // Завершение свайпа/drag
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = dragLastX.current - dragStartX.current;
    if (Math.abs(delta) > SLIDE_WIDTH / 4) {
      if (delta < 0 && idx < total - visibleCount) slideTo(idx + 1);
      else if (delta > 0 && idx > 0) slideTo(idx - 1);
      else resetSlide();
    } else {
      resetSlide();
    }
  };
  function resetSlide() {
    setTransition('transform 0.25s cubic-bezier(0.4,0,0.2,1)');
    setOffsetX(0);
    setTimeout(() => setTransition(''), 250);
  }
  // Клик по стрелке
  const handleArrow = (dir) => {
    if (transition) return;
    if (dir === -1 && idx === 0) return;
    if (dir === 1 && idx >= total - visibleCount) return;
    slideTo(idx + dir);
  };
  // Плавный slide к новому индексу
  function slideTo(newIdx) {
    setTransition('transform 0.35s cubic-bezier(0.4,0,0.2,1)');
    setOffsetX(-(newIdx - idx) * SLIDE_WIDTH);
    setTimeout(() => {
      setTransition('');
      setOffsetX(0);
      setIdx(newIdx);
    }, 350);
  }
  // Стили для плавного slide
  const slideStyle = {
    transform: `translateX(calc(${-idx * SLIDE_WIDTH + offsetX}px))` ,
    transition: transition,
    cursor: isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
  };
  // Отключение стрелок
  const leftDisabled = idx === 0;
  const rightDisabled = idx >= total - visibleCount;

  return (
    <section id="reviews" className="relative w-full flex flex-col items-center justify-center py-24 bg-[#fffefb]">
      <div className="text-center mb-16">
        <h2 className="font-poiret text-[40px] text-[#000] uppercase tracking-widest">Отзывы</h2>
      </div>
      <div className="relative w-full max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Viewport для отзывов */}
        <div className="overflow-hidden" style={{ width: containerWidth }}>
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
            {reviews.map((img, i) => (
              <div key={i} className="relative h-[380px] bg-center bg-cover rounded-2xl border border-[0.5px] border-[#d9d9d9] flex-shrink-0" style={{ backgroundImage: `url('${img}')`, width: cardWidth }} />
            ))}
          </div>
        </div>
        {/* Стрелки под отзывами, по краям блока отзывов */}
        <div className="flex flex-row items-center justify-between mt-4" style={{ width: containerWidth }}>
          <button onClick={() => handleArrow(-1)} disabled={leftDisabled} className={`flex items-center justify-center ${leftDisabled ? 'opacity-40 cursor-not-allowed' : ''}`} style={{ width: 48, height: 48 }} aria-label="Предыдущий отзыв">
            <img src={imgArrowLeft} alt="Влево" className="w-12 h-12" />
          </button>
          <button onClick={() => handleArrow(1)} disabled={rightDisabled} className={`flex items-center justify-center ${rightDisabled ? 'opacity-40 cursor-not-allowed' : ''}`} style={{ width: 48, height: 48 }} aria-label="Следующий отзыв">
            <img src={imgArrowRight} alt="Вправо" className="w-12 h-12" />
          </button>
        </div>
      </div>
    </section>
  );
} 