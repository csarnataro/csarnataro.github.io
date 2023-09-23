import type { Blog } from "./blog";
import type { Certification } from "./certification";
import type { Education } from "./education";
import type { Experience } from "./experience";
import type { GitHub } from "./github";

export type Configuration = {
  github: GitHub;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    dribbble?: string;
    behance?: string;
    medium?: string;
    dev?: string;
    stackoverflow?: string;
    website?: string;
    phone?: string;
    email?: string;
  };
  resume?: {
    fileUrl: string;
  };
  skills?: string[];
  experiences?: Experience[],
  // externalProjects: config?.externalProjects || [],
  certifications?: Certification[],
  education?: Education[],
  blog?: Blog,
  // blog: {
  //   source: config?.blog?.source,
  //   username: config?.blog?.username,
  //   limit: config?.blog?.limit || 5,
  // },
  // googleAnalytics: {
  //   id: config?.googleAnalytics?.id,
  // },
  // hotjar: {
  //   id: config?.hotjar?.id,
  //   snippetVersion: config?.hotjar?.snippetVersion || 6,
  // },
  themeConfig: {
    defaultTheme: string;
    disableSwitch?: boolean;
  //   respectPrefersColorScheme:
  //     config?.themeConfig?.respectPrefersColorScheme || false,
    hideAvatarRing?: boolean,
  //   themes: themes,
  //   customTheme: customTheme,
  },
};
