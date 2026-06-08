import type { Metadata } from "next";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Dubi Motors",
  description:
    "سياسة الخصوصية الخاصة بمنصة Dubi Motors وتوضيح كيفية جمع البيانات واستخدامها وحمايتها.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.shell}>
      <div className={styles.heroWrap}>
        <HeroSection headerBasePath="/" />
      </div>

      <main className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>سياسة الخصوصية</h1>
          <p className={styles.intro}>
            توضّح هذه الصفحة آلية جمع البيانات واستخدامها وحمايتها عند استخدام منصة
            Dubi Motors أو أي من خدماتها الرقمية.
          </p>

          <section className={styles.section}>
            <h2>البيانات التي نقوم بجمعها</h2>
            <p>
              قد نقوم بجمع بيانات أساسية مثل الاسم، البريد الإلكتروني، رقم الهاتف،
              ومحتوى الإعلانات أو الطلبات التي يتم إرسالها عبر المنصة.
            </p>
          </section>

          <section className={styles.section}>
            <h2>كيفية استخدام البيانات</h2>
            <p>
              تُستخدم البيانات لتحسين تجربة الاستخدام، إدارة الإعلانات، تسهيل
              التواصل بين الأطراف، وتقديم الدعم الفني والتحديثات المتعلقة بالخدمة.
            </p>
          </section>

          <section className={styles.section}>
            <h2>حماية المعلومات</h2>
            <p>
              نلتزم باتخاذ الإجراءات التقنية والتنظيمية المناسبة للمساعدة في حماية
              بيانات المستخدمين من الوصول غير المصرح به أو الاستخدام غير المشروع.
            </p>
          </section>

          <section className={styles.section}>
            <h2>مشاركة البيانات</h2>
            <p>
              لا يتم بيع بيانات المستخدمين. قد تتم مشاركة بعض البيانات فقط عند
              الحاجة لتشغيل الخدمة أو للامتثال للمتطلبات القانونية المعمول بها.
            </p>
          </section>

          <section className={styles.section}>
            <h2>التواصل والاستفسارات</h2>
            <p>
              إذا كان لديك أي استفسار بخصوص سياسة الخصوصية، يمكنك التواصل عبر البريد
              الإلكتروني: info@dubaisale.app
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
