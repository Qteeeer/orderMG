import { useState } from "react";
import { Caption } from "../caption";
import { Box } from "../box";

const styles = {
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

const copyCodeToClipboard = async (data) => {
  if (data) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(data);
        alert("Промокод скопирован");
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = data;
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

const Default = () => {
  const [selectedCode, setSelectedCode] = useState(null);

  const generateRandomCode = () => {
    const randomIndex = Math.floor(Math.random() * promoCod.length);
    setSelectedCode(promoCod[randomIndex].cod);
  };

  return (
    <Box
      flex
      ai
      gap
      sx={{
        p: 1,
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        backgroundColor: "#5ce1e6",
      }}
    >
      {selectedCode && (
        <>
          <div style={styles.code}>Промокод: {selectedCode}</div>
          <button
            style={styles.copyButton}
            onClick={() => copyCodeToClipboard(selectedCode)}
          >
            Скопировать промокод
          </button>
        </>
      )}
      <Caption
        caption="ПОЛУЧИТЬ ПРОМОКОД"
        onClick={generateRandomCode}
        sxFont={{ fontWeight: "bold", fontSize: 20 }}
      />
    </Box>
  );
};

export { Default as GetPromo };
