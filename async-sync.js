getUser(1, user => {
  getRepos(user.githubUsername, repos => {
    getCommits(repos[0], commits => {
      console.log(commits);
    });
  });
});

getUser(1)
  .then(user => getRepos(user.githubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log(err.message));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Reading a user from the database...');
      resolve({ id, githubUsername: 'kikoodev' });
    }, 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading repos from user : ', username);
      // resolve(['repo1', 'repo2', 'repo3']);
      reject(new Error('Server unreachable...'));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading commits from repo : ', repo);
      resolve(['commit1', 'commit2', 'commit3']);
    }, 2000);
  });
}
