import makeup from "../pages/res/makeup.png";
import tg from "../pages/res/tg.png";

const Service = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
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
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 25,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 12, fontFamily: "Inter", color: "#fff" }}>
            <b>СЛУЖБА ЗАБОТЫ</b>
          </div>
        </div>
        <div style={{ fontSize: 8, fontFamily: "Inter", color: "#000" }}>
          <b>ЗАДАТЬ ВОПРОС</b>
        </div>
        <img
          alt="icon"
          style={{ width: 50, height: 50, marginTop: 5 }}
          src={tg}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: 120,
          background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)", // Градиент слева серый, справа белый
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "none",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 170,
            height: 25,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 12, fontFamily: "Inter", color: "#fff" }}>
            <b>КУПИТЬ МАТЕРИАЛЫ</b>
          </div>
        </div>
        <div style={{ fontSize: 8, fontFamily: "Inter", color: "#000" }}>
          <b>ЛУЧНИЕ ЦЕНЫ НА САЙТЕ</b>
        </div>
        <img
          alt="icon"
          style={{ width: 50, height: 50, marginTop: 5 }}
          src={makeup}
        />
      </div>
    </div>
  );
};
export { Service };
