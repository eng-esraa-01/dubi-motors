import Image from "next/image";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.card}>
        <div>
          <span className={styles.label}>جاهزة للانطلاق؟</span>
          <h2>قدّم تطبيقك بصورة أوضح وابدأ جذب العملاء من أول زيارة</h2>
          <p>
            الصفحة مناسبة للإعلانات المدفوعة والسوشيال ميديا وكل حملة تحتاج
            رسالة مختصرة، شكل احترافي، وتجربة سريعة.
          </p>

          <div className={styles.storeButtons}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className={styles.storeButton}
              aria-label="تنزيل التطبيق من Google Play"
            >
              <Image
                src="/google-play.png"
                alt=""
                width={22}
                height={22}
                className={styles.storeIcon}
              />
              <span className={styles.storeText}>
                <small>حمّل التطبيق من</small>
                <strong>Google Play</strong>
              </span>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className={styles.storeButton}
              aria-label="تنزيل التطبيق من App Store"
            >
              <Image
                src="/app-store.png"
                alt=""
                width={22}
                height={22}
                className={styles.storeIcon}
              />
              <span className={styles.storeText}>
                <small>حمّل التطبيق من</small>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
        </div>

        <a href="tel:+971000000000" className={styles.button}>
          احجز عرضك الآن
        </a>
      </div>
    </section>
  );
}
