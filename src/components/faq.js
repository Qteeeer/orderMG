const Faq = () => {
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
          height: 80,
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
            minWidth: 350,
            height: 50,
            background: "#000",
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontFamily: "Inter",
              color: "#fff",
              margin: 5,
            }}
          >
            <b>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</b>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Faq };
