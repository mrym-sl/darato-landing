import React, { FC, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
// import { getAssetHistory, getInvestPlanById } from '../../service/API-List';
// import { convertToPersianNumber } from '../../utils/currency';
// import { convertTimeStampToShamsi } from '../../utils/date-time';
// import './chart.style.css';

interface Props {
  investId: string
  investName: string,
  widthCh: number,
  heightCh: number
}


const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (payload.is_deposit === true) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <circle cx="11" cy="11" r="10" fill="white" stroke="#14CEA9" stroke-width="2" />
        <path d="M10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303L16.3033 11.7574C16.5962 11.4645 16.5962 10.9896 16.3033 10.6967C16.0104 10.4038 15.5355 10.4038 15.2426 10.6967L11 14.9393L6.75736 10.6967C6.46447 10.4038 5.98959 10.4038 5.6967 10.6967C5.40381 10.9896 5.40381 11.4645 5.6967 11.7574L10.4697 16.5303ZM10.25 6L10.25 16L11.75 16L11.75 6L10.25 6Z" fill="#14CEA9" />
      </svg>

    );
  }
  else if (payload.is_deposit === false) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <circle cx="11" cy="11" r="10" transform="rotate(-180 11 11)" fill="white" stroke="#F3B796" stroke-width="2" />
        <path d="M11.5303 5.46967C11.2374 5.17678 10.7626 5.17678 10.4697 5.46967L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11 7.06066L15.2426 11.3033C15.5355 11.5962 16.0104 11.5962 16.3033 11.3033C16.5962 11.0104 16.5962 10.5355 16.3033 10.2426L11.5303 5.46967ZM11.75 16L11.75 6L10.25 6L10.25 16L11.75 16Z" fill="#F3B796" />
      </svg>
    );
  }
  else return null;
};

const LineCharts: FC<Props> = ({ investId, investName, widthCh, heightCh }) => {
  const [waiting, setWaiting] = useState<any>(true)
  const [datas, setDatas] = useState<any>([]);

  // useEffect(() => {
  //   async function localChartData() {
  //     const dataArray = [];
  //     if (datas.length > 0) {
  //       datas.map((d, dandix) => {
  //           dataArray.push({ "سرمایه": (Number(String(datas[dandix].total_asset_value).slice(0, -1))), "تاریخ": (datas[dandix].datetime) ,"is_deposit": datas[dandix].is_deposit})
  //       })
  //   }
  //     setDatas(dataArray);
  //     setWaiting(false);
  //   }
  //   localChartData();
  // },[])

  useEffect(() => {
      async function chartData(apiCall, id?) {
          try {
              const { data, status } = await apiCall(id);
              const dataArray = [];
              if (status === 200) {
                  if (data.length > 0) {
                      data.map((d, dandix) => {
                          dataArray.push({ "سرمایه": (Number(String(data[dandix].total_asset_value).slice(0, -1))), "تاریخ": (data[dandix].datetime) ,"is_deposit": data[dandix].is_deposit})
                      })
                  }
                  setDatas(dataArray);
                  setWaiting(false)
              }
          } catch { }
      }
      const setChartModel = async (id) => {
          // if (id === 'asset') chartData(getAssetHistory);
          // else chartData(getInvestPlanById, id);
      }
      setChartModel(investId);
  }, [investName]);

  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          {payload[0].payload.is_deposit && <p className="d-text2 has-text-weight-medium text-green">واریز</p>}
          {payload[0].payload.is_deposit===false && <p className="d-text3 has-text-weight-medium text-orange-golden">برداشت</p>}
          {/* <p className="d-text3 has-text-weight-bold text-gray label mt-1"> {convertToPersianNumber(payload[0].value)} تومان</p> */}
          {/* <p className="d-text3 text-light-gray intro">{convertTimeStampToShamsi(payload[0].payload.تاریخ)}</p> */}
        </div>
      );
    }
    return null;
  }


  return (
    <>
      <div className="charts-contain pb-3">
      {datas && datas.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={heightCh}>
            <AreaChart data={datas} margin={{ top: 1, right: 20, bottom: 1, left: 1 }}>
              {/* <Line type="monotone" dataKey="سرمایه" stroke="#f0c15e" /> */}
              {/* <CartesianGrid stroke="#ccc" strokeDasharray="4 4" /> */}
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="40%" stopColor="rgba(255, 230, 212, 0.9)" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#FFFFFF" stopOpacity={0.14} />
                </linearGradient>
              </defs>
              {/* <XAxis dataKey="تاریخ" style={{display:"none"}}/> */}
              {/* <YAxis tickFormatter={(value) => value.toLocaleString("fa-Fa")} tickSize={-2} /> */}
              {/* <Tooltip formatter={(value) => value.toLocaleString("fa-Fa")} /> */}
              <Tooltip content={<CustomTooltip payload label active />} />
              <Area type="monotone" dataKey="سرمایه" stroke="#FF8078" fill="url(#colorUv)" dot={<CustomizedDot />} />
              {/* <ReferenceDot x={1638144000} y={14639590} shape={CustomReferenceDot} /> */}

            </AreaChart>
          </ResponsiveContainer>
          <hr className="left-line" />
          {/* <hr className="right-line" /> */}
        </>
      ) : null}
    </div>
    </>
  )
}

export default LineCharts;