import React, { useState } from "react";

const FaqText = () => {
  const historiClient = [
    { id: 1, data: "Какой-то вопрос?", text: "Ответ на этот вопрос." },
    { id: 2, data: "Еще один вопрос?", text: "Ответ на второй вопрос." },
    { id: 3, data: "Третий вопрос?", text: "Ответ на третий вопрос." },
    { id: 4, data: "Четвертый вопрос?", text: "Ответ на четвертый вопрос." },
    { id: 5, data: "Пятый вопрос?", text: "Ответ на пятый вопрос." },
    { id: 6, data: "Шестой вопрос?", text: "Ответ на шестой вопрос." },
  ];

  // Состояние для хранения ID активного вопроса
  const [activeId, setActiveId] = useState(null);

  // Функция для обработки клика на вопрос
  const handleQuestionClick = (id) => {
    setActiveId(activeId === id ? null : id); // Если уже открыт, закрыть; иначе открыть новый
  };

  // Стили
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      margin: 5,
      border: "1px solid #5ce1e6",
      borderRadius: "8px",
      maxWidth: "600px",
      padding: 10,
    },
    question: {
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
    },
    answer: {
      overflow: "hidden",
      maxHeight: activeId ? "100px" : "0", // Анимация высоты
      transition: "max-height 0.3s ease-in-out",
      paddingTop: activeId ? "10px" : "0",
      color: "#aaa",
      fontSize: 15,
    },
    divider: {
      borderBottom: "1px solid #ccc",
      margin: "10px 0",
    },
  };

  return (
    <div style={styles.container}>
      {historiClient.map((item) => (
        <div key={item.id}>
          {/* Вопрос */}
          <div
            style={styles.question}
            onClick={() => handleQuestionClick(item.id)}
          >
            {item.data}
          </div>

          {/* Ответ */}
          {activeId === item.id && (
            <div style={styles.answer}>
              <p>{item.text}</p>
            </div>
          )}

          {/* Разделитель */}
          <div style={styles.divider}></div>
        </div>
      ))}
    </div>
  );
};

export default FaqText;
