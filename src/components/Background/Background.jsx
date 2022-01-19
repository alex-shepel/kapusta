import s from './Background.module.css';
import BackgroundImageAuthPageTopPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageTopPosition';
import BackgroundImageAuthPageBotPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageBotPosition';
const Background = () => {
  return (
    <>
      <div className={s.background}>
        <BackgroundImageAuthPageTopPosition />
      </div>
      <BackgroundImageAuthPageBotPosition />
    </>
  );
};

export default Background;
