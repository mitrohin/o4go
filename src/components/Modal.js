import React from "react";
import { createPortal } from "react-dom";
import { getAssetPath } from '../utils/pathUtils';

export default function Modal({ open, onClose, onConfirm, variant = "order" }) {
  if (!open) return null;
  const isContact = variant === "contact";
  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={onClose}>
      <div
        className="relative bg-[#d9d9d9] rounded-[24.5px] w-[90vw] max-w-[850px] h-[500px] flex items-center justify-start shadow-lg px-0 md:px-12"
        onClick={e => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        {/* Логотип */}
        <div className="hidden md:block absolute left-[50px] top-[98px]">
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            {/* Белый круглый фон */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-white z-0 left-0 top-0" />
            <img src={getAssetPath('images/4b3640efcb28f98a99562eecc5baa15db714fff4.svg')} alt="Ellipse" className="absolute w-[177px] h-[177px] left-[11.5px] top-[10.8px] z-10" />
            <div
              className="absolute w-[180px] h-[180px] left-[10px] top-[10px] bg-center bg-cover bg-no-repeat z-20"
              style={{ backgroundImage: `url('${getAssetPath('images/ogorod_lemon.png')}')` }}
            />
          </div>
        </div>
        {/* Контент справа */}
        <div className="ml-auto mr-0 w-full md:w-[520px] flex flex-col items-center text-center pr-4 md:pr-0">
          <div className="mt-[49px] w-full">
            <p className="font-poiret text-[24px] md:text-[40px] text-center whitespace-nowrap">{isContact ? "Связаться с нами" : "Заказать программу FMD"}</p>
          </div>
          <div className="mt-[30px] w-full">
            {isContact ? (
              <p className="font-montserrat text-[14px] md:text-[20px]">Сейчас вы будете перенаправлены на номер<br/><br/>WhatsApp <a href="tel:+79164280183" className="hover:underline focus:underline">+7 (916) 428-01-83</a><br/><br/>где вы можете задать любые вопросы или просто пообщаться с нашим менеджером.</p>
            ) : (
              <p className="font-montserrat text-[14px] md:text-[20px]">Сейчас вы будете перенаправлены на номер<br/><br/>WhatsApp <a href="tel:+79164280183" className="hover:underline focus:underline">+7 (916) 428-01-83</a><br/><br/>где наш менеджер поможет вам быстро и удобно оформить заказ.</p>
            )}
          </div>
          {/* Кнопки */}
          <div className="mt-[40px] flex gap-6 justify-center w-full">
            <button
              className="bg-[#fffefb] opacity-70 rounded-[24.5px] w-[120px] md:w-[250px] h-[40px] md:h-[50px] text-black text-[14px] md:text-[20px] font-montserrat border border-transparent hover:opacity-100 transition"
              onClick={onConfirm}
            >
              ПОДТВЕРДИТЬ
            </button>
            <button
              className="bg-[#d9d9d9] opacity-70 rounded-[24.5px] w-[120px] md:w-[250px] h-[40px] md:h-[50px] text-black text-[14px] md:text-[20px] font-montserrat border border-transparent hover:opacity-100 transition"
              onClick={onClose}
            >
              ОТМЕНА
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(modalContent, document.body);
} 