import { FunctionComponent } from 'react';
import Skeleton from "react-loading-skeleton";

const ResultsMock: FunctionComponent = () => {

  return (
    <div className="results container">
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <div className="card container" key={index}>
            <Skeleton height={180} />
            <h4 className="title"> 
              <Skeleton height={36} width={"80%"} />
            </h4>
          </div>
        ))}
    </div>
  );
};

export default ResultsMock;
