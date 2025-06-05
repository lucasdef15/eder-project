import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export function ButtonSecondary({ children }) {
  return (
    <Button
      variant='secondary'
      className='rounded-full bg-emerald-300 cursor-pointer hover:bg-emerald-600 hover:text-white transition-all'
    >
      {children}
    </Button>
  );
}

const UserMenu = () => {
  const { user, setUser, setToken } = useAuth();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('google_token');
    localStorage.removeItem('google_user');
  };

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer'>
              <AvatarImage src={user.picture} alt={user.name} />
              <AvatarFallback>
                {user.name ? user.name.charAt(0) : 'U'}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent className='w-48'>
            <div className='px-3 py-2'>
              <p className='text-sm font-medium'>{user.name}</p>
              <p className='text-xs text-gray-500'>{user.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className='cursor-pointer text-red-600 hover:bg-red-100'
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to='/login'>
          <ButtonSecondary>Entrar</ButtonSecondary>
        </Link>
      )}
    </>
  );
};

export default UserMenu;
