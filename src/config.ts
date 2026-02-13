export const SITE = {
  website: "https://sleter.github.io/",
  author: "Szymon",
  profile: "https://github.com/sleter",
  desc: "Runtime Therapy - a personal blog about software, debugging life, and everything in between.",
  title: "Runtime Therapy",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/sleter/sleter.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Europe/Warsaw",
} as const;
