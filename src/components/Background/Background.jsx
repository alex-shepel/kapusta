import s from './Background.module.css';
import BackgroundImageAuthPageTopPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageTopPosition';
const Background = () => {
  return (
    <>
      <div className={s.background}>
        <BackgroundImageAuthPageTopPosition />
      </div>
      <div className={s.backgroundImageBot} />
    </>
  );
};

export default Background;
