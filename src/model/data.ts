const GALLERY_PATH =
  import.meta.env.BASE_URL +
  `${
    window.devicePixelRatio > 1 ? "gallery/retina-photos/" : "gallery/photos/"
  }`;

export const PROJECTS = [
  {
    id: 1,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-1-mobile.webp 400w, ${GALLERY_PATH}gallery-1-tablet.webp 800w, ${GALLERY_PATH}gallery-1-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-1.webp`,
    altText: "проект № 11",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Дом",
    gallery: [
      "future-house-1.jpg",
      "future-house-2.jpg",
      "future-house-3.jpg",
      "future-house-4.jpg",
    ],
  },
  {
    id: 2,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-2-mobile.webp 400w, ${GALLERY_PATH}gallery-2-tablet.webp 800w, ${GALLERY_PATH}gallery-2-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-2.webp`,
    altText: "проект № 22",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Ресторан",
  },
  {
    id: 3,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-3-mobile.webp 400w, ${GALLERY_PATH}gallery-3-tablet.webp 800w, ${GALLERY_PATH}gallery-3-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-3.webp`,
    altText: "проект № 33",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Отель",
  },
  {
    id: 4,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-4-mobile.webp 400w, ${GALLERY_PATH}gallery-4-tablet.webp 800w, ${GALLERY_PATH}gallery-4-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-4.webp`,
    altText: "проект № 44",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Аппартаменты",
  },
  {
    id: 5,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-5-mobile.webp 400w, ${GALLERY_PATH}gallery-5-tablet.webp 800w, ${GALLERY_PATH}gallery-5-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-5.webp`,
    altText: "проект № 55",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Ресторан",
  },
  {
    id: 6,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-6-mobile.webp 400w, ${GALLERY_PATH}gallery-6-tablet.webp 800w, ${GALLERY_PATH}gallery-6-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-6.webp`,
    altText: "проект № 66",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Отель",
  },
  {
    id: 7,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-7-mobile.webp 400w, ${GALLERY_PATH}gallery-7-tablet.webp 800w, ${GALLERY_PATH}gallery-7-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-7.webp`,
    altText: "проект № 77",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Аппартаменты",
  },
  {
    id: 8,
    slug: "future-house",
    full: `${GALLERY_PATH}gallery-8-mobile.webp 400w, ${GALLERY_PATH}gallery-8-tablet.webp 800w, ${GALLERY_PATH}gallery-8-desktop.webp 1200w`,
    thumb: `${GALLERY_PATH}gallery-preview-8.webp`,
    altText: "проект № 88",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: "Ресторан",
  },
];

export const PROJECTS_PROMO = [PROJECTS[4], PROJECTS[5], PROJECTS[7]];

export const PROJECTS_GRID = [
  PROJECTS[4],
  PROJECTS[5],
  PROJECTS[7],
  PROJECTS[0],
  PROJECTS[1],
];
