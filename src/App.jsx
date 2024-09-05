import Header from './components/Header'
import { useState } from 'react';
import { data } from './constants/index'
import Body from './components/Body';
import ToggleMenu from './components/ToggleMenu';


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    const newPage = currentPage === 1 ? 2 : currentPage - 1;
    setCurrentPage(newPage);
  };

  const handleNext = () => {
    const newPage = currentPage === 2 ? 1 : currentPage + 1;
    setCurrentPage(newPage);
  };

  return (
    <>
      <Header />
      <ToggleMenu currentPage = {currentPage} handleNext = {handleNext} handlePrevious = {handlePrevious}/>
      <Body paper = {data[currentPage-1]} />
      <ToggleMenu currentPage = {currentPage} handleNext = {handleNext} handlePrevious = {handlePrevious}/>
    </>
  );
}

export default App;