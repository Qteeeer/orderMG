const SocProj = () => {
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
          height: 60,
          background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)", // Градиент слева серый, справа белый
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 350,
            height: 30,
            background: "#000",
            borderRadius: 7,
          }}
        >
          <div style={{ fontSize: 15, fontFamily: "Inter", color: "#fff" }}>
            СОЦИАЛЬНЫЙ ОБРАЗОВАТЕЛЬНЫЙ ПРОЕКТ
          </div>
        </div>
      </div>
    </div>
  );
};
export { SocProj };
