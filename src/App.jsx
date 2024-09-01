import Header from './components/Header'
import { useState } from 'react';
import { data } from './constants/index'
import Body from './components/Body';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    const newPage = currentPage === 1 ? 20 : currentPage - 1;
    setCurrentPage(newPage);
  };

  const handleNext = () => {
    const newPage = currentPage === 20 ? 1 : currentPage + 1;
    setCurrentPage(newPage);
  };

  return (
    <>
      <Header />
      <Body paper = {data[0]} />
      {/* <Routes>
        {Array.from({ length: 20 }, (_, i) => (
          <Route
            key={uuidv4()}
            path={`/${i + 1}`}
            element={
              <div>
                {data[currentPage-1].map((question, index) => (
                  <div key={question.q_id}>
                    <h2>{`Q${index + 1}: ${question.ques}`}</h2>
                    <ul>
                      <li>A. {question.A}</li>
                      <li>B. {question.B}</li>
                      <li>C. {question.C}</li>
                      <li>D. {question.D}</li>
                    </ul>
                  </div>
                ))}
                <h1>Page {i + 1}</h1>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
              </div>
            }
          />
        ))}
      </Routes> */}
    </>
  );
}

export default App;