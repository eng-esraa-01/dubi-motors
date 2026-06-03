import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.card}>
        <div>
          <span className={styles.label}>جاهزة للانطلاق؟</span>
          <h2>قدّمي تطبيقك بصورة أوضح وابدئي جذب العملاء من أول زيارة</h2>
          <p>
            الصفحة مناسبة للإعلانات المدفوعة والسوشيال ميديا وكل حملة تحتاج
            رسالة مختصرة، شكل احترافي، وتجربة سريعة.
          </p>
        </div>
        <a href="tel:+971000000000" className={styles.button}>
          احجزي عرضك الآن
        </a>
      </div>
    </section>
  );
}
