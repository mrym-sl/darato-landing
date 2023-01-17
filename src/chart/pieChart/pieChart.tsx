import React, { FC, useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
// import { convertInvestPlansName, convertRiskDivided } from '../../utils/convertEnglish';
// import { convertToPersianNumber } from '../../utils/currency';
import './pieChart.css';

interface Props {
    dataChart,
    dataKey
    heiight
    innerR
    outterR
    color?,
    paddingAngle,
    cornerRadius
}

const AssetPieChart: FC<Props> = ({ dataChart, dataKey, heiight, innerR, outterR, paddingAngle ,cornerRadius}) => {

    const [colors, setColors] = useState<string[]>([]);

    const setColor = (riskLevel) => {
        switch (riskLevel) {
            case "level_one":
                return "#C7CBD3";
            case "level_two":
                return "#B9BFC8";
            case "level_three":
                return "#ABB2BD";
            case "level_four":
                return "#8F98A7";
            case "level_five":
                return "#96E9D8";
            case "level_six":
                return "#48D8BC";
            case "level_seven":
                return "#14CEA9";

            case "Gold":
                return "#F1CE40";
            case "JointStock":
                return "#33507C";
            case "FixedIncome":
                return "#8378FF";
            default:
                return "#111";
        }
    }



    useEffect(() => {
        const handleColor = () => {
                var newColor = []
                dataChart.map(data => {
                    newColor.push(setColor(data.name))
                })
                setColors(newColor);
        }
        handleColor();
    }, [])


    const CustomTooltip = ({ payload, label, active }) => {
        if (active) {
            if (dataKey === "percentage_of_invest_plan") {
                return (
                    <div className="custom-tooltip">
                        {/* <p className="intro">{convertInvestPlansName(payload[0].name)}</p> */}
                        {/* <p className="label mt-1 text-green">{`${convertToPersianNumber(payload[0].value)}%`}</p> */}
                    </div>
                );
            }
            else if (dataKey === "percent") {
                return (
                    <div className="custom-tooltip">
                        {/* <p className="intro">{convertRiskDivided(payload[0].name)}</p> */}
                        {/* <p className="label mt-1">{`${convertToPersianNumber(payload[0].value)}%`}</p> */}
                    </div>
                )
            }

        }
        return null;
    }

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={100}>
                    <Pie
                        dataKey={dataKey}
                        data={dataChart}
                        cx="50%"
                        cy="50%"
                        innerRadius={innerR}
                        outerRadius={outterR}
                        paddingAngle={paddingAngle}
                        cornerRadius={cornerRadius}
                    >
                        {dataChart.map((entry, index) => (
                            <Cell key={`cell-${index}`} radius={25} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

export default AssetPieChart;