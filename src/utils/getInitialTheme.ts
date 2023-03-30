export const getInitialTheme = (themeConfig) => {
    if (themeConfig.disableSwitch) {
        return themeConfig.defaultTheme;
    }

    if (
        typeof window !== 'undefined' &&
        !(localStorage.getItem('gitprofile-theme') === null) &&
        themeConfig.themes.includes(localStorage.getItem('gitprofile-theme'))
    ) {
        let theme = localStorage.getItem('gitprofile-theme');
        return theme;
    }

    if (themeConfig.respectPrefersColorScheme && !themeConfig.disableSwitch) {
        return typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : themeConfig.defaultTheme;
    }

    return themeConfig.defaultTheme;
};
