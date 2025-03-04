import cap from "../pages/res/cap.png";
const CloudMaster = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 350,
            height: 50,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <div style={{ fontSize: 32, fontFamily: "Inter", color: "#fff" }}>
            <b>КЛУБ МАСТЕРСТВА</b>
          </div>
        </div>
        <div style={{ fontSize: 10, fontFamily: "Inter", color: "#000" }}>
          <b>ВЫВОДИМ LASH ИНДУСТРИЮ НА НОВЫЙ УРОВЕНЬ</b>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 8,
            paddingRight: 8,
            gap: 300,
          }}
        >
          <img alt="icon" style={{ width: 40, height: 40 }} src={cap} />
          <img alt="icon" style={{ width: 40, height: 40 }} src={cap} />
        </div>
      </div>
    </div>
  );
};
export { CloudMaster };
