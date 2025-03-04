import logo from "../pages/res/logo.png";

const AddAmboss = () => {
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
          height: 220,
          background: "#aaa",
          borderRadius: 16,
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 25,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 10, fontFamily: "Inter", color: "#fff" }}>
            <b>СТАНЬ АМБОССАДОРОМ</b>
          </div>
        </div>
        <img
          alt="icon"
          style={{ width: 130, height: 16, marginTop: 5 }}
          src={logo}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 25,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 10, fontFamily: "Inter", color: "#fff" }}>
            <b>СТАНЬ АМБОССАДОРОМ</b>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 25,
            background: "#000",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 10, fontFamily: "Inter", color: "#fff" }}>
            <b>ПОДАТЬ ЗАЯВКУ</b>
          </div>
        </div>
      </div>
    </div>
  );
};
export { AddAmboss };
