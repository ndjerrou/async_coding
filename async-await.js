// ASYNC AWAIT : syntaxical sugar over promises !

// CB PATTERN

// getUser(1, user => {
//   getRepos(user.githubUsername, repos => {
//     getCommits(repos[0], commits => {
//       console.log(commits);
//     });
//   });
// });

// PROMISE PATTERN

// getUser(1)
//   .then(user => getRepos(user.githubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log(commits))
//   .catch(err => console.log(err.message));

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
      resolve(['repo1', 'repo2', 'repo3']);
      //   reject(new Error('Server unreachable...'));
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

console.log(getUserWithAsync(1));

// The above function seems to present some blocking code whereas we handle aynshcronous code using async/await syntax

async function getUserWithAsync(id) {
  const user = await getUser(1);
  const repos = await getRepos(user.githubUsername);
  const commits = await getCommits(repos[0]);

  console.log(commits);
}

console.log('After function call...');

// To note :

// an async function returns a promise
// we use the wait keyword inside a function and the function has to be async
// when the js motor encounters the await keyword, it does not wait, but let the task being handled in the background while executing the rest of the code
