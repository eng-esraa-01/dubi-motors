import { steps } from "./data";
import styles from "./StepsSection.module.css";

export default function StepsSection() {
  return (
    <section id="steps" className={styles.section}>
      <div className={styles.heading}>
        <span>خطوات بسيطة</span>
        <h2>رحلة قصيرة وواضحة من إضافة الإعلان إلى استقبال الطلبات</h2>
      </div>

      <div className={styles.grid}>
        {steps.map((step, index) => (
          <div key={step} className={styles.card}>
            <span className={styles.number}>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
