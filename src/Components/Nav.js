import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg  cstm1 id='cstm2'">
      <div className="container " >
        <a className="navbar-brand" href="#">
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAMAAADdXFNzAAAATlBMVEVHcEzuHyTuICXuHiTuHyXuHiTuHSPuIibuHyTuGB/wOTbuHiTuCRTtAALyXVn6vrj+7ur////uHiT3mZP5raj91tHvICXuHyX0cWz2ioTulF0pAAAAGHRSTlMALWKVs+X/9Xr//9n///////8Y////yEmLZ9sIAAABXUlEQVR4AWIgBQDaJqtEy2EYhk5Jec61y7j/jU4VDVzST+EY5EBVN03b1NV32HSQ0DWfIU3Ck9LPW3KHF1l+PJeoIcHdzciBrnrHHtb3fUY4vzL+BlQqGf0wTrfGIQdr4CE8d8ILobSGsYVMNsKD0HNAmpkOKoS3YRsVEPxb3/ynWOsLzRHhW3ktDvab7yWdP4dw2lC6LFYqb5k/w+Dqs0QsmQHHr4PcT7X0zDrjGXfY6eAENXkpekXkkbgPbPwkl71YC+9HmSyfyzNn/nqy9QDHM6//9pfWMgPrlP7yJ/8ybkBcfM2m+VLS8lFnACYbQ0A79CDOm6rnCNM+ZZZvyvqmkiFtWn9Nh6rsj9ypgiSMVvtr2Gj8VKYWkPgxFz4nz+MVFli0dYsRczjpgMONzsNzdm2dTo9UwxKK7BakRkwVEhIk+3pBqhYv2j8u2NGmvzDtdPahuW72W6/39zfhdSI0nEyBIQAAAABJRU5ErkJggg==' width={'50px'} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownAbout"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                <a className="dropdown-item" href="#about" target="blank">
                  About the Summit
                </a>
                <a className="dropdown-item" href="agenda.html" target="blank">
                  Agenda
                </a>
                <a className="dropdown-item" href="brochure.html" target="blank">
                  Brochure
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownEditions"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Past Editions
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownEditions">
                <a
                  className="dropdown-item"
                  href="https://events.eletsonline.com/nbfc100/chennai/"
                  target="blank"
                >
                  14th NBFC100 Tech Summit Chennai
                </a>
                {/* Add more past editions as needed */}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="glimpses.html">
                Glimpses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#venue">
                Venue
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#speakers">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="award.html">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
           <div className='nav-right'>
           <li className="nav-item on-mobile">
              <a className="nav-link  " href="delegate.html">
                Delegate Registration
              </a>
            </li>
            <li className="nav-item on-mobile">
              <a className="nav-link spcl"  href="registration.html">
                Express Interest
              </a>
            </li>
           </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
