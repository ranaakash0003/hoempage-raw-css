import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer-container">
      <p>All rights reserved © 2024 | Drukland.de</p>
      <nav className="link-items">
        <Link href="/">Terms of Use</Link>
        <Link href="/">Site Map</Link>
        <Link href="/">Company Information</Link>
        <Link href="/">Cookie Settings</Link>
      </nav>
    </footer>
  );
}
