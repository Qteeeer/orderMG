const Kupon = () => {
  const kuponCod = [
    { id: 1, nominal: 1000, count: 10 },
    { id: 2, nominal: 3000, count: 10 },
    { id: 3, nominal: 5000, count: 10 },
    { id: 4, nominal: 10000, count: 10 },
    { id: 5, nominal: 30000, count: 10 },
    { id: 6, nominal: 50000, count: 10 },
  ];

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 15,
      margin: 10,
    },
    coupon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "calc(33.33% - 10px)", // Ширина каждого купона (33.33% от ширины контейнера минус отступ)
      height: 90,
      borderRadius: "8px",
      boxSizing: "border-box",
      color: "#fff",
      background: "#5ce1e6",
    },
  };

  return (
    <div>
      <div
        style={{
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
            width: 200,
            height: 25,
            background: "#5ce1e6",
            borderRadius: 5,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 15, fontFamily: "Inter", color: "#000" }}>
            <b>МАГАЗИН БОНУСОВ</b>
          </div>
        </div>
      </div>
      <div style={styles.container}>
        {kuponCod.map((coupon) => (
          <div key={coupon.id} style={styles.coupon}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 80,
                height: 25,
                background: "#000",
                borderRadius: 10,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}
            >
              <div style={{ fontSize: 15, fontFamily: "Inter", color: "#fff" }}>
                <b>КУПОН</b>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                gap: 7,
                marginTop: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                  background: "#000",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontFamily: "Inter",
                    color: "#fff",
                    padding: 3,
                  }}
                >
                  <b>{coupon.nominal}</b>
                </div>
              </div>
              <div style={{ fontSize: 30, color: "#000" }}>
                <b>₽</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { Kupon };
