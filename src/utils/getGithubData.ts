async function getGithubData({ fetch, config }): Promise<any> {

    if (import.meta.env.NODE_ENV === 'development' && !(import.meta.env.USE_REMOTE_DATA === 'true')) {
        return import('../../local.github.data.json');
    }
    const response = await fetch(`https://api.github.com/users/${config.github.username}`);
    return response.json();
}

export { getGithubData };

