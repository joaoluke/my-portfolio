import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { services as getServices } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ServiceCard } from "./ServiceCard";
import { useAnimation } from "../hooks/useAnimation";

const About = () => {
  const { t, i18n } = useTranslation();
  const services = getServices(t);
  const [key, setKey] = useState(Date.now());
  const { MotionComponent, motionProps } = useAnimation();

  useEffect(() => {
    const handleLanguageChange = () => {
      setKey(Date.now());
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      <MotionComponent
        {...motionProps}
        key={key}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("about")}</p>
          <h2 className={styles.sectionHeadText}>{t("overview")}.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("introduction")}
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </MotionComponent>
    </>
  );
};

export default About;
