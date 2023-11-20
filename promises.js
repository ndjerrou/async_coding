////////////\\\\\\\\\\\\////////////PROMISES\\\\\\\\\\\\////////////\\\\\\\\\\\\////////////\\\\\\\\\\\\

const p = new Promise((resolve, reject) => {
  // basic construction of a Promise thanks to the Promise constructor
});

// handling fullfilled / rejected state
p.then(success => console.log(success)).catch(err => console.log(err.message));

// An example of a Promise either being rejected or fullfilled
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading user from the database...');
      if (Math.random() > 0.6) resolve({ id, githubUsername: 'ndjerrou' });
      else reject(new Error('Internal server error'));
    }, 2000);
  });
}

////////////\\\\\\\\\\\\////////////\\\\\\\\\\\\////////////\\\\\\\\\\\\////////////\\\\\\\\\\\\

function getRepos(user) {
  return new Promise((resolve, reject) => {
    console.log('Rading repos from ', user.githubUsername);
    resolve(['repo1', 'repo2', 'repo3']);
  });
}

// Example with the finally chaining
getUser(1)
  .then(user => getRepos(user))
  .then(repos => console.log(repos))
  .catch(err => console.log(err.message))
  .finally(() => console.log('End of the process')); // being executed for fullfilled AND rejected state
