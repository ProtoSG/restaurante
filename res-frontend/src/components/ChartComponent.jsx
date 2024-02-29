import { ColorType, createChart } from 'lightweight-charts'
import React, { useEffect, useRef } from 'react'


export default function ChartComponent({initialDate}) {

    const chartContainerRef = useRef()

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: {
                    type: ColorType.Solid,
                    color: '#1f2b3e'
                },
                textColor: '#FFFFFF',
                fontSize: 16,
            },
            grid: {
                vertLines:{
                    visible: false
                },
                horzLines:{
                    visible:false
                }
            },
            rightPriceScale: {
                borderVisible: false,
            },
            timeScale: {
                borderVisible: false,
            },
        })

        const newSeries = chart.addAreaSeries({
            lineColor: "#1F3A5F",
            topColor: "#1F3A5F",
            bottomColor: "rgb(31,43,62)",
            lineWidth: 5
        })

        chart.timeScale().fitContent();

        newSeries.setData(initialDate)

        return () => [
            chart.remove()
        ]
    }, [initialDate])


  return <div className='h-full w-full text-text-100' ref={chartContainerRef}></div>
}
