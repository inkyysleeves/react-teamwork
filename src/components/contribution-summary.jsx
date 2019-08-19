import React from 'react';

const Contributions = (props) => {
  const pushes = props.events.filter(event => event.type === 'PushEvent');
  const repos = props.repos.map(repo => repo.name);
  console.log(repos);
  return (
    <div>
      <h1>
        there are {props.totalContributions} Contributions.
      </h1>
      <h1>
          there have been {pushes.length} push events.
      </h1>
      {pushes.map(push => {
        return (
          <h1 key={push.time} />
        );
      })
    }
      <h1>
          there have been {repos.length} events created.
      </h1>
      {
      repos.map(repo => {
        return <p key={repo}>{`${repo}: ${pushes.filter(push => push.repo === repo).length}`}</p>;
      })
      }
    </div>
  );
};

export default Contributions;
