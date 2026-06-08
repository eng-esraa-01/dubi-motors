import type { IconType } from "react-icons";
import {
  FaAppleAlt,
  FaBath,
  FaBolt,
  FaBookOpen,
  FaBoxOpen,
  FaBriefcase,
  FaCar,
  FaChair,
  FaDog,
  FaDumbbell,
  FaEnvelopeOpenText,
  FaGem,
  FaGraduationCap,
  FaHammer,
  FaHeartPulse,
  FaHouse,
  FaHouseChimneyMedical,
  FaLightbulb,
  FaMotorcycle,
  FaPaw,
  FaScrewdriverWrench,
  FaShirt,
  FaShop,
  FaStore,
  FaToolbox,
  FaTruck,
  FaTruckFast,
  FaUserDoctor,
  FaUserGraduate,
  FaUtensils,
  FaWheatAwn,
  FaWrench,
} from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { LuPackageSearch } from "react-icons/lu";
import { MdFactory, MdOutlinePrecisionManufacturing } from "react-icons/md";
import { PiShippingContainerFill } from "react-icons/pi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { categories } from "./data";
import styles from "./CategoriesSection.module.css";

const featuredCategories = categories.slice(0, 4);
const directoryCategories = (() => {
  const items = categories.slice(4);
  const shippingIndex = items.findIndex((category) => category.id === 19);
  const jewelryIndex = items.findIndex((category) => category.id === 24);

  if (shippingIndex === -1 || jewelryIndex === -1) {
    return swapHomeAndExport(items);
  }

  const [jewelryCategory] = items.splice(jewelryIndex, 1);
  items.splice(shippingIndex + 1, 0, jewelryCategory);

  return swapHomeAndExport(items);
})();

const categoryNotes = [
  "إعلانات سريعة الوصول",
  "طلبات جادة ومباشرة",
  "عرض منظم وواضح",
  "ظهور أقوى داخل السوق",
];

const categoryIcons: Record<number, IconType> = {
  1: FaCar,
  2: FaHouse,
  3: FaCar,
  4: FaScrewdriverWrench,
  5: GiTeacher,
  6: FaUserDoctor,
  7: FaBriefcase,
  8: FaAppleAlt,
  9: FaUtensils,
  10: FaStore,
  11: TbToolsKitchen2,
  12: FaHouseChimneyMedical,
  13: FaChair,
  14: FaToolbox,
  15: FaBath,
  16: FaBolt,
  17: FaHeartPulse,
  18: FaGraduationCap,
  19: FaTruckFast,
  20: FaShirt,
  21: FaTruck,
  22: FaPaw,
  23: FaEnvelopeOpenText,
  24: FaGem,
  25: FaWrench,
  26: FaHammer,
  27: FaToolbox,
  28: FaDumbbell,
  29: FaMotorcycle,
  30: MdOutlinePrecisionManufacturing,
  31: MdFactory,
  32: FaLightbulb,
  33: LuPackageSearch,
  34: FaBoxOpen,
  35: PiShippingContainerFill,
  36: FaDog,
  37: FaTruckFast,
};

function CategoryIcon({ id, className }: { id: number; className?: string }) {
  const Icon = categoryIcons[id] ?? FaShop;
  return <Icon className={className} aria-hidden="true" />;
}

function swapHomeAndExport(items: typeof categories) {
  const homeIndex = items.findIndex((category) => category.id === 12);
  const exportIndex = items.findIndex((category) => category.id === 37);

  if (homeIndex === -1 || exportIndex === -1) {
    return swapKidsAndGyms(items);
  }

  [items[homeIndex], items[exportIndex]] = [items[exportIndex], items[homeIndex]];
  return swapKidsAndGyms(items);
}

function swapKidsAndGyms(items: typeof categories) {
  const kidsIndex = items.findIndex((category) => category.id === 22);
  const gymsIndex = items.findIndex((category) => category.id === 28);

  if (kidsIndex === -1 || gymsIndex === -1) {
    return items;
  }

  [items[kidsIndex], items[gymsIndex]] = [items[gymsIndex], items[kidsIndex]];
  return items;
}

export default function CategoriesSection() {
  return (
    <section id="categories" className={styles.section}>
      <div className={styles.heroPanel}>
        <div className={styles.copyBlock}>
          <span className={styles.kicker}>دليل الأقسام الإعلانية</span>
          <h2 className={styles.title}>
            اعرض إعلانك داخل القسم المناسب ليصل إلى العميل المناسب بشكل أسرع
          </h2>
          <p className={styles.description}>
            صُممت الأقسام لتمنح كل منتج أو خدمة مكانًا واضحًا داخل تجربة تصفح
            حديثة، مما يساعد على زيادة الظهور، تقليل التشتت، ورفع فرص التواصل
            المباشر مع المعلنين الجادين.
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
              <span className={styles.featuredIconWrap}>
                <CategoryIcon id={category.id} className={styles.featuredIcon} />
              </span>
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
          {directoryCategories.map((category, index) => (
            <article
              key={category.id}
              className={`${styles.card} ${
                index === directoryCategories.length - 1 ? styles.lastCard : ""
              }`}
            >
              <span className={styles.iconBadge}>
                <CategoryIcon id={category.id} className={styles.cardIcon} />
              </span>
              <h4>{category.name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
