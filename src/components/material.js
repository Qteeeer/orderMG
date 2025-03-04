const Material = () => {
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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 230,
            height: 25,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 12, fontFamily: "Inter", color: "#fff" }}>
            <b>ЗНАКОМСТВО С МАТЕРИАЛАМИ</b>
          </div>
        </div>
        <div
          style={{
            fontSize: 8,
            fontFamily: "Inter",
            color: "#000",
            marginLeft: 15,
            marginTop: 5,
          }}
        >
          <b>ПОПРОБУЙ НАШУ ПРОДУКЦИЮ ПО ЛУЧШИМ УСЛОВИЯМ</b>
        </div>
      </div>
    </div>
  );
};
export { Material };
