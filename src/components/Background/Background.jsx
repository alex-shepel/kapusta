import s from './Background.module.css';

const Background = () => {
  return (
    <>
      <div className={s.background} />
      <div className={s.backgroundImageTop} />
      <div className={s.backgroundImageBot} />
    </>
  );
};

export default Background;
