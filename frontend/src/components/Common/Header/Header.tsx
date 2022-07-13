import { Navigation, Top, Status } from "./index";
import './Header.scss';

export const Header = () => {
  return (
    <header className='header-container'>
      <Top />
      <Status />
      <Navigation />
    </header>
  );
}

