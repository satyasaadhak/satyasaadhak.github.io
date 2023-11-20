import "./Body.css"

import { Outlet, useLocation } from 'react-router-dom';

export default function Body() {
    const currentLocation = useLocation();
    const className = `App-body ${currentLocation.pathname === '/' ? 'about' : currentLocation.pathname.replace('/', '')}`;
    return <main className={className}>
        <Outlet />
    </main>
}