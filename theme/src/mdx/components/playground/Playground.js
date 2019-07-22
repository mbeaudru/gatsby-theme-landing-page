import React from 'react';
import PropTypes from 'prop-types';
import { FaCode, FaPlay, FaRedo } from 'react-icons/fa';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import styled from 'styled-components';
import usePlaygroundDisplay from '../../hooks/usePlaygroundDisplay';
import { gutterSelector, colorSelector } from '../../../utils/themeSelectors';

export default function Playground({
  code: originalCode,
  scope,
  title,
  description,
  noInline,
}) {
  const { editor, code } = usePlaygroundDisplay(originalCode);

  return (
    <LiveProvider
      code={code.running}
      scope={scope}
      noInline={noInline}
      mountStylesheet={false}
    >
      <SegmentBox p={10} bg="white" my={10}>
        <FlexSeparator>
          <div>
            <Title>{title}</Title>

            {description && <Description>{description}</Description>}
          </div>
          <ShowCodeContainer onClick={editor.toggle}>
            <div>
              <FaCode size={22} />
            </div>
            <span>{editor.show ? 'Hide' : 'Show'} code</span>
          </ShowCodeContainer>
        </FlexSeparator>

        <div>
          <LivePreview />
        </div>

        <StyledLiveError />

        {editor.show && (
          <LiveProvider
            code={code.next}
            scope={scope}
            noInline={noInline}
            mountStylesheet={false}
          >
            <ActionItems>
              <ActionItem disabled={!code.hasChanged} onClick={code.apply}>
                <FaPlay size={10} /> Run
              </ActionItem>
              <ActionItem disabled={code.isOriginal} onClick={code.reset}>
                <FaRedo size={10} /> Reset
              </ActionItem>
            </ActionItems>
            <StyledLiveEditor onChange={code.update} />
          </LiveProvider>
        )}
      </SegmentBox>
    </LiveProvider>
  );
}

Playground.propTypes = {
  code: PropTypes.string.isRequired,
  scope: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  noInline: PropTypes.bool,
};

Playground.defaultProps = {
  title: 'Playground',
};

const ShowCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 14px;
  border-radius: 0;
  border: 0;
  background-color: ${colorSelector('veryDarkPrimary')};
`;

const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: ${gutterSelector('xs')};
`;

const Description = styled.p`
  margin-top: 0px;
`;

const StyledLiveError = styled(LiveError)`
  padding: ${gutterSelector('sm')};
  background-color: #f44336;
  color: white;
  font-weight: bold;
  margin-bottom: ${gutterSelector('sm')};
`;

const SegmentBox = styled.div`
  width: 100%;
  box-shadow: rgb(204, 204, 204) 0px 1px 2px;
  padding: ${gutterSelector('sm')};
  background-color: ${colorSelector('lightPrimary')};
  margin: ${gutterSelector('md')} 0;
`;

const FlexSeparator = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionItems = styled.div`
  background-color: ${colorSelector('darkerLightPrimary')};
  color: ${colorSelector('primary')};
  margin-top: ${gutterSelector('md')};
`;

const ActionItem = styled.div`
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-weight: bold;
  ${({ disabled }) => disabled && 'opacity: 0.5'};
  padding: ${gutterSelector('sm')};
  border-right: 1px solid ${colorSelector('background')};
`;
