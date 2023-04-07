import React from 'react';
import { BrowserRouter, Route, Routes }
    from 'react-router-dom';
import { useUserCreate } from 'api';

export function App() {
    const userCreateService = useUserCreate({
        input: {
            name: 'Sergey Yatsenko',
            group: 'M22-512',
        },
    })

    console.log({
        userCreateService,
    })

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
