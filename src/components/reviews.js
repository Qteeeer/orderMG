const Riviews = () => {
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
          height: 40,
          background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)", // Градиент слева серый, справа белый
          borderRadius: 10,
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
            width: 80,
            height: 30,
            background: "#000",
            borderRadius: 10,
          }}
        >
          <div style={{ fontSize: 15, fontFamily: "Inter", color: "#fff" }}>
            ОТЗЫВЫ
          </div>
        </div>
      </div>
    </div>
  );
};
export { Riviews };
