import React from 'react';
import { Playground } from 'gatsby-theme-plume';
import Button from '../Button';

export default function StandardPlay() {
  return (
    <Playground
      title="Button"
      description="A basic button"
      code={`
<Button>Click here</Button>
      `}
      scope={{ Button }}
    />
  );
}
