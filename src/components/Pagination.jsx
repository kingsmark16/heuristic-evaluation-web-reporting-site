
import { useNavigate } from 'react-router-dom';

const Pagination = ({ btnData }) => {
  const navigate = useNavigate();
  const { previous, next } = btnData;

  return (
    <div className='mx-9 mb-2 md:mb-1 relative h-20'>
      {previous?.icon && (
        <button
          onClick={() => navigate(previous.path)}
          className='flex space-x-2 md:space-x-3 items-center justify-between absolute left-1 px-1 md:px-1.5 py-1.5 top-1/2 -translate-y-1/2 bg-neutral text-neutral-content rounded-md transition-all duration-300 hover:bg-neutral-content hover:text-neutral hover:scale-105 hover:shadow-lg'
        >
          <span><previous.icon className='size-4 md:size-5' /></span>
          <div>
            <p className='text-[8px] md:text-[10px] text-start font-light'>{previous.name}</p>
            <p className='text-[10px] md:text-[12px] font-medium'>{previous.pageTitle}</p>
          </div>
        </button>
      )}
      {next?.icon && (
        <button
          onClick={() => navigate(next.path)}
          className='flex space-x-2 md:space-x-3 items-center justify-between absolute right-1 px-1 md:px-1.5 py-1.5 top-1/2 -translate-y-1/2 bg-neutral text-neutral-content rounded-md transition-all duration-300 hover:bg-neutral-content hover:text-neutral hover:scale-105 hover:shadow-lg'
        >
          <div>
            <p className='text-[8px] md:text-[10px] text-end font-light'>{next.name}</p>
            <p className='text-[10px] md:text-[12px] font-medium'>{next.pageTitle}</p>
          </div>
          <span><next.icon className='size-4 md:size-5' /></span>
        </button>
      )}
    </div>
  );
};

export default Pagination;
