/**
 * Theme Demo Component
 * 展示所有主題顏色的範例組件
 */

import styles from "./ThemeDemo.module.scss";

const ThemeDemo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>主題顏色展示</h1>

      {/* Primary Colors */}
      <section className={styles.section}>
        <h2>Primary Colors</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.primary}`}></div>
            <p>Primary</p>
          </div>
          <div className={styles.colorCard}>
            <div
              className={`${styles.colorBox} ${styles.primaryHover}`}
            ></div>
            <p>Primary Hover</p>
          </div>
          <div className={styles.colorCard}>
            <div
              className={`${styles.colorBox} ${styles.primaryContainer}`}
            ></div>
            <p>Primary Container</p>
          </div>
        </div>
      </section>

      {/* Secondary Colors */}
      <section className={styles.section}>
        <h2>Secondary Colors</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.secondary}`}></div>
            <p>Secondary</p>
          </div>
          <div className={styles.colorCard}>
            <div
              className={`${styles.colorBox} ${styles.secondaryHover}`}
            ></div>
            <p>Secondary Hover</p>
          </div>
          <div className={styles.colorCard}>
            <div
              className={`${styles.colorBox} ${styles.secondaryContainer}`}
            ></div>
            <p>Secondary Container</p>
          </div>
        </div>
      </section>

      {/* Accent Colors */}
      <section className={styles.section}>
        <h2>Accent Colors</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.accent}`}></div>
            <p>Accent</p>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.accentHover}`}></div>
            <p>Accent Hover</p>
          </div>
        </div>
      </section>

      {/* State Colors */}
      <section className={styles.section}>
        <h2>State Colors</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.success}`}></div>
            <p>Success</p>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.warning}`}></div>
            <p>Warning</p>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.error}`}></div>
            <p>Error</p>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.info}`}></div>
            <p>Info</p>
          </div>
        </div>
      </section>

      {/* Background & Surface Colors */}
      <section className={styles.section}>
        <h2>Background & Surface</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.background}`}></div>
            <p>Background</p>
          </div>
          <div className={styles.colorCard}>
            <div
              className={`${styles.colorBox} ${styles.backgroundSecondary}`}
            ></div>
            <p>Background Secondary</p>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.surface}`}></div>
            <p>Surface</p>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorBox} ${styles.surfaceHover}`}></div>
            <p>Surface Hover</p>
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className={styles.section}>
        <h2>互動元素範例</h2>
        <div className={styles.buttonsGrid}>
          <button className={styles.btnPrimary}>Primary Button</button>
          <button className={styles.btnSecondary}>Secondary Button</button>
          <button className={styles.btnAccent}>Accent Button</button>
          <button className={styles.btnOutline}>Outline Button</button>
        </div>
      </section>

      {/* Cards */}
      <section className={styles.section}>
        <h2>卡片範例</h2>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h3>Standard Card</h3>
            <p className={styles.cardText}>
              這是一個使用 surface 背景色的標準卡片。
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardPrimary}`}>
            <h3>Primary Card</h3>
            <p className={styles.cardText}>
              這是一個使用 primary container 背景色的卡片。
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardSecondary}`}>
            <h3>Secondary Card</h3>
            <p className={styles.cardText}>
              這是一個使用 secondary container 背景色的卡片。
            </p>
          </div>
        </div>
      </section>

      {/* Text Hierarchy */}
      <section className={styles.section}>
        <h2>文字層級</h2>
        <div className={styles.textHierarchy}>
          <p className={styles.textPrimary}>Primary Text - 主要文字</p>
          <p className={styles.textSecondary}>Secondary Text - 次要文字</p>
          <p className={styles.textTertiary}>Tertiary Text - 第三級文字</p>
          <p className={styles.textDisabled}>Disabled Text - 禁用文字</p>
        </div>
      </section>
    </div>
  );
};

export default ThemeDemo;
