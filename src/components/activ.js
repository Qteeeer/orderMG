import girl1 from "../pages/res/girl1.jpg";
import girl2 from "../pages/res/girl2.jpg";
import girl3 from "../pages/res/girl3.jfif";

const Activ = () => {
  return (
    <div
      style={{
        minHseight: 180,
        background: "#000",
        borderRadius: 5,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid #5ce1e6",
        display: "flex",

        flexDirection: "column",
        gap: 5,
        margin: 10,
      }}
    >
      <div
        style={{
          background: "#5ce1e6",
          width: "100%",
          height: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b>САМЫЕ АКТИВНЫЕ МЕСЯЦА</b>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#fff",
          marginTop: 15,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            fontSize: 15,
            gap: 25,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <div>СОЗДАТЕЛЬ КОНТЕНТА</div>
          <div>КОМЕНТАТОР</div>
          <div>ПРОМО-МАСТЕР</div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              alt="icon"
              style={{ width: 35, height: 35, marginTop: 5, borderRadius: 25 }}
              src={girl1}
            />
            <img
              alt="icon"
              style={{ width: 30, height: 30, marginTop: 5, borderRadius: 25 }}
              src={girl2}
            />
            <img
              alt="icon"
              style={{ width: 25, height: 25, marginTop: 5, borderRadius: 25 }}
              src={girl3}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              alt="icon"
              style={{ width: 35, height: 35, marginTop: 5, borderRadius: 25 }}
              src={girl1}
            />
            <img
              alt="icon"
              style={{ width: 30, height: 30, marginTop: 5, borderRadius: 25 }}
              src={girl2}
            />
            <img
              alt="icon"
              style={{ width: 25, height: 25, marginTop: 5, borderRadius: 25 }}
              src={girl3}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              alt="icon"
              style={{ width: 35, height: 35, marginTop: 5, borderRadius: 25 }}
              src={girl1}
            />
            <img
              alt="icon"
              style={{ width: 30, height: 30, marginTop: 5, borderRadius: 25 }}
              src={girl2}
            />
            <img
              alt="icon"
              style={{ width: 25, height: 25, marginTop: 5, borderRadius: 25 }}
              src={girl3}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div
          style={{
            background: "#5ce1e6",
            width: 200,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <b>ПОДРОБНЕЕ</b>
        </div>
      </div>
    </div>
  );
};
export { Activ };
