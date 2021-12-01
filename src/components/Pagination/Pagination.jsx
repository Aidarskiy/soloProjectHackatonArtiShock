import React, { useContext } from "react";
import { mainContext } from "../../contexts/MainContext";
import { Button } from "react-bootstrap";

const Pagination = () => {
  const { totalPosts, postsPerPage, handlePage, currentPage,getProducts } =
    React.useContext(mainContext);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    // getProducts()
  }
 
  console.log(postsPerPage);
  console.log(totalPosts);

  return (
    <>
      <div className="pagination">
        <ul>
          {pageNumbers.map((item) => (
            <li key={item}>
              <Button
                style={{
                  background: item === currentPage ? "#9A8E95" : "",
                  margin: "5px",
                }}
                variant="contained"
                onClick={() => handlePage(item)}
                
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
