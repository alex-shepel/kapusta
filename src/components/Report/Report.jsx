import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  useEffect(() => {
    setChartData(
      change
        ? expData?.expensesData[activeCategory]
        : incomData?.incomesData[activeCategory],
    );
  }, [activeCategory]);

  return isDataGettingByCategories ? (
    <Spinner />
  ) : (
    <>
      <div className={s.reportMain}>
        <div className={s.reportNav}>
          <ArrowBackIos
            style={{ height: '14px' }}
            className={s.reportArrow}
            onClick={() => setChange(!change)}
          />
          <span className={s.reportTitle}>{change ? 'Расходы' : 'Доходы'}</span>
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
            expData={expData}
          />
        ) : (
          <ReportIncomesList
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
            incomData={incomData}
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
    </>
  );
};

// return (
// <>
//   <div className={s.reportMain}>
//     <div className={s.reportNav}>
//       <ArrowBackIos
//         style={{ height: '14px' }}
//         className={s.reportArrow}
//         onClick={() => setChange(!change)}
//       />
//       <span className={s.reportTitle}>{change ? 'Расходы' : 'Доходы'}</span>
//       <ArrowForwardIos
//         style={{ height: '14px' }}
//         className={s.reportArrow}
//         onClick={() => setChange(!change)}
//       />
//     </div>
//     {change ? (
//       <ReportExpencesList
//         setActiveCategory={setActiveCategory}
//         activeCategory={activeCategory}
//         expData={expData}
//       />
//     ) : (
//       <ReportIncomesList
//         setActiveCategory={setActiveCategory}
//         activeCategory={activeCategory}
//       />
//     )}
//   </div>
//   <div className={s.reportMain}>
//     {isDataGettingByCategories ? (
//       <Spinner />
//     ) : (
//       <ChartComp chartData={chartData} />
//     )}
//   </div>
// </>
// );
// };

export default Report;
