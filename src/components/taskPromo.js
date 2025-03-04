import React, { useState } from "react";

const GenerPromo = () => {
  const promoCod = [
    { id: 1, cod: "BT-102" },
    { id: 2, cod: "BT-103" },
    { id: 3, cod: "BT-104" },
    { id: 4, cod: "BT-105" },
    { id: 5, cod: "BT-106" },
    { id: 6, cod: "BT-107" },
    { id: 7, cod: "BT-108" },
    { id: 8, cod: "BT-109" },
    { id: 9, cod: "BT-110" },
    { id: 10, cod: "BT-111" },
    { id: 11, cod: "BT-112" },
  ];

  // Состояние для хранения выбранного промокода
  // Состояние для хранения выбранного промокода
  const [selectedCode, setSelectedCode] = useState(null);

  // Функция для генерации случайного промокода
  const generateRandomCode = () => {
    const randomIndex = Math.floor(Math.random() * promoCod.length);
    setSelectedCode(promoCod[randomIndex].cod);
  };

  // Функция для копирования промокода в буфер обмена
  const copyCodeToClipboard = async () => {
    if (selectedCode) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(selectedCode);
          alert("Промокод скопирован");
        } else {
          // Альтернативный метод копирования текста
          const textarea = document.createElement("textarea");
          textarea.value = selectedCode;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          alert("Промокод скопирован. Использовать его можно лишь один раз!");
        }
      } catch (err) {
        console.error("Не удалось скопировать текст: ", err);
      }
    } else {
      alert("Сначала сгенерируйте промокод!");
    }
  };

  // Стили
  const styles = {
    container: {},
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      marginBottom: "10px",
    },
    code: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    copyButton: {
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          paddingBottom: 8,
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 120,
            background: "#5ce1e6",
            borderRadius: 16,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {/* Отображение выбранного промокода */}
          {selectedCode && (
            <>
              <div style={styles.code}>Промокод: {selectedCode}</div>
              <button style={styles.copyButton} onClick={copyCodeToClipboard}>
                Скопировать промокод
              </button>
            </>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 300,
              height: 40,
              background: "#000",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
            onClick={generateRandomCode}
          >
            <div style={{ fontSize: 20, fontFamily: "Inter", color: "#fff" }}>
              <b>ПОЛУЧИТЬ ПРОМОКОД</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GenerPromo };
