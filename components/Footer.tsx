import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "رئيسية دوبي موتورز", href: "#" },
  { label: "تصفح الأقسام الـ 37", href: "#categories" },
  { label: "حالة عرض الإعلانات", href: "#features" },
  { label: "محاكاة رفع الإعلانات مجانًا", href: "#contact" },
];

const contactItems = [
  "support@dubimotors.com",
  "+971 4 555 4321",
  "برج المارينا، ص.ب 4519، دبي",
];

const socialItems = ["in", "ig", "x", "f"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.aboutColumn}>
            <Image
              src="/logo.png"
              alt="Dubi Motors"
              width={196}
              height={72}
              className={styles.logo}
            />
            <p className={styles.aboutText}>
              تطبيق DubiMotors هو المنصة الإعلانية الرائدة في دبي والإمارات العربية
              المتحدة والشرق الأوسط، مدعومة بـ 37 قسمًا شاملًا ومحرك بحث ذكي يسهّل
              سرعة التواصل المباشر والآمن بين عارضي السلع والخدمات والباحثين عنها.
            </p>
          </div>

          <div className={styles.linksColumn}>
            <h3>روابط تهمك</h3>
            <div className={styles.links}>
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactColumn}>
            <h3>اتصل بالدعم الفني</h3>
            <div className={styles.contactList}>
              {contactItems.map((item) => (
                <span key={item} className={styles.contactItem}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            {socialItems.map((item) => (
              <a key={item} href="#" className={styles.socialIcon} aria-label={item}>
                {item}
              </a>
            ))}
          </div>

          <span className={styles.copyright}>
            © 2026 DubiMotors. جميع الحقوق محفوظة لشركة الإمارات للحلول الإعلانية.
          </span>
        </div>
      </div>
    </footer>
  );
}
