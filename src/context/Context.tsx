import React, { createContext, FunctionComponent, useRef, MutableRefObject, useState } from 'react';

interface ContextType {
    toastMessage: string
    setToastMessage: React.Dispatch<any>
    toastClass: boolean
    setToastClass: React.Dispatch<any>

    token: string
    setToken: React.Dispatch<any>

    balance: number
    setBalance: React.Dispatch<any>
    withdrawAmount: number
    setWithdrawAmount: React.Dispatch<any>
    bankAccountWithdraw: number
    setBankAccountWithdraw : React.Dispatch<any>

    depositPlan: string,
    setDepositPlan: React.Dispatch<any>
    depositTime: string
    setDepositTime: React.Dispatch<any>
    depositAmount: number
    setDepositAmount: React.Dispatch<any>
    depositId: string
    setDepositId: React.Dispatch<any>
    depositName: string
    setDepositName: React.Dispatch<any>
    depositRedirect: string
    setDepositRedirect: React.Dispatch<any>

    fundAmount: []
    setFundAmount: React.Dispatch<any>
    fundDepositAmount: number
    setFundDepositAmount: React.Dispatch<any>

   
    windowSize: number
    setWindowSize: React.Dispatch<any>

    riskLevel: string
    setRiskLevel: React.Dispatch<any>

    logoutDiakog : boolean
    setLogoutDiakog: React.Dispatch<any>
}

export const Context = createContext<ContextType>({
    toastMessage: "",
    setToastMessage: () => { },
    toastClass: false,
    setToastClass: () => { },

    token: '',
    setToken: () => { },

    balance: 0,
    setBalance: () => { },

    withdrawAmount: 0,
    setWithdrawAmount: () => { },
    bankAccountWithdraw:0,
    setBankAccountWithdraw: () => {},

    depositPlan: " ",
    setDepositPlan: () => { },
    depositAmount: 0,
    setDepositAmount: () => { },
    depositTime: "",
    setDepositTime: () => { },
    depositId: "",
    setDepositId: () => { },
    depositName: "",
    setDepositName: () => { },
    depositRedirect: "",
    setDepositRedirect: () => { },

    fundAmount: [],
    setFundAmount: () => { },
    fundDepositAmount: 0,
    setFundDepositAmount: () => { },


    windowSize: 0,
    setWindowSize: () => { },

    riskLevel:"",
    setRiskLevel:()=>{},

    logoutDiakog:false,
    setLogoutDiakog:()=>{}
});


const GState: FunctionComponent = ({ children }) => {
    const [token, setToken] = useState('');
    const [balance, setBalance] = useState(0);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [toastClass, setToastClass] = useState<boolean>(false);
    const [withdrawAmount, setWithdrawAmount] = useState<number>();
    const [bankAccountWithdraw, setBankAccountWithdraw] = useState<number>();
    const [depositPlan, setDepositPlan] = useState<string>();
    const [depositAmount, setDepositAmount] = useState<number>();
    const [depositTime, setDepositTime] = useState<string>();
    const [depositId, setDepositId] = useState<string>();
    const [depositName, setDepositName] = useState<any>();
    const [depositRedirect, setDepositRedirect] = useState<string>();
    const [fundDepositAmount, setFundDepositAmount] = useState<number>();
    const [fundAmount, setFundAmount] = useState();
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [riskLevel, setRiskLevel] = useState<string>('');
    const [logoutDiakog, setLogoutDiakog] = useState<boolean>(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth);
        });
    }, []);
    
    return (
        <>
            <Context.Provider value={{
                toastMessage,
                setToastMessage,
                toastClass,
                setToastClass,

                token,
                setToken,

                balance,
                setBalance,

                withdrawAmount,
                setWithdrawAmount,
                bankAccountWithdraw,
                setBankAccountWithdraw,

                depositPlan,
                setDepositPlan,
                depositAmount,
                setDepositAmount,
                depositTime,
                setDepositTime,
                depositId,
                setDepositId,
                depositName,
                setDepositName,
                depositRedirect,
                setDepositRedirect,

                fundAmount,
                setFundAmount,
                fundDepositAmount,
                setFundDepositAmount,

                windowSize,
                setWindowSize,

                riskLevel,
                setRiskLevel,

                logoutDiakog,
                setLogoutDiakog
            }}>
                {children}
            </Context.Provider>
        </>
    )
}
export default GState;