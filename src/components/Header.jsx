import React from 'react';

function Header(props) {
    return (
        <div>
            <header> 
                <button> <Link> Store </Link> </button>
                <button> <Link> Profile </Link> </button>
                <button> <Link> LogIn </Link> </button>
            </header> 
        </div>
    );
}

export default Header;