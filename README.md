# React Teamwork

Fetch external data to power React components, practice props and state, while all the while working as a team 💪

Use git branches for each individual feature, don't forget to commit when some progress has been made 

## Getting Started

### Clone down this repository

```bash
git clone git@github.com:MCRcodes/react-teamwork.git
```

### Install dependencies

```bash
npm install
```

### Checkout to your feature branch

```bash
git checkout -b descriptive-feature-branch-name-here
```

### Start up the application and visit both routes available:

```bash
npm start
```

## Explore

### Visit `localhost:8080` in your browser.

You should see a **HOME** message

### Visit `localhost:8080/:username` in your browser.

With `username` being any string you wish to use as username, you should see a skeleton user profile.  

## Challenge

### Three teams will work on three different features as follows:

## Feature 1

### `<ProfileCard />`

![ProfileCard](https://github.com/MCRcodes/react-teamwork/blob/master/public/img/profile-card.png?raw=true)

## Feature 2

### `<RepoList />`

![RepoList](
   https://github.com/MCRcodes/react-teamwork/blob/master/public/img/repo-list.png?raw=true
)

## Feature 3

### `<ContributionSummary />`

![ContributionSummary](https://github.com/MCRcodes/react-teamwork/blob/master/public/img/contribution-summary.png?raw=true)
Instead of displaying total sum of contributions from last week/last month, please display the 10 most recent contributions as a list.

## Data source

JSON api: https://mcr-codes-cohorts.herokuapp.com/

## Checking other teams' work

*1* - make sure you don’t have any uncommited work by doing `git status`. Commit and push if you wish to keep that work.
Alternative to CMD+Z - If don’t want to keep *any* of the uncommited work you can use `git stash` to revert all changed code back to last commit. `git stash` can be undone by doing `git stash pop`

*2* - make sure you’re on the master branch of the repo `git checkout master`

*3* - get all the new code pushed to the repository yesterday evening by running `git fetch && git pull`

*4* - notice new branches name in the list of data being fetched in your terminal, like  _feature-3_, _feature1_, _repo-list-dev_ 

*5* - `git checkout branch-name-here` to run the repo using the code in that specific branch. Note we did not use `-b` here as we’re not creating new branches

*6* - run the app as usual with `npm start`

*_PART 2 - if you’re cloning the repo afresh_*

*1* - after cloning, if you do `git branch` it’ll only show the `master` branch

*2* - however if you do `git branch -a` you’ll see all the branches are there in a kind of hidden way

*3* - do `git checkout branch-name-here` to run the repo using the code in  that specific branch

*4* - if in doubt that branch has the most up to date code that has been pushed just do `git pull && git fetch`. In this case it should say all is up to date
