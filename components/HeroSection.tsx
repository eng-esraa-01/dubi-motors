import Header from "./Header";
import { highlights } from "./data";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const metrics = ["+37", "+150K", "+50K"];

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.heroHeader}>
        <Header />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>المنصة الخدمية والإعلانية الأوسع انتشارًا</span>
        <h1 className={styles.title}>
          انـشـر إعـلانـاتـك
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
