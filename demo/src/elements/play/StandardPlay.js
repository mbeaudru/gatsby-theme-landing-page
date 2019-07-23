import React from 'react';
import Playground from '../../../../theme/src/mdx/components/playground/Playground';
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
