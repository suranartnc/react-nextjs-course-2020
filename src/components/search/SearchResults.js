import React, { Fragment } from 'react'
import Link from '@link'
import { Flex, Box } from '@grid'

import colors from '@features/_ui/colors'

export default function ResultRow({ title, data, route }) {
  return (
    <Fragment>
      <Box width={1}>
        <h1
          css={{
            color: colors.link,
            fontSize: '1.8em',
            padding: '50px 10px 0px',
          }}>
          {title}
        </h1>
      </Box>
      <Box width={1}>
        <Flex flexWrap="wrap">
          {data.map(item => (
            <Box width={1 / 6} px={10} py={20} key={item.id}>
              <article>
                <Link route={route} params={{ id: item.id }}>
                  <a>
                    <img src={item.images[0].url} />
                  </a>
                </Link>
                <h3
                  css={{
                    fontSize: '0.8em',
                    fontWeight: 'bold',
                    lineHeight: '1.5',
                    marginTop: '10px',
                    textAlign: 'center',
                  }}>
                  <Link route={route} params={{ id: item.id }}>
                    <a>{item.name}</a>
                  </Link>
                </h3>
              </article>
            </Box>
          ))}
        </Flex>
      </Box>
    </Fragment>
  )
}
