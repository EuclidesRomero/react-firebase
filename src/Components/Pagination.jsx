import ReactPaginate from "react-paginate";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {motion} from 'framer-motion'
const Pagination = ({setCurrentPage,currentPage, page, nPges}) => {

  
  const paginationVariants = { 
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }
    }
  }
  const handlePageClick = ({selected}) => {
    setCurrentPage(selected + 1)
  }

  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <ReactPaginate
        breakLabel= {<span className="mr-4">...</span>}
        nextLabel= {
          <span className="w-10 h-10 flex items-center justify- bg-gray-100 rounded-m ">
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={8}
        previousLabel={
        <span className="w-10 h-10 flex items-center justify- bg-gray-100 rounded-md mr-4">
          <BsChevronLeft />
        </span>}
        containerClassName="flex items-center justify-center mt-8"
        pageClassName="block border-solid border-lightGray hover:bg-gray-400 w-10 flex items-center justify-center rounded-lg mr-4"
        activeClassName="bg-purple-800 text-white"
        renderOnZeroPageCount={null}
      /> 
    </motion.div>
  );
};

export default Pagination; 
