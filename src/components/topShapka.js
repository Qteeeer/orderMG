//import { useState } from "react";
import bonus from "../pages/res/bonus.png";
import girl2 from "../pages/res/girl2.jpg";
const TopShapka = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        padding: 8,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 120,

          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <img
              alt="icon"
              style={{ width: 45, height: 45, marginTop: 5, borderRadius: 25 }}
              src={girl2}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <div style={{ fontSize: 15, color: "#aaa" }}>Привет</div>
              <div style={{ color: "#fff" }}>Ирина</div>
            </div>
          </div>
          <div>status</div>
          <div>podpiska</div>
        </div>
      </div>
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
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyItems: "center",
              gap: 20,
            }}
          >
            <div>
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
                <div
                  style={{ fontSize: 12, fontFamily: "Inter", color: "#fff" }}
                >
                  <b>БОНУСЫ</b>
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
                <div style={{ fontSize: 35 }}>
                  <b>₽</b>
                </div>
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
                    <b>4500</b>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="icon"
              style={{ width: 50, height: 50, marginTop: 15 }}
              src={bonus}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                borderRadius: 5,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "Inter",
                  color: "#fff",
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                <b>ИСПОЛЬЗОВАТЬ БОНУСЫ</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { TopShapka };
