import { useState } from 'react'
import * as echarts from 'echarts'
// 请确保在引入百度地图扩展之前已经引入百度地图 JS API 脚本并成功加载
// https://api.map.baidu.com/api?v=3.0&ak=你申请的AK
import 'echarts/extension/bmap/bmap'
import ReactECharts from 'echarts-for-react'
import { Input } from 'antd'

const getData = (text) => {
  if (text == '') return []
  const list = text.split('\n')
  return list.map((item) => {
    const items = item.split(',')
    return {
      name: items[0],
      value: [items[1], items[2], 1],
    }
  })
}

export default function HomePage() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const option = {
    title: {
      text: '全国主要城市空气质量 - 百度地图',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    bmap: {
      center: [113.272426, 23.137949],
      zoom: 7,
      roam: true,
      mapStyle: {
        styleJson: [
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1',
            },
          },
          {
            featureType: 'land',
            elementType: 'all',
            stylers: {
              color: '#f3f3f3',
            },
          },
          {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
              visibility: 'off',
            },
          },
          {
            featureType: 'highway',
            elementType: 'all',
            stylers: {
              color: '#fdfdfd',
            },
          },
          {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
              visibility: 'off',
            },
          },
          {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
              color: '#fefefe',
            },
          },
          {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
              color: '#fefefe',
            },
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: {
              visibility: 'off',
            },
          },
          {
            featureType: 'green',
            elementType: 'all',
            stylers: {
              visibility: 'off',
            },
          },
          {
            featureType: 'subway',
            elementType: 'all',
            stylers: {
              visibility: 'off',
            },
          },
          {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1',
            },
          },
          {
            featureType: 'local',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1',
            },
          },
          {
            featureType: 'arterial',
            elementType: 'labels',
            stylers: {
              visibility: 'off',
            },
          },
          {
            featureType: 'boundary',
            elementType: 'all',
            stylers: {
              color: '#fefefe',
            },
          },
          {
            featureType: 'building',
            elementType: 'all',
            stylers: {
              color: '#d1d1d1',
            },
          },
          {
            featureType: 'label',
            elementType: 'labels.text.fill',
            stylers: {
              color: '#999999',
            },
          },
        ],
      },
    },
    series: [
      {
        name: '类别1',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: getData(text1),
        symbolSize: 10,
        encode: {
          value: 2,
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: true,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      },
      {
        name: '类别2',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: getData(text2),
        symbolSize: 10,
        encode: {
          value: 2,
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: true,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      },
    ],
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            height: '90vh',
            flex: 1,
          }}
        >
          <ReactECharts
            style={{
              height: '100%',
            }}
            option={option}
          />
        </div>
        <div
          style={{
            width: '300px',
          }}
        >
          <div>类别1</div>
          <Input.TextArea
            rows={10}
            onChange={(e) => setText1(e.target.value)}
          />
          <div>类别2</div>
          <Input.TextArea
            rows={10}
            onChange={(e) => setText2(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
