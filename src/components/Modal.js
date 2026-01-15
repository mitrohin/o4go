import React from "react";
import { createPortal } from "react-dom";
import { getAssetPath } from "../utils/pathUtils";

function LogoBadge({ size = 200, ellipseSize = 177, imageSize = 180, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute rounded-full bg-white"
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
      <img
        src={getAssetPath("images/4b3640efcb28f98a99562eecc5baa15db714fff4.svg")}
        alt=""
        className="absolute"
        style={{ width: ellipseSize, height: ellipseSize }}
        aria-hidden="true"
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat"
        style={{
          width: imageSize,
          height: imageSize,
          backgroundImage: `url('${getAssetPath("images/ogorod_lemon.png")}')`
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function Modal({ open, onClose, onConfirm, variant = "order" }) {
  if (!open) return null;

  const isContact = variant === "contact";

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-3"
      onClick={onClose}
    >
      <div
        className="relative bg-[#d9d9d9] rounded-[24.5px] w-full max-w-[850px] min-h-[470px] flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-start shadow-lg px-6 py-10 md:px-12 md:py-0 gap-8"
        onClick={event => event.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
        >
          ×
        </button>
        <div className="hidden md:flex flex-col items-center justify-center pr-8">
          <LogoBadge />
        </div>
        <div className="w-full md:w-[520px] flex flex-col items-center text-center">
          <div className="w-full md:hidden mb-6 flex justify-center">
            <LogoBadge size={150} ellipseSize={133} imageSize={140} />
          </div>
          <div className="w-full">
            <p className="font-poiret text-[24px] md:text-[40px] text-center">
              {isContact ? "Связаться с нами" : "Заказать программу FMD"}
            </p>
          </div>
          <div className="mt-6 w-full max-w-[420px] space-y-4 font-montserrat text-[14px] md:text-[20px] leading-relaxed">
            <p>Сейчас вы будете перенаправлены на номер</p>
            <p>
              Telegram{" "}
              <a href="tel:+79164280183" className="hover:underline focus:underline">
                +7 (916) 428-01-83
              </a>
            </p>
            <p>
              {isContact
                ? "где вы можете задать любые вопросы или просто пообщаться с нашим менеджером."
                : "где наш менеджер поможет вам быстро и удобно оформить заказ."}
            </p>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center w-full max-w-[420px]">
            <button
              className="bg-[#fffefb] opacity-70 rounded-[24.5px] w-full md:w-[200px] h-[48px] text-black text-[14px] md:text-[20px] font-montserrat border border-transparent hover:opacity-100 transition"
              onClick={onConfirm}
              type="button"
            >
              ПОДТВЕРДИТЬ
            </button>
            <button
              className="bg-[#d9d9d9] opacity-70 rounded-[24.5px] w-full md:w-[200px] h-[48px] text-black text-[14px] md:text-[20px] font-montserrat border border-transparent hover:opacity-100 transition"
              onClick={onClose}
              type="button"
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