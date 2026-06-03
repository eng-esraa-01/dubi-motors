import CategoriesSection from "../components/CategoriesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import MetricsSection from "../components/MetricsSection";
import StepsSection from "../components/StepsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={`${styles.sectionBand} ${styles.heroBand}`}>
        <HeroSection />
      </div>

      <div className={`${styles.sectionBand} ${styles.metricsBand}`}>
        <MetricsSection />
      </div>

      <div className={`${styles.sectionBand} ${styles.categoriesBand}`}>
        <CategoriesSection />
      </div>

      <div className={`${styles.sectionBand} ${styles.stepsBand}`}>
        <StepsSection />
      </div>

      <div className={`${styles.sectionBand} ${styles.featuresBand}`}>
        <FeaturesSection />
      </div>

      <div className={`${styles.sectionBand} ${styles.ctaBand}`}>
        <CtaSection />
      </div>

      <Footer />
    </main>
  );
}
