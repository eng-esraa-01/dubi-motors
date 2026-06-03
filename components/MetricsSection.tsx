import styles from "./MetricsSection.module.css";

const metrics = [
  {
    value: "37+",
    label: "قسمًا إعلانيًا",
    text: "من السيارات والعقارات إلى الخدمات والمنتجات، كل إعلان يجد مكانه داخل تصنيف واضح وسهل التصفح.",
  },
  {
    value: "24/7",
    label: "ظهور مستمر",
    text: "إعلاناتك تبقى متاحة للعملاء في أي وقت مع تجربة تصفح سريعة تساعد على الوصول واتخاذ القرار بسرعة.",
  },
  {
    value: "0%",
    label: "عمولة على النشر",
    text: "ابدأ عرض منتجاتك وخدماتك بدون تعقيد، مع نموذج نشر مباشر يركز على جذب الاستفسارات والطلبات.",
  },
];

export default function MetricsSection() {
  return (
    <section className={styles.metrics}>
      <div className={styles.introCard}>
        <span className={styles.kicker}>لماذا التطبيق فعّال للمعلنين؟</span>
        <h2 className={styles.title}>منصة إعلانية حديثة تساعدك على عرض إعلانك بشكل أسرع وأكثر إقناعًا</h2>
        <p className={styles.description}>
          صُمم التطبيق ليمنح أصحاب الإعلانات واجهة واضحة، أقسامًا منظمة، ومسارًا مختصرًا بين مشاهدة الإعلان
          والتواصل المباشر مع العميل.
        </p>
      </div>

      {metrics.map((metric) => (
        <article key={metric.label} className={styles.statCard}>
          <strong className={styles.value}>{metric.value}</strong>
          <h3 className={styles.label}>{metric.label}</h3>
          <p className={styles.text}>{metric.text}</p>
        </article>
      ))}
    </section>
  );
}
