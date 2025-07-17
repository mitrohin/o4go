import React from "react";
import "./actionButtonsShimmer.css";
import Modal from "./Modal";
import { useState } from "react";

export default function ActionButtons({ buttonColor }) {
  const [modalOpen, setModalOpen] = useState(false);
  const background = buttonColor || "rgba(255,255,255,0.7)";
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const handleConfirm = () => {
    window.open("https://wa.me/79164280183", "_blank");
    setModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center w-full max-w-[600px] md:max-w-none mt-4 md:mt-0">
        <button
          className="custom-shimmer rounded-[24.5px] w-full md:w-[300px] h-[48px] md:h-[50px] text-black text-[14px] md:text-[20px] font-montserrat shadow border border-gray transition-all duration-200"
          style={{ background }}
          onClick={handleOpen}
        >
          <span className="shimmer-content">ЗАКАЗАТЬ</span>
        </button>
        <button
          className="custom-shimmer rounded-[24.5px] w-full md:w-[300px] h-[48px] md:h-[50px] text-black text-[14px] md:text-[20px] font-montserrat shadow border border-gray transition-all duration-200"
          style={{ background }}
          onClick={handleOpen}
        >
          <span className="shimmer-content">СВЯЗАТЬСЯ С НАМИ</span>
        </button>
      </div>
      <Modal open={modalOpen} onClose={handleClose} onConfirm={handleConfirm} />
    </>
  );
} 