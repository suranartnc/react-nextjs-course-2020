import React from 'react'
import { Flex, Box } from '@grid'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import colors from '@features/_ui/colors'

function ButtonControl({ icon, circle = false, onClick }) {
  let css = {
    background: 'transparent',
    padding: '7px 8px 11px 10px',
    margin: '0 10px',
    width: '34px',
    height: '34px',
    cursor: 'pointer',
    ...(circle === true
      ? { border: `1px solid ${colors.link}`, borderRadius: '50%' }
      : { border: 'none' }),
  }

  return (
    <button onClick={onClick} css={css}>
      <Icon
        icon={icon}
        css={{
          color: colors.link,
          width: '10px',
        }}
      />
    </button>
  )
}

export default function ControlPanel() {
  return (
    <Flex>
      <Box>
        <ButtonControl icon="random" />
      </Box>
      <Box>
        <ButtonControl icon="step-backward" />
      </Box>
      <Box>
        <ButtonControl icon="play" circle={true} />
      </Box>
      <Box>
        <ButtonControl icon="step-forward" />
      </Box>
      <Box>
        <ButtonControl icon="redo-alt" />
      </Box>
    </Flex>
  )
}
