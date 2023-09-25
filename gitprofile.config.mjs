// gitprofile.config.js

const config = {
  github: {
    username: 'csarnataro', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['csarnataro', 'eredimonticelli-site'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sarnataro',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'christian.sarnataro',
    dev: 'csarnataro',
    website: 'https://csarnataro.github.io',
    phone: '',
    email: '',
    mastodon: 'fosstodon.org/@csarnataro',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Elixir',
    'Java',
    'Flutter',
    'Git',
    'SQL',
    'Arduino',
    '... and more'
  ],
  experiences: [
    {
      company: 'Arduino',
      position: 'Staff Software Engineer',
      from: 'May 2021',
      to: 'Present',
      companyLink: 'https://www.arduino.cc',
    },
    {
      company: 'Paramount',
      position: 'Senior Software Engineer / Engineering Manager',
      from: 'November 2014',
      to: 'April 2021',
      companyLink: 'https://www.paramount.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: '110/110 Cum Laude - Università degli Studi di Milano (Italy)',
      degree: 'Master Degree in Computer Science',
      from: '1995',
      to: '2001',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'christian.sarnataro', // to hide blog section, keep it empty
    limit: 3, // How many posts to display.
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
