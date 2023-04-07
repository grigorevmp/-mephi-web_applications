import * as React from 'react';
import { BrowserRouter, Route, Routes }
    from 'react-router-dom';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element="Home" />
                <Route path="/staff" element="Staff Service" />
                <Route path="*" element="404" />
            </Routes>
        </BrowserRouter>
    );
}
