import colors from './colors.json';

export const languageColor = (language) => {
    if (typeof colors[language] !== 'undefined') {
        return colors[language].color;
    }
    return 'gray';
};