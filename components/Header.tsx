import Image from "next/image";
import styles from "./Header.module.css";

const navItems = [
  { label: "الرئيسية", href: "#" },
  { label: "المميزات", href: "#features" },
  { label: "الخطوات", href: "#steps" },
  { label: "الأقسام", href: "#categories" },
];

type HeaderProps = {
  basePath?: string;
};

export default function Header({ basePath = "" }: HeaderProps) {
  return (
    <header className={styles.shell}>
      <div className={styles.header}>
        <a href={`${basePath}#`} className={styles.brand} aria-label="Dubi Motors">
          <Image
            src="/logo.png"
            alt="Dubi Motors"
            width={148}
            height={54}
            className={styles.logo}
            priority
          />
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={`${basePath}${item.href}`} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={`${basePath}#contact`} className={styles.primaryAction}>
            ابدأ إعلانك
          </a>
        </div>
      </div>
    </header>
  );
}
