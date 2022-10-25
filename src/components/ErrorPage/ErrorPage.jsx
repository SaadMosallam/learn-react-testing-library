import React from 'react';
import bug from '../../assets/bug.svg';

const ErrorPage = () => {
  return (
    <div className="d-flex align-items-center pt-5 mt-5 flex-column" id="error-page">
      <img className="mb-5" src={bug} alt="bug" width={300} height={300} />
      <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default ErrorPage;
