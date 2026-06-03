import { features } from "./data";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.heading}>
        <span>لماذا هذه الصفحة فعالة؟</span>
        <h2>محتوى مباشر وتصميم منظم يساعدان على الظهور وتحفيز التواصل</h2>
      </div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
