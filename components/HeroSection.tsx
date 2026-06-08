import Image from "next/image";
import Header from "./Header";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  headerBasePath?: string;
};

export default function HeroSection({ headerBasePath = "" }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.heroHeader}>
        <Header basePath={headerBasePath} />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>المنصة الخدمية والإعلانية الأوسع انتشارًا</span>
        <h1 className={styles.title}>
          انشـر إعـلانـاتـك
          <br />
          <span>مـجـانًـا وبـدون عـمـولـة</span>
        </h1>

        <p className={styles.description}>
          سواءً كنت تبحث عن سيارة أو عقار أو خدمة أو منتج متخصص، تمنحك
          <strong> Dubi Motors </strong>
          مساحة عرض واضحة، سريعة، وسهلة الوصول للعملاء من أول زيارة.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryButton}>
            ابدأ بنشر إعلانك مجانًا
          </a>
          <a href="#categories" className={styles.secondaryButton}>
            اكتشف الأقسام
          </a>
        </div>

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

      <div className={styles.previewCard}>
        <div className={styles.previewHeader}>
          <span>رينج روفر سبورت 2024</span>
          <div className={styles.previewDots}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={styles.previewBody}>
          <div className={styles.previewBadgeRow}>
            <span>إيجار السيارات</span>
            <strong>حصري ونشط</strong>
          </div>

          <h3>رينج روفر سبورت إصدار رياضي خاص</h3>

          <div className={styles.previewMeta}>
            <span>دبي مارينا</span>
            <strong>950 درهم / يوم</strong>
          </div>
        </div>

        <div className={styles.previewFooter}>
          <div>
            <strong>حجز فوري</strong>
            <span>بدون مراجعة مطولة</span>
          </div>
          <div>
            <strong>معلن موثق</strong>
            <span>ضمان وأمان</span>
          </div>
        </div>
      </div>
    </section>
  );
}
