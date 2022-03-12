import { useContext } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Title, Thumbnail, InfoBox } from '../components/detail'
import { Container } from '@chakra-ui/react'
import { DogInfo } from '../lib/dog-context'

const LookupTable = {
  bodyType: {
    SMALL: '小型',
    MEDIUM: '中型',
    BIG: '大型'
  },
  sex: {
    M: '公',
    F: '母',
    N: '未輸入'
  },
  sterilized: {
    T: '是',
    F: '否',
    N: '未輸入'
  },
  areaPkid: {
    2: '台北市',
    3: '新北市',
    4: '基隆市',
    5: '宜蘭縣',
    6: '桃園縣',
    7: '新竹縣',
    8: '新竹市',
    9: '苗栗縣',
    10: '台中市',
    11: '彰化縣',
    12: '南投縣',
    13: '雲林縣',
    14: '嘉義縣',
    15: '嘉義市',
    16: '台南市',
    17: '高雄市',
    18: '屏東縣',
    19: '花蓮縣',
    20: '台東縣',
    21: '澎湖縣',
    22: '金門縣',
    23: '連江縣'
  },
  shelter: {
    48: '基隆市寵物銀行',
    49: '台北市動物之家',
    50: '新北市板橋區公立動物之家',
    51: '新北市新店區公立動物之家',
    53: '新北市中和區公立動物之家',
    55: '新北市淡水區公立動物之家',
    56: '新北市瑞芳區公立動物之家',
    58: '新北市五股區公立動物之家',
    59: '新北市八里區公立動物之家',
    60: '新北市三芝區公立動物之家',
    61: '桃園市動物保護教育園區',
    62: '新竹市動物收容所',
    63: '新竹縣動物收容所',
    67: '台中市動物之家南屯園區',
    68: '台中市動物之家后里園區',
    69: '彰化縣流浪狗中途之家',
    70: '南投縣公立動物收容所',
    71: '嘉義市流浪犬收容中心',
    72: '嘉義市流浪犬中途之家',
    73: '台南市動物之家灣理站',
    74: '台南市動物之家善化站',
    75: '高雄市壽山動物保護教育園區',
    76: '高雄市燕巢動物保護關愛園區',
    77: '屏東縣流浪動物收容所',
    78: '宜蘭縣流浪動物中途之家',
    79: '花蓮縣流浪犬中途之家',
    80: '台東縣動物收容中心',
    81: '連江縣流浪犬收容中心',
    82: '金門縣動物收容中心',
    83: '澎湖縣流浪動物收容中心',
    89: '雲林縣流浪動物收容中心',
    92: '新北市政府動物保護防疫處',
    96: '苗栗縣生態保育教育中心'
  },
  age: {
    UNDEFINE: '未輸入',
    CHILD: '幼年',
    ADULT: '成年'
  },
  status: {
    NONE: '未公告',
    OPEN: '開放認養',
    ADOPTED: '已認養',
    OTHER: '其他',
    DEAD: '死亡'
  },
  bacterin: {
    T: '是',
    F: '否',
    N: '未輸入'
  }
}

const Details = ({}) => {
  const { info } = useContext(DogInfo)
  const placeholder = '/images/dogPlaceholder.png'

  return (
    <Layout>
      <Container>
        <Section delay={0.1}>
          <Title>{info.animal_id}</Title>
        </Section>
        <Section delay={0.3}>
          <Thumbnail
            thumbnail={info.album_file === '' ? placeholder : info.album_file}
          />
        </Section>
        <Section delay={0.6}>
          <InfoBox
            title={`STATUS`}
            text={LookupTable.status[info.animal_status]}
          />
          <InfoBox
            title={`City`}
            text={LookupTable.areaPkid[info.animal_area_pkid]}
          />
          <InfoBox
            title={`Shelter`}
            text={LookupTable.shelter[info.animal_shelter_pkid]}
          />
          <InfoBox title={`Shelter Name`} text={info.shelter_name} />
          <InfoBox title={`Shelter Address`} text={info.shelter_address} />
          <InfoBox title={`Shelter Phone`} text={info.shelter_tel} />
          <InfoBox title={`Place`} text={info.animal_place} />
          <InfoBox title={`Open Date`} text={info.animal_opendate} />
          <InfoBox
            title={`Animal Size`}
            text={LookupTable.bodyType[info.animal_bodytype]}
          />
          <InfoBox title={`Colour`} text={info.animal_colour} />
          <InfoBox title={`Age`} text={LookupTable.age[info.animal_age]} />
          <InfoBox
            title={`Animal Sex`}
            text={LookupTable.sex[info.animal_sex]}
          />
          <InfoBox
            title={`Animal Sterilization`}
            text={LookupTable.sterilized[info.animal_sterilization]}
          />
          <InfoBox title={`Open Date`} text={info.animal_opendate} />
          <InfoBox title={`Close Date`} text={info.animal_closedate} />
          <InfoBox
            title={`Bacterin`}
            text={LookupTable.bacterin[info.animal_bacterin]}
          />
          <InfoBox title={`Remark`} text={info.animal_remark} />
          <InfoBox title={`Caption`} text={info.animal_caption} />
        </Section>
      </Container>
    </Layout>
  )
}

export default Details
