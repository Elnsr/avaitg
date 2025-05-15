const style: any = {
  position: "fixed",
  bottom: "20px",
  left: "20px",
  width: 200,
  borderRadius: "12px",
  color: "white",
  textDecoration: "none",
  backgroundColor: "#1682FB",
  padding: "20px",
  textAlign: "center",
  fontWeight: "bold",
  zIndex: 10000000
};

export const ContactMeTelegram = () => {
  return (
    <a style={{ ...style }} href="https://t.me/cashblaze127" target="__blink">
      Contact Me Telegram
    </a>
  );
};
