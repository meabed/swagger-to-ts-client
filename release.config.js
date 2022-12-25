// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const branch = process.env.BRANCH || process.env.CI_REF_NAME_SLUG || '';
// semantic-release configuration
module.exports = {
  branches: [
    {
      name: 'master',
      prerelease: false,
    },
    { name: branch, prerelease: true },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'breaking', release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'ci', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'build', release: 'patch' },
        ],
      },
    ],
    ["@semantic-release/release-notes-generator"],
    // https://github.com/semantic-release/npm
    ['@semantic-release/npm'],
    //
    ['@semantic-release/github'],
  ],
};
