import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect, logout, user } = useAuth0();

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Products</h2>

                <button onClick={() => loginWithRedirect()} className="ui button blue center"> Login </button>
                <button onClick={() => logout()} className="ui button blue center"> Logout </button>
            </div>
        </div>
    );
};

export default Header;