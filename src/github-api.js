export function getPopularRepos(language) {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc`
  );
}
