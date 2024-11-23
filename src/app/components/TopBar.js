import Image from "next/image";
import Link from "next/link";
const navigationLinks = [
  {
    id: 1,
    text: "FAQ",
    iconPath: "/icons/faq.svg",
    iconHeight: 12,
    iconWidth: 12,
    linkLocation: "/",
    altText: "faq-icon",
  },
  {
    id: 2,
    text: "Send Inquiry",
    iconPath: "/icons/message.svg",
    iconHeight: 16,
    iconWidth: 12,
    linkLocation: "/send-inquiry",
    altText: "inquiry-icon",
  },
  {
    id: 3,
    text: "Live Support",
    iconPath: "/icons/chat.svg",
    iconHeight: 14,
    iconWidth: 12,
    linkLocation: "/live-support",
    altText: "support-icon",
  },
  {
    id: 4,
    text: "Contact",
    iconPath: "/icons/profile2.svg",
    iconHeight: 15,
    iconWidth: 15,
    linkLocation: "/contact",
    altText: "contact-icon",
  },
];

export default function HeaderTopBar() {
  return (
    <div className="top-bar">
      {navigationLinks.map((link) => (
        <Link key={link.id} href={link.linkLocation}>
          <div className="top-container">
            <h3>{link.text}</h3>
            <Image
              src={link.iconPath}
              height={link.iconHeight}
              width={link.iconWidth}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
