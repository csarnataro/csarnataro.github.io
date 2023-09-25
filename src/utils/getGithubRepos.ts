import type { Repo } from "~/models/repo";

async function getGithubRepos({fetch, githubData, config}): Promise<Repo[]> {

    if (import.meta.env.NODE_ENV === 'development' && !(import.meta.env.USE_REMOTE_DATA === 'true')) {
      const localData = await import('../../local.github.repo.json');
      const repos = await localData.default as { items: Repo[]};
      return repos.items;
    }

    let excludeRepo = ``;
    if (githubData.public_repos === 0) {
      return [];
    }

    config.github.exclude.projects.forEach((project) => {
      excludeRepo += `+-repo:${config.github.username}/${project}`;
    });

    let query = `user:${
      config.github.username
    }+fork:${!config.github.exclude.forks}${excludeRepo}`;

    let url = `https://api.github.com/search/repositories?q=${query}&sort=${config.github.sortBy}&per_page=${config.github.limit}&type=Repositories`;

    const response = await fetch(url);
    const json = await response.json() as { items: Repo[]};
    return json.items;
}

export { getGithubRepos }