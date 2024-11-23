import Image from "next/image";

export default function TopBar() {
  return (
    <header className="header-container">
      <h1>Drukland.de</h1>

      <div className="header-menu">
        <div className="menu-item">
          Business
          <Image
            src="/icons/downarrow.svg"
            alt="dropdown"
            height={8}
            width={14}
          />
        </div>
        <div className="menu-item">
          Products
          <Image
            src="/icons/downarrow.svg"
            alt="dropdown"
            height={8}
            width={14}
          />
        </div>
        <div className="menu-item">About Us</div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <Image
            src="/icons/search.svg"
            alt="search-icon"
            height={16}
            width={16}
          />
        </div>
      </div>

      <div className="icon-container">
        <div className="icon">
          <Image src="/icons/ship.svg" alt="shipping" height={18} width={22} />
        </div>
        <div className="icon">
          <Image
            src="/icons/profile.svg"
            alt="user-profile"
            height={18}
            width={24}
          />
        </div>
        <div className="icon">
          <Image
            src="/icons/basket.svg"
            alt="shopping-basket"
            height={24}
            width={24}
          />
        </div>
      </div>
    </header>
  );
}
