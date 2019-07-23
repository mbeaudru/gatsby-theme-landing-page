import React from 'react';
import Playground from '../../../../theme/src/mdx/components/playground/Playground';
import Button from '../Button';

export default function ColorPlay() {
  return (
    <Playground
      title="Colored"
      description="A button can have different containers."
      code={`
<div>
  <Button>Standard</Button>
  <Button color='red'>
    Red
  </Button>
  <Button color='orange'>
    Orange
  </Button>
  <Button color='yellow'>
    Yellow
  </Button>
  <Button color='olive'>
    Olive
  </Button>
  <Button color='green'>
    Green
  </Button>
  <Button color='teal'>
    Teal
  </Button>
  <Button color='blue'>
    Blue
  </Button>
  <Button color='violet'>
    Violet
  </Button>
</div>
      `}
      scope={{ Button }}
    />
  );
}
