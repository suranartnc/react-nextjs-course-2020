import React from 'react'
import { Flex, Box } from '@grid'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'

import DetailPageHeader from '@components/_common/DetailPageHeader'
import SongList from '@common/SongList'

PlaylistDetailPage.defaultProps = {
  data: {
    title: 'Main',
    subTitle: 'Suranart Niamcome',
    bottomLine: '24 Tracks',
    image:
      'https://mosaic.scdn.co/640/95d8651f7d1525a01ffb360052c7bb63a3331cc4ab67616d0000b2730c8ea14417dc06dccdffe01cab67616d0000b273e76e64aa449965dd5e439c53ab67616d0000b273f188738a110aae9520d4daaf',
    tracks: [
      {
        name: 'ไกลแค่ไหน คือ ใกล้',
        artist: 'เก็ทสึโนว่า',
        album: 'Getsunova',
        image:
          'https://i.scdn.co/image/ab67616d0000b273e76e64aa449965dd5e439c53',
        previewUrl:
          'https://p.scdn.co/mp3-preview/f0521c21357ae522872b59cf4dd082ad65880fe8?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 266146,
      },
      {
        name: 'อยู่ตรงนี้ นานกว่านี้',
        artist: 'เก็ทสึโนว่า',
        album: 'The First Album',
        image:
          'https://i.scdn.co/image/ab67616d0000b2730c8ea14417dc06dccdffe01c',
        previewUrl:
          'https://p.scdn.co/mp3-preview/d107d61f0964af539e6843526e517f8c2c0fa25e?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 260320,
      },
      {
        name: 'Habits (Stay High)',
        artist: 'Tove Lo',
        album: 'Queen Of The Clouds',
        image:
          'https://i.scdn.co/image/95d8651f7d1525a01ffb360052c7bb63a3331cc4',
        previewUrl: null,
        durationMs: 209160,
      },
      {
        name: 'มือลั่น',
        artist: 'แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก',
        album: 'มือลั่น',
        image:
          'https://i.scdn.co/image/ab67616d0000b273f188738a110aae9520d4daaf',
        previewUrl:
          'https://p.scdn.co/mp3-preview/b97d8d8d47ad52ea8ef613261d17b6fb51fa447f?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 192106,
      },
      {
        name: 'เป็นทุกอย่าง',
        artist: 'Room 39',
        album: 'เป็นทุกอย่าง',
        image:
          'https://i.scdn.co/image/ab67616d0000b273adc9b3960e55a03548b84e91',
        previewUrl: null,
        durationMs: 262436,
      },
      {
        name: 'มันเป็นใคร',
        artist: 'โพลีแคท',
        album: 'Hold Your Hand',
        image:
          'https://i.scdn.co/image/ab67616d0000b273d4ff1e86e7a45c394ed552a9',
        previewUrl:
          'https://p.scdn.co/mp3-preview/dba8f98bfeb908ba03536d8160f8fa39260eeeca?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 220200,
      },
      {
        name: 'ปลิว',
        artist: 'พลอยชมพู',
        album: 'GMM GRAMMY BEST OF THE YEAR 2016',
        image:
          'https://i.scdn.co/image/ab67616d0000b2733376602273c8370af54d996a',
        previewUrl:
          'https://p.scdn.co/mp3-preview/210cd71f58f0383f66c446679fec6ef2a6ed7fff?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 257693,
      },
      {
        name: "If I Ain't Got You",
        artist: 'Alicia Keys',
        album: 'The Diary Of Alicia Keys',
        image:
          'https://i.scdn.co/image/ab67616d0000b27356ff19308ebeb48e2ba6094b',
        previewUrl:
          'https://p.scdn.co/mp3-preview/7c91c6dc291142a9a489eb9be0a261b489028933?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 228706,
      },
      {
        name: 'สมการ',
        artist: 'มูซู',
        album: 'GRAMMY HOT SINGLE VOL. 22',
        image:
          'https://i.scdn.co/image/ab67616d0000b273c83692c9039ec9dd6032ce2b',
        previewUrl:
          'https://p.scdn.co/mp3-preview/5ee0062edb012dfcb09ab221dd8ff5a4cd74c41c?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 257749,
      },
      {
        name: 'รักแท้ไม่มีจริง',
        artist: 'มูซู',
        album: 'GRAMMY HOT SINGLE VOL.19',
        image:
          'https://i.scdn.co/image/ab67616d0000b2736a724a4b7961246494e8d9de',
        previewUrl:
          'https://p.scdn.co/mp3-preview/9e69b8ddbaf862eae302db43e993fb8ec91520fa?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 222973,
      },
      {
        name: 'หลอกตัวเอง',
        artist: 'มูซู',
        album: 'Gmm New Release 2016 Vol.2',
        image:
          'https://i.scdn.co/image/ab67616d0000b2733d5b3fecd4d3a51e4db030e8',
        previewUrl:
          'https://p.scdn.co/mp3-preview/228b98a5b6de1a6d05d59bc2c7224689850d39cb?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 225053,
      },
      {
        name: 'คุณและคุณเท่านั้น',
        artist: 'แกงส้ม ธนทัต',
        album: 'When We Love',
        image:
          'https://i.scdn.co/image/ab67616d0000b27369f5a0789fed234c11f219f6',
        previewUrl:
          'https://p.scdn.co/mp3-preview/b45c168a127ea60884f0d475e03414d0761bb790?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 207291,
      },
      {
        name: 'Safe & Sound - The Hunger Games/Soundtrack Version',
        artist: 'Taylor Swift',
        album: 'The Hunger Games: Songs From District 12 And Beyond',
        image:
          'https://i.scdn.co/image/ab67616d0000b273ea3f83d223435984f546a2d9',
        previewUrl: null,
        durationMs: 240066,
      },
      {
        name: 'New Thang',
        artist: 'Redfoo',
        album: 'New Thang',
        image:
          'https://i.scdn.co/image/ab67616d0000b273b4993adcf493566cfa67fac0',
        previewUrl:
          'https://p.scdn.co/mp3-preview/fc431be23294f792d94c3ce92b913b9abe0e3e70?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 226800,
      },
      {
        name: 'Love Like You Do',
        artist: "Gary's Tyler",
        album: 'Pop Hits Session',
        image:
          'https://i.scdn.co/image/ab67616d0000b27381e456f7e09aa21cfb2cd8d1',
        previewUrl:
          'https://p.scdn.co/mp3-preview/dc685888af38eb8d435553bd8b843e72386a7b6f?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 221588,
      },
      {
        name: 'ฤดูที่ฉันเหงา',
        artist: 'Flure',
        album: 'Vanilla',
        image:
          'https://i.scdn.co/image/ab67616d0000b2732e9a99e194d7bd01196c1e08',
        previewUrl:
          'https://p.scdn.co/mp3-preview/4470ffeffd01e4c3af7baf751ece0a462c675ef4?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 262933,
      },
      {
        name: "Can't Help Falling in Love",
        artist: 'Elvis Presley',
        album: 'Blue Hawaii',
        image:
          'https://i.scdn.co/image/ab67616d0000b273f96cefb0197694ad440c3314',
        previewUrl:
          'https://p.scdn.co/mp3-preview/994ebd7f49e4e935df56d450b0c12d8bad8bb9f4?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 182360,
      },
      {
        name: 'เรื่องที่ขอ',
        artist: 'ลุลา',
        album: 'เรื่องที่ขอ',
        image:
          'https://i.scdn.co/image/ab67616d0000b2734dcd23b22103c7758d750334',
        previewUrl:
          'https://p.scdn.co/mp3-preview/4c47d81d1aaae2f77579f17cdf6bd6617ff0c64e?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 302066,
      },
      {
        name: 'ทางของฝุ่น (Dust)',
        artist: 'อะตอม ชนกันต์',
        album: 'ทางของฝุ่น (Dust)',
        image:
          'https://i.scdn.co/image/ab67616d0000b2738df63a843c164965950b9c98',
        previewUrl:
          'https://p.scdn.co/mp3-preview/daf9469903c102d07a8f7f06cd78a3d23b44d9b0?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 264626,
      },
      {
        name: 'Back to Your Heart',
        artist: 'Backstreet Boys',
        album: 'Millennium',
        image:
          'https://i.scdn.co/image/ab67616d0000b2730a77b78669d5d5d2f67f8873',
        previewUrl: null,
        durationMs: 261533,
      },
      {
        name: 'แพ้ทาง',
        artist: 'ลาบานูน',
        album: 'N.E.W.S.',
        image:
          'https://i.scdn.co/image/ab67616d0000b273f73a27e0a8f558b3be5a1ff0',
        previewUrl:
          'https://p.scdn.co/mp3-preview/d0bca6b5006329f425c1bd40516ba799373587ca?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 208542,
      },
      {
        name: 'แผลเป็น (SCAR)',
        artist: 'อะตอม ชนกันต์',
        album: 'แผลเป็น (SCAR)',
        image:
          'https://i.scdn.co/image/ab67616d0000b273f010efcad667bf692efeb450',
        previewUrl:
          'https://p.scdn.co/mp3-preview/ad9c7ef1d15aae10a62f9fc37bee6d07327ee495?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 268040,
      },
      {
        name: 'Thinking out Loud',
        artist: 'Ed Sheeran',
        album: 'x (Deluxe Edition)',
        image:
          'https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd',
        previewUrl:
          'https://p.scdn.co/mp3-preview/7fba47d0806142cb34ad2080a5f139eba915fe05?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 281560,
      },
      {
        name: 'ซ่อนกลิ่น',
        artist: 'ปาล์มมี่',
        album: 'BEST OF THE YEAR 2018',
        image:
          'https://i.scdn.co/image/ab67616d0000b273c05c4b2670b52d0bbb887608',
        previewUrl:
          'https://p.scdn.co/mp3-preview/29cabd04ea5013fc00a3642ed3da7c70f863edaf?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 251946,
      },
    ],
  },
}

function PlaylistDetailPage({ data }) {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1 / 3}>
        <DetailPageHeader data={data} />
      </Box>
      <Box width={2 / 3}>
        <SongList tracks={data.tracks} />
      </Box>
    </Flex>
  )
}

export default withPage({ restricted: true })(PlaylistDetailPage)
