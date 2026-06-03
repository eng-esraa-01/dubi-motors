import { categories } from "./data";
import styles from "./CategoriesSection.module.css";

const featuredCategories = categories.slice(0, 4);
const directoryCategories = categories.slice(4);

const categoryNotes = [
  "إعلانات سريعة الوصول",
  "طلبات جادة ومباشرة",
  "عرض منظم وواضح",
  "ظهور أقوى داخل السوق",
];

export default function CategoriesSection() {
  return (
    <section id="categories" className={styles.section}>
      <div className={styles.heroPanel}>
        <div className={styles.copyBlock}>
          <span className={styles.kicker}>دليل الأقسام الإعلانية</span>
          <h2 className={styles.title}>اعرض إعلانك داخل القسم المناسب ليصل إلى العميل المناسب بشكل أسرع</h2>
          <p className={styles.description}>
            صُممت الأقسام لتمنح كل منتج أو خدمة مكانًا واضحًا داخل تجربة تصفح حديثة، مما يساعد على زيادة
            الظهور، تقليل التشتت، ورفع فرص التواصل المباشر مع المعلنين الجادين.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statPill}>
              <strong>37+</strong>
              <span>قسمًا متنوعًا</span>
            </div>
            <div className={styles.statPill}>
              <strong>24/7</strong>
              <span>ظهور مستمر للإعلانات</span>
            </div>
            <div className={styles.statPill}>
              <strong>Smart</strong>
              <span>تنظيم يسهل التصفح والبحث</span>
            </div>
          </div>
        </div>

        <div className={styles.featuredGrid}>
          {featuredCategories.map((category, index) => (
            <article key={category.id} className={styles.featuredCard}>
              <span className={styles.featuredIndex}>0{index + 1}</span>
              <h3>{category.name}</h3>
              <p>{categoryNotes[index]}</p>
              <span className={styles.featuredId}>#{category.id}</span>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.directoryPanel}>
        <div className={styles.directoryHeading}>
          <span>باقي الأقسام</span>
          <h3>اختر المسار الأنسب لنشاطك من دليل إعلاني واسع ومنظم</h3>
        </div>

        <div className={styles.grid}>
          {directoryCategories.map((category) => (
            <article key={category.id} className={styles.card}>
              <span className={styles.id}>#{category.id}</span>
              <h4>{category.name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
