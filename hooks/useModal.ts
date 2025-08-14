"use client";

import { useEffect, useCallback, useState } from "react";
import { useModalStore } from "@/stores/modalStore";

export default function useModal() {
  const { isThanks, modalClosed, setIsThanks, setModalClosed } = useModalStore();
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const openModal = useCallback((buttonType?: "banner" | "card") => {
    setModalClosed(true);
    document.body.classList.add("overflow-hidden");

    if (window.ym) {
      if (buttonType === "banner") {
        window.ym(97898876, "reachGoal", "banner_button");
      } else if (buttonType === "card") {
        window.ym(97898876, "reachGoal", "uznat_button");
      }
    }
  }, [setModalClosed]);

  const closeModal = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("modal") || target.classList.contains("modal__closed")) {
      setModalClosed(false);
      document.body.classList.remove("overflow-hidden");
      history.replaceState(null, "", " ");
    }
  }, [setModalClosed]);

  const validateName = (name: string) => name.trim() !== "";
  const validateEmail = (email: string) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  const validatePhone = (phone: string) => /^\+7\d{10}$/.test(phone);

  const submitForm = useCallback(
    async (name: string, email: string, phone: string) => {
      if (!validateName(name)) {
        setErrorName(true);
        return;
      }
      if (!validateEmail(email)) {
        setErrorEmail(true);
        return;
      }
      if (!validatePhone(phone)) {
        setErrorPhone(true);
        return;
      }

      try {
        const response = await fetch("https://api.zdorovyeiturizm.ru", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        });

        if (!response.ok) {
          throw new Error(`Ошибка при отправке формы: ${response.statusText}`);
        }

        setIsThanks(true);
        window.location.hash = "overlay_button";

        if (window.ym) {
          window.ym(97898876, "reachGoal", "overlay_button");
        }
      } catch (e: unknown) {
        if(e instanceof Error) {
                console.error("Ошибка при отправке:", e.message);
        }
       
      }
    },
    [setIsThanks]
  );

  useEffect(() => {
    if (modalClosed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalClosed]);

  return {
    modalClosed,
    isThanks,
    closeModal,
    openModal,
    submitForm,
    errorName,
    errorEmail,
    errorPhone,
  };
}
