import ChefLogo from '../assets/chef-logo.png';
import Fragment from 'react';


export default function Header() {
    return (
        <>
            <div className="header">
                <img src={ChefLogo} alt="Chef Logo" className="chef-logo" />
                <h1 className="chef-h1">Chef Claude</h1>
            </div>
        </>
    )
}