import { useState } from 'react';

export default function usePlaygroundDisplay(initialRawCode) {
  const initialCode = initialRawCode.trim('');
  const [showEditor, toggleEditor] = useState(false);
  const [nextCode, updateCode] = useState(initialCode);
  const [runningCode, setRunningCode] = useState(initialCode);

  const codeHasChanged = nextCode !== runningCode;
  const isOriginalCode =
    runningCode === initialCode && runningCode === nextCode;

  return {
    editor: {
      show: showEditor,
      toggle: () => toggleEditor(!showEditor),
    },
    code: {
      next: nextCode,
      running: runningCode,
      update: updateCode,
      apply: () => setRunningCode(nextCode),
      reset: () => {
        setRunningCode(initialCode);
        updateCode(initialCode);
      },
      hasChanged: codeHasChanged,
      isOriginal: isOriginalCode,
    },
  };
}
