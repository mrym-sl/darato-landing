import React, { FC } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
    chData
}

const FundCharts: FC <Props> = ({chData}) => {
    return (
        <>
            <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={chData} margin={{ top: 1, right: 20, bottom: 1, left: 1 }}>
                    {/* <Line type="monotone" dataKey="سرمایه" stroke="#f0c15e" /> */}
                    {/* <CartesianGrid stroke="#ccc" strokeDasharray="4 4" /> */}
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            
                            <stop offset="16%" stopColor="#F4E1B8" stopOpacity={0.7} />
                            <stop offset="94%" stopColor="#00DEBF" stopOpacity={0.14} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="تاریخ"/>
                    <YAxis tickFormatter={(value) => value.toLocaleString("fa-Fa")} tickSize={-2} />
                    <Tooltip formatter={(value) => value.toLocaleString("fa-Fa")} />
                    <Area type="monotone" dataKey="سرمایه" stroke="#14CEA9" fill="url(#colorUv)" />

                </AreaChart>
            </ResponsiveContainer>

        </>
    )
}

export default FundCharts;