import React from 'react'
import { Flex, Box } from '@grid'

import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import colors from '@features/_ui/colors'

import SongList from '@common/SongList'

function QueuePage({ tracks }) {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1}>
        <h1
          css={{
            color: colors.link,
            fontSize: '2em',
            padding: '50px 10px 10px',
          }}>
          Queue
        </h1>
      </Box>
      <Box>
        <SongList tracks={tracks} />
      </Box>
    </Flex>
  )
}

QueuePage.defaultProps = {
  tracks: [
    {
      name: 'ไกลแค่ไหน คือ ใกล้',
      artist: 'เก็ทสึโนว่า',
      album: 'Getsunova',
      durationMs: 266146,
    },
    {
      name: 'อยู่ตรงนี้ นานกว่านี้',
      artist: 'เก็ทสึโนว่า',
      album: 'The First Album',
      durationMs: 260320,
    },
    {
      name: 'Habits (Stay High)',
      artist: 'Tove Lo',
      album: 'Queen Of The Clouds',
      durationMs: 209160,
    },
    {
      name: 'มือลั่น',
      artist: 'แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก',
      album: 'มือลั่น',
      durationMs: 192106,
    },
    {
      name: 'เป็นทุกอย่าง',
      artist: 'Room 39',
      album: 'เป็นทุกอย่าง',
      durationMs: 262436,
    },
    {
      name: 'มันเป็นใคร',
      artist: 'โพลีแคท',
      album: 'Hold Your Hand',
      durationMs: 220200,
    },
    {
      name: 'ปลิว',
      artist: 'พลอยชมพู',
      album: 'GMM GRAMMY BEST OF THE YEAR 2016',
      durationMs: 257693,
    },
    {
      name: "If I Ain't Got You",
      artist: 'Alicia Keys',
      album: 'The Diary Of Alicia Keys',
      durationMs: 228706,
    },
    {
      name: 'สมการ',
      artist: 'มูซู',
      album: 'GRAMMY HOT SINGLE VOL. 22',
      durationMs: 257749,
    },
    {
      name: 'รักแท้ไม่มีจริง',
      artist: 'มูซู',
      album: 'GRAMMY HOT SINGLE VOL.19',
      durationMs: 222973,
    },
    {
      name: 'หลอกตัวเอง',
      artist: 'มูซู',
      album: 'Gmm New Release 2016 Vol.2',
      durationMs: 225053,
    },
    {
      name: 'คุณและคุณเท่านั้น',
      artist: 'แกงส้ม ธนทัต',
      album: 'When We Love',
      durationMs: 207291,
    },
    {
      name: 'Safe & Sound - The Hunger Games/Soundtrack Version',
      artist: 'Taylor Swift',
      album: 'The Hunger Games: Songs From District 12 And Beyond',
      durationMs: 240066,
    },
    {
      name: 'New Thang',
      artist: 'Redfoo',
      album: 'New Thang',
      durationMs: 226800,
    },
    {
      name: 'Love Like You Do',
      artist: "Gary's Tyler",
      album: 'Pop Hits Session',
      durationMs: 221588,
    },
    {
      name: 'ฤดูที่ฉันเหงา',
      artist: 'Flure',
      album: 'Vanilla',
      durationMs: 262933,
    },
    {
      name: "Can't Help Falling in Love",
      artist: 'Elvis Presley',
      album: 'Blue Hawaii',
      durationMs: 182360,
    },
    {
      name: 'เรื่องที่ขอ',
      artist: 'ลุลา',
      album: 'เรื่องที่ขอ',
      durationMs: 302066,
    },
    {
      name: 'ทางของฝุ่น (Dust)',
      artist: 'อะตอม ชนกันต์',
      album: 'ทางของฝุ่น (Dust)',
      durationMs: 264626,
    },
    {
      name: 'Back to Your Heart',
      artist: 'Backstreet Boys',
      album: 'Millennium',
      durationMs: 261533,
    },
    {
      name: 'แพ้ทาง',
      artist: 'ลาบานูน',
      album: 'N.E.W.S.',
      durationMs: 208542,
    },
    {
      name: 'แผลเป็น (SCAR)',
      artist: 'อะตอม ชนกันต์',
      album: 'แผลเป็น (SCAR)',
      durationMs: 268040,
    },
    {
      name: 'Thinking out Loud',
      artist: 'Ed Sheeran',
      album: 'x (Deluxe Edition)',
      durationMs: 281560,
    },
    {
      name: 'ซ่อนกลิ่น',
      artist: 'ปาล์มมี่',
      album: 'BEST OF THE YEAR 2018',
      durationMs: 251946,
    },
  ],
}

export default withPage({ restricted: true })(QueuePage)
