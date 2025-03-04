import React, { useId } from "react";
import x from "../pages/res/x.png";

/**
 * @typedef {Object} MyProps
 * @property {array} [value] - Значения.
 * @property {Function} [setValue] - Установка значения.
 * @property {string} [caption] - Заголовок.
 * @property {number} [rows] - Мультистрочный текст.
 * @property {number} [maxLength] - Максимальное количество символов по умолчанию 300.
 *
 */

/**
 * @param {MyProps} props - Свойства компонента.
 * @returns {JSX.Element} The custom button
 */

const Input = (props) => {
  const {
    caption,
    value,
    setValue,
    rows,
    maxLength = 300,
    type, // Добавляем параметр type для указания типа ввода
    ...other
  } = props;

  const id = useId();

  // Функция для обработки ввода номера телефона
  const handlePhoneInput = (e) => {
    let inputValue = e.target.value;

    // Удаляем все символы, кроме цифр
    inputValue = inputValue.replace(/\D/g, "");

    // Ограничиваем длину до 10 цифр после +7
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 11);
    }

    // Добавляем "+7" в начало, если число начинается с цифры
    if (inputValue && !inputValue.startsWith("7")) {
      inputValue = "7" + inputValue;
    }

    // Форматируем номер как "+7 999 999 99 99"
    let formattedValue = "";
    if (inputValue.length > 0) {
      const code = "+7 ";
      const firstPart = inputValue.slice(1, 4); // Первые 3 цифры
      const secondPart = inputValue.slice(4, 7); // Следующие 3 цифры
      const thirdPart = inputValue.slice(7, 9); // Следующие 2 цифры
      const fourthPart = inputValue.slice(9, 11); // Последние 2 цифры

      formattedValue =
        code +
        firstPart +
        (secondPart ? ` ${secondPart}` : "") +
        (thirdPart ? ` ${thirdPart}` : "") +
        (fourthPart ? ` ${fourthPart}` : "");
    }

    // Обновляем значение
    setValue?.(formattedValue);
  };

  // Функция для обработки общего ввода
  const handleChange = (e) => {
    if (type === "phone") {
      handlePhoneInput(e);
    } else {
      setValue?.(e.target.value.slice(0, maxLength));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: 10,
      }}
    >
      <label htmlFor={id}>{caption || ""}</label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 6,
          border: "1px solid rgba(253, 253, 253, 0.64)",
          borderRadius: 4,
          backgroundColor: "#A8F6F9",
          minWidth: 250,
          alignItems: "center",
        }}
      >
        {rows > 0 ? (
          <textarea
            id={id}
            value={value}
            onChange={handleChange}
            rows={rows}
            style={{
              backgroundColor: "none",
              border: "none",
              background: "transparent",
              color: "#050505",
              flexGrow: 1,
              fontSize: 15,
            }}
            {...other}
          />
        ) : (
          <input
            id={id}
            value={value}
            style={{
              backgroundColor: "none",
              border: "none",
              background: "transparent",
              color: "#000000",
              flexGrow: 1,
              fontSize: 15,
            }}
            onChange={handleChange}
            {...(type === "phone"
              ? {
                  type: "tel", // Указываем type="tel" для телефонного ввода
                  inputMode: "numeric", // Подсказываем браузеру, что нужна цифровая клавиатура
                }
              : {})}
            {...other}
          />
        )}
        {!!value && (
          <img
            alt="icon"
            style={{ width: 20, height: 20, cursor: "pointer" }}
            src={x}
            onClick={() => {
              setValue?.(type === "phone" ? "+7 " : "");
            }}
          />
        )}
      </div>
      {rows > 0 ? (
        <p style={{ padding: 0, margin: 0 }}>
          {`${value?.length || 0}/${maxLength}`}
        </p>
      ) : (
        <div></div>
      )}
      {/* Проверка формата номера телефона */}
      {type === "phone" &&
        value &&
        !/^\+7\d{10}$/.test(value.replaceAll(" ", "")) &&
        value !== "+7 " && (
          <p style={{ color: "red", marginTop: 4 }}>
            Неверный формат номера телефона (пример: +7 999 999 99 99)
          </p>
        )}
    </div>
  );
};

export { Input };
