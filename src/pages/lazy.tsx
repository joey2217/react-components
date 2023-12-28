import LazyImage from '../components/LazyImage'

const imgs = [
  {
    img: 'https://cn.bing.com/th?id=OHR.LittleBlueHeron_ZH-CN0892428603_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210823',
    copyright: '浅水滩上的小蓝鹭，古巴 (© Sergey Uryadnikov/Alamy)',
  },
  {
    img: 'https://cn.bing.com/th?id=OHR.OlympicCoast_ZH-CN0827844876_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210822',
    copyright:
      '奥林匹克海岸国家海洋保护区的海岸线，美国华盛顿州 (© Chris Moore/Tandem Stills + Motion)',
  },
  {
    img: 'https://cn.bing.com/th?id=OHR.PetitMinou_ZH-CN0758401900_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210821',
    copyright: '港边的小米努灯塔，法国布雷斯特 (© Mathieu Rivrin/Getty Images)',
  },
  {
    img: 'https://cn.bing.com/th?id=OHR.EmptyQuarter_ZH-CN0670918289_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210820',
    copyright:
      '位于阿曼和迪拜酋长国边界的鲁卜哈利沙漠 (© Daniel Schoenen/Offset by Shutterstock)',
  },
  {
    img: 'https://cn.bing.com/th?id=OHR.GiantManta_ZH-CN0594951444_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210819',
    copyright:
      '巨型海洋蝠鲼和摄影师，澳大利亚宁格罗海岸 (© Shutterstock Premier)',
  },
  {
    img: 'https://cn.bing.com/th?id=OHR.RedRoofTile_ZH-CN0528575898_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210818',
    copyright: '杜布罗夫尼克老城，克罗地亚 (© Jeremy Woodhouse/Getty Images)',
  },
  {
    img: 'https://cn.bing.com/th?id=OHR.PochuckValley_ZH-CN0432836291_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    date: '20210817',
    copyright: '天堂之路，新泽西州瓦瓦安达州立公园 (© Leembe/Getty Images)',
  },
]

export default function lazy({}: {}) {
  return (
    <div>
      {imgs.map((img) => (
        <LazyImage key={img.date} src={img.img} alt={img.copyright} />
      ))}
    </div>
  )
}
