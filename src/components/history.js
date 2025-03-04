import React from "react";
const Histori = () => {
  const historiClient = [
    { id: 1, data: "27.05.22", text: "Выдан купон на 5000 руб." },
    { id: 2, data: "19.06.22", text: "Выдан купон на 5000 руб." },
    { id: 3, data: "10.07.22", text: "Выдан купон на 5000 руб." },
    { id: 4, data: "16.07.22", text: "Выдан купон на 5000 руб." },
    { id: 5, data: "20.08.22", text: "Выдан купон на 5000 руб." },
    { id: 6, data: "24.08.22", text: "Выдан купон на 5000 руб." },
  ];

  const styles = {
    container: {
      border: "1px solid #5ce1e6",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "50px auto",
    },
    title: {
      color: "#f0f0f0",
      marginBottom: "20px",
    },
    item: {
      color: "#f0f0f0",
      marginBottom: "10px",
      fontSize: 12,
      margin: 10,
    },
    divider: {
      borderBottom: "1px solid #5ce1e6",
      margin: "10px 0",
    },
  };

  return (
    <div style={{ margin: 10 }}>
      <div style={styles.container}>
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
              width: 100,
              height: 25,
              background: "#5ce1e6",
              borderRadius: 5,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 15, fontFamily: "Inter", color: "#000" }}>
              <b>ИСТОРИЯ</b>
            </div>
          </div>
        </div>
        {historiClient.map((item, index) => (
          <React.Fragment key={item.id}>
            <div style={styles.item}>
              <div>
                {item.data}: {item.text}
              </div>
            </div>
            {index < historiClient.length - 1 && <div style={styles.divider} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Histori;
