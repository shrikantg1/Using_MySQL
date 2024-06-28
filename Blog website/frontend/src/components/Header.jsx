// eslint-disable-next-line no-unused-vars
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { loginWithRedirect } = useAuth0();
const { logout } = useAuth0();
const { user, isAuthenticated } = useAuth0();
  return (
    <header className="bg-white text-gray-500 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">BlogSite</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-lg text-black">Home</Link></li>
            <li><Link to="/new" className="text-lg text-black">New Post</Link></li>

            {  isAuthenticated ? (
      <div className='flex justify-center items-center gap-2'>
        <img src={user.picture} className='h-8 rounded-fulg w-8 ' alt={user.name} />
       
                <button className='bg-blue-600 rounded-xl px-3 py-2 text-white' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
      </div>
    ):<div className='flex justify-center items-center'><button className='bg-blue-600 rounded-xl px-3 py-2 text-white' onClick={() => loginWithRedirect()}>Log In</button></div>}
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;