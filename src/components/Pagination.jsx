
import { useNavigate } from 'react-router-dom';

const Pagination = ({ btnData }) => {
  const navigate = useNavigate();
  const { previous, next } = btnData;

  return (
    <div className='mx-3 mb-2 md:mb-5 relative h-20'>
      {previous?.icon && (
        <button
          onClick={() => navigate(previous.path)}
          className='flex space-x-2 md:space-x-3 items-center justify-between absolute left-1 px-1 md:px-1.5 py-1.5 top-1/2 -translate-y-1/2 bg-base-content/85 text-base-200/80 rounded-md transition-all duration-300 hover:bg-base-content hover:scale-105 hover:shadow-lg focus:bg-base-content'
        >
          <span><previous.icon className='size-5 md:size-8' /></span>
          <div>
            <p className='text-[10px] md:text-xs text-start font-light'>{previous.name}</p>
            <p className='text-[12px] md:text-sm font-medium'>{previous.pageTitle}</p>
          </div>
        </button>
      )}
      {next?.icon && (
        <button
          onClick={() => navigate(next.path)}
          className='flex space-x-2 md:space-x-3 items-center justify-between absolute right-1 px-1 md:px-1.5 py-1.5 top-1/2 -translate-y-1/2 bg-base-content/85 text-base-200/80 rounded-md transition-all duration-300 hover:bg-base-content hover:scale-105 hover:shadow-lg focus:bg-base-content'
        >
          <div>
            <p className='text-[10px] md:text-xs text-end font-light'>{next.name}</p>
            <p className='text-[12px] md:text-sm font-medium'>{next.pageTitle}</p>
          </div>
          <span><next.icon className='size-5 md:size-8' /></span>
        </button>
      )}
    </div>
  );
};

export default Pagination;
