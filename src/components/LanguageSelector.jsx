import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuToggle, setMenuToggle] = useState(false);
  const [selected, setSelected] = useState(0);
  const wrapperRef = useRef(null);

  const countries = [
    { flag: "us", label: "English", lang: "en" },
    { flag: "br", label: "Português", lang: "pt-BR" },
    { flag: "es", label: "Español", lang: "es" },
  ];

  const changeLanguage = (index) => {
    setMenuToggle(false);
    setSelected(index);
    i18n.changeLanguage(countries[index].lang);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setMenuToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative mr-1"
      ref={wrapperRef}
      onClick={() => setMenuToggle(!menuToggle)}
    >
      <button className="flex items-center bg-secondary text-gray-500 rounded shadow-lg py-2 pr-3 pl-5 focus:outline-none">
        <span className={`flag-icon w-6 fi fi-${countries[selected].flag}`} />
        <Icon path={mdiChevronDown} size={1} />
      </button>
      {menuToggle && (
        <div className="bg-white text-gray-700 shadow-md rounded text-sm absolute mt-12 top-0 right-0 min-w-full w-48 z-30">
          <span className="absolute top-0 right-0 w-3 h-3 bg-white transform rotate-45 -mt-1 mr-3" />
          <div className="bg-white overflow-auto rounded w-full relative z-10">
            <ul className="list-reset">
              {countries.map((item, index) => (
                <li key={item.flag}>
                  <button
                    className="px-4 py-2 flex hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 w-full text-left"
                    onClick={() => changeLanguage(index)}
                  >
                    <span
                      className={`inline-block mr-2 flag-icon fi fi-${item.flag}`}
                    />
                    <span className="inline-block">{item.label}</span>
                    {index === selected && (
                      <span className="ml-auto">
                        <i className="mdi mdi-check" />
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
