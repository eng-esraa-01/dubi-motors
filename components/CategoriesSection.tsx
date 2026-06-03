import { categories } from "./data";
import styles from "./CategoriesSection.module.css";

export default function CategoriesSection() {
  return (
    <section id="categories" className={styles.section}>
      <div className={styles.heading}>
        <span>الأقسام المتاحة</span>
        <h2>اختاري القسم المناسب لنشاطك من بين 37 قسماً متنوعاً</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <span className={styles.id}>{category.id}</span>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
