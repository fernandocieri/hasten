import './header.scss';
import Nav from '@/components/Nav';

export default function Header({ currentPage }) {
  return (
    <header className='flex-row'>
      <Nav currentPage={currentPage} />
    </header>
  )
}
