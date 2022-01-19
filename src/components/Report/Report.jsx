import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/Container';
import ReportExpencesList from './ReportExpencesList/ReportExpencesList';
import ReportIncomesList from './ReportIncomesList/ReportIncomesList';
import s from './Report.module.css';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import {
  getExpenseDataByCategoriesFromState,
  getIncomesDataByCategoriesFromState,
  getIsDataGettingByCategories,
} from 'redux/transaction';
import Spinner from 'components/Spinner';
import { ChartComp } from 'components/Chart/Chart';

const Report = () => {
  const [change, setChange] = useState(true);
  const [chartData, setChartData] = useState({});
  const [activeCategory, setActiveCategory] = useState('');
  const incomData = useSelector(getIncomesDataByCategoriesFromState);
  const expData = useSelector(getExpenseDataByCategoriesFromState);
  const isDataGettingByCategories = useSelector(getIsDataGettingByCategories);
  console.log(incomData);
  useEffect(() => {
    setChartData(
      change
        ? expData?.expensesData[activeCategory]
        : incomData?.incomesData[activeCategory],
    );
  }, [activeCategory]);

  return (
    <Container>
      <div className={s.reportMain}>
        <div className={s.reportNav}>
          <ArrowBackIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
          {change ? <span>Расходы</span> : <span>Доходы</span>}
          <ArrowForwardIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
        </div>
        {change ? (
          <ReportExpencesList
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        ) : (
          <ReportIncomesList
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        )}
      </div>
      <div className={s.reportMain}>
        {isDataGettingByCategories ? (
          <Spinner />
        ) : (
          <ChartComp chartData={chartData} />
        )}
      </div>
    </Container>
  );
};

export default Report;
