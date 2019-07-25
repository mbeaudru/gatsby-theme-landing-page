import React from 'react';
import { Playground } from 'gatsby-theme-plume';
import Button from '../Button';

export default function BasicPlay() {
  return (
    <Playground
      title="Basic"
      description="The basic button has a subtle appearance."
      code={`
<div>
  <Button basic>Standard</Button>
  <Button basic color='red'>
    Red
  </Button>
  <Button basic color='orange'>
    Orange
  </Button>
  <Button basic color='yellow'>
    Yellow
  </Button>
  <Button basic color='olive'>
    Olive
  </Button>
  <Button basic color='green'>
    Green
  </Button>
  <Button basic color='teal'>
    Teal
  </Button>
  <Button basic color='blue'>
    Blue
  </Button>
  <Button basic color='violet'>
    Violet
  </Button>
</div>
      `}
      scope={{ Button }}
    />
  );
}
