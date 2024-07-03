export default function Footer() {
  const arr = [
    {
      title: "facebook",
      url: "https://www.facebook.com/dingtwo?mibextid=LQQJ4d",
    },
    {
      title: "git",
      url: "https://github.com/pths411027",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/dingtwo0204?igsh=ZzQxenZkcHMzZWc3&utm_source=qr",
    },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/marcus-tsai-740973181",
    },
  ];
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        width: "100%",
        gap: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "black",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {arr.map(({ title, url }, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              border: "1px solid white",
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(url);
            }}
          >
            <img
              src={`social/${title}.png`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "100%",
              }}
            />
          </div>
        ))}
        <div
          style={{
            border: "1px solid white",
            width: "60px",
            height: "60px",
            borderRadius: "100%",
            cursor: "pointer",
            lineHeight: "60px",
            color: "white",
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "30px",
            fontWeight: "bold",
          }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1KI-sbhfTnbQ044iUYl9itHFq2Q0BZ3W6/view?usp=sharing"
            )
          }
        >
          CV
        </div>
      </div>
      <div
        style={{ color: "white", fontSize: "20px", fontFamily: "monospace" }}
      >
        Copyright © 2024 Marcus Tsai | All rights reserved.
      </div>
    </footer>
  );
}
