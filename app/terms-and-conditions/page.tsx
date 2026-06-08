import type { Metadata } from "next";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Dubi Motors",
  description: "الشروط والأحكام الخاصة باستخدام منصة Dubi Motors وخدماتها الإعلانية.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.shell}>
      <div className={styles.heroWrap}>
        <HeroSection headerBasePath="/" />
      </div>

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>الشروط والأحكام</h1>
          <p className={styles.intro}>
            باستخدامك لمنصة Dubi Motors، فإنك توافق على الالتزام بالشروط والأحكام
            التالية المنظمة لاستخدام الموقع والخدمات المرتبطة به.
          </p>

          <section className={styles.section}>
            <h2>استخدام المنصة</h2>
            <p>
              يجب استخدام المنصة لأغراض مشروعة فقط، مع الالتزام بعدم نشر محتوى مضلل
              أو مخالف للقوانين أو منتهك لحقوق الآخرين.
            </p>
          </section>

          <section className={styles.section}>
            <h2>مسؤولية المحتوى</h2>
            <p>
              يتحمل المستخدم المسؤولية الكاملة عن صحة ودقة المعلومات والصور
              والتفاصيل التي يتم نشرها ضمن الإعلانات أو الملفات الشخصية.
            </p>
          </section>

          <section className={styles.section}>
            <h2>القبول والتعديل</h2>
            <p>
              تحتفظ المنصة بحق تعديل أو تحديث هذه الشروط في أي وقت، ويُعد استمرار
              الاستخدام بعد التحديث موافقة ضمنية على النسخة الجديدة.
            </p>
          </section>

          <section className={styles.section}>
            <h2>التعليق أو الإيقاف</h2>
            <p>
              يحق للمنصة تعليق أو إزالة أي إعلان أو حساب يثبت مخالفته للسياسات أو
              إساءة استخدامه للخدمة دون إشعار مسبق عند الضرورة.
            </p>
          </section>

          <section className={styles.section}>
            <h2>التواصل</h2>
            <p>
              لأي استفسارات تتعلق بالشروط والأحكام، يمكن التواصل عبر:
              info@dubaisale.app
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
