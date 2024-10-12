import React, { ReactNode } from "react";
import Portal from "../Portal";
import style from "./Modal.module.scss";

interface Props {
  children: ReactNode;
  modalName?: string;
  label?: string;
}

const BottomModal = ({ children, modalName, label }: Props) => {
  console.log(`modalName : `, modalName);
  return (
    <>
      <Portal selector="#modal">
        <div className={`${style["modal__overlay"]} ${style["modal--bottom"]}`}>
          <div
            className={`${style["modal__content-box"]} ${style["modal-content--full-width"]} ${style["modal--bottom"]}`}
          >
            <h3 className={style["modal__title"]}>{label}</h3>
            {children}
          </div>
        </div>
      </Portal>
    </>
  );
};

export default BottomModal;
