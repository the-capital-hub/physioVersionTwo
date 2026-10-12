
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "919XXXXXXXXX";

  const message =
    "Hello Rehabics, I would like to know more about your physiotherapy services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className="whatsappFloatingButton"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rehabics on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsappIconWrap">
        <FaWhatsapp className="whatsappBrandIcon" />
      </span>

      <span className="whatsappButtonLabel">
        Chat with us
      </span>
    </a>
  );
}
