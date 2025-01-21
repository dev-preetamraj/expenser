import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const TabsLayout = ({ children }: Props) => {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <div className='w-full h-screen pb-20 overflow-auto'>{children}</div>
      <div className='h-16 w-full bg-gray-500/70 backdrop-blur-md absolute bottom-0 z-50'>
        <nav className='w-full max-w-xl mx-auto'>hi</nav>
      </div>
    </div>
  );
};

export default TabsLayout;
