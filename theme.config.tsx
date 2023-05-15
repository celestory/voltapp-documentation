import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: 10 }}
      >
        <path
          d="M8.4 0L0 5.19101L5.81538 18.2472L9.26154 16.3596L14 28L13.1385 10.0674L10.9846 11.7978L8.4 0Z"
          fill="#F3CE39"
        />
        <path
          d="M20.9125 0L29.3125 5.19101L23.4971 18.2472L20.051 16.3596L15.3125 28L16.174 10.0674L18.3279 11.7978L20.9125 0Z"
          fill="#F3CE39"
        />
      </svg>
      <span style={{ fontSize: "1.5em", fontWeight: "bolder" }}>
        Voltapp Docs
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/celestory/voltapp-documentation",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "fr", text: "French" },
  ],
  chat: {
    link: "https://discord.gg/wTUbyrE2st",
  },
  docsRepositoryBase: "https://github.com/celestory/voltapp-documentation",
  footer: {
    text: "Voltapp Documentation © 2023",
  },
};

export default config;
