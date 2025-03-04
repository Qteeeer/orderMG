import logo from "../pages/res/logo.png";

const Ambossador = () => {
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
          background: "#d6ece8",
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 120,
            background: "#d6ece8",
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
              width: 275,
              height: 25,
              background: "#000",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
            }}
          >
            <div style={{ fontSize: 15, fontFamily: "Inter", color: "#fff" }}>
              <b>СТАНЬ АМБОССАДОРОМ</b>
            </div>
          </div>
          <img
            alt="icon"
            style={{ width: 130, height: 16, marginTop: 5 }}
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};
export { Ambossador };
