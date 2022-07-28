import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';
import './main.scss';
import { ReactComponent as Camera } from '../../assets/camera.svg';
import { ReactComponent as Book } from '../../assets/book.svg';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Stepper } from '../../assets/Iconstepper.svg';

const Main = () => {
  return (
    <div className="header">
      <div className="username">Hello John 👋,</div>
      <main className="flex-icon">
        <div>
          <Link to={'postpictures'}>
            <Camera className="icon" />
          </Link>
          <aside>Post a picture</aside>
        </div>
        <div>
          <Link to={'reportissue'}>
            <Book className="icon" />
          </Link>
          <aside>Report an issue</aside>
        </div>
        <div>
          <Link to={'update'}>
            <Loader className="icon" />
          </Link>
          <aside>Update your AB account info</aside>
        </div>
      </main>
      <section className="weekly">
        <div className="icon-down">
          <BsArrowDown />
        </div>
        <div className="content">
          Weekly Progress <Arrow />
        </div>
        <div className="price">
          <span>$</span>70 <span>USD</span>
        </div>
      </section>
      <section className="update">
        <h3>Latest Update</h3>
        <div className="update-content">
          <pre>
            <Stepper />
          </pre>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
            Sagittis nec morbi mi libero venenatis.
            <span>17 Jan, 2022</span>
          </p>
        </div>
        <div className="update-content">
          <pre>
            <Stepper />
          </pre>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
            Sagittis nec morbi mi libero venenatis.
            <span>17 Jan, 2022</span>
          </p>
        </div>
        <div className="update-content">
          <pre>
            <Stepper />
          </pre>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
            Sagittis nec morbi mi libero venenatis.
            <span>17 Jan, 2022</span>
          </p>
        </div>
      </section>
      <section>
        <div className="statistics">
          <h4>Statistics</h4>
          <pre>This Month ▼</pre>
        </div>
        <div className="img">
          <img src="/assets/Stat.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Main;
