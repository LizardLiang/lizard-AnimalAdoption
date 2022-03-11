import { useContext } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Title, Thumbnail, InfoBox } from '../components/detail'
import { Container, Box, Badge, Text } from '@chakra-ui/react'
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
    71: '嘉義市流浪犬收容中心',
    72: '嘉義市流浪犬中途之家',
    73: '台南市動物之家灣理站',
    74: '台南市動物之家善化站',
    75: '高雄市壽山動物保護教育園區',
    76: '高雄市燕巢動物保護�愛園區',
    77: '屏東縣流浪動物收容所'
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
            title={`City`}
            text={LookupTable.areaPkid[info.animal_area_pkid]}
          />
          <InfoBox
            title={`Shelter`}
            text={LookupTable.areaPkid[info.animal_area_pkid]}
          />
          <InfoBox title={`Open Date`} text={info.animal_opendate} />
          <InfoBox
            title={`Animal Size`}
            text={LookupTable.bodyType[info.animal_bodytype]}
          />
          <InfoBox
            title={`Animal Sex`}
            text={LookupTable.sex[info.animal_sex]}
          />
          <InfoBox
            title={`Animal Sterilization`}
            text={LookupTable.sterilized[info.animal_sterilization]}
          />
        </Section>
      </Container>
    </Layout>
  )
}

export default Details

