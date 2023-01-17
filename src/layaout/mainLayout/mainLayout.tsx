import React, { FunctionComponent, Fragment } from 'react';
import { Routes, Route } from 'react-router';
import Homepage from '../../page/homepage/homepage';
import NotFound from '../../page/notFound/NotFound';

const MainLayout: FunctionComponent = (props: any) => {
    // const context = useContext(Context);

    return (
        <Fragment>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="*" element={NotFound} />
                </Routes>
            </div>
        </Fragment>
    )
}
export default MainLayout;
