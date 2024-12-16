import React, { useState } from "react";
import { Header } from "../../Layout/Header";
import { Description } from "../Description";
import { Buttons } from "../Buttons";
import { AddForm } from "../../Form";
import { Modal } from "../../Modal";
import Hamburger from "hamburger-react";
import styles from "./GeneralPage.module.css";
import stylesGam from "./Slider.module.css";

export const GeneralPage = ({ isTabletOrMobile }) => {
  const [isModalOpen, setModalState] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className={isTabletOrMobile ? styles.wrapperPhone : styles.wrapper}>
      <div className={isTabletOrMobile ? styles.marPhone : styles.mar}>
        <Header isTabletOrMobile={isTabletOrMobile} />
        <div id="modal" className={styles.modal}>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <AddForm closeModal={closeModal} />
          </Modal>
        </div>
        {isTabletOrMobile && (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#e7e7e7" />
            {isOpen && (
              <div className={stylesGam.slider}>
                <ul>
                  <li>Наши проекты</li>
                  <div className={stylesGam.line}></div>
                  <li>Материал</li>
                  <div className={stylesGam.line}></div>
                  <li>О компании</li>
                  <div className={stylesGam.line}></div>
                  <li>Этапы работ</li>
                  <div className={stylesGam.line}></div>
                  <li>Наше производство</li>
                  <div className={stylesGam.line}></div>
                  <li>Вопросы и ответы</li>
                  <div className={stylesGam.line}></div>
                  <li>Отзывы</li>
                  <div className={stylesGam.line}></div>
                  <li>+89231231242</li>
                  <div className={stylesGam.line}></div>
                </ul>
              </div>
            )}
          </>
        )}
        <div className={styles.main}>
          <Description isTabletOrMobile={isTabletOrMobile} />
          <Buttons
            handleOpenModal={handleOpenModal}
            isTabletOrMobile={isTabletOrMobile}
          />
        </div>
      </div>
      <footer>
        <p>© NAAM 2024</p>
        <p>Политика конфиденциальности</p>
      </footer>
    </div>
  );
};
