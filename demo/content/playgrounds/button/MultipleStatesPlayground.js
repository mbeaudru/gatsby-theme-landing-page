import React from 'react';
import Playground from '../../../../theme/src/mdx/components/playground/Playground';
import Button from '../../../src/button/Button';

export default function MultipleStatesPlayground() {
  return (
    <Playground
      title="Multiple states"
      description="A button can have multiple states"
      scope={{ Button: Button }}
      code={`
render(
  <div>
    <Button>Primary</Button>

    <Button bsStyle="danger">Danger</Button>

    <Button bsStyle="warning">Warning</Button>

    <Button bsStyle="info">Info</Button>
  </div>
)
      `}
      noInline
    />
  );
}
