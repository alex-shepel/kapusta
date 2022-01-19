import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Report from 'components/Report/Report';
import ReportAmount from 'components/Report/ReportAmount/ReportAmount';
import { fetchDataByCategories } from 'redux/transaction';
import { ChartComp } from 'components/Chart/Chart';
import ReportNavigation from 'components/Report/ReportNavigation/ReportNavigation';

const MonthReportView = () => {
  const dispatch = useDispatch();

  const date = new Date().toISOString();
  console.log(date);

  useEffect(() => {
    dispatch(fetchDataByCategories('2022-01'));
  }, []);

  return (
    <>
      <ReportNavigation />
      <ReportAmount />
      <Report />
      <ChartComp />
    </>
  );
};

MonthReportView.propTypes = {};

export default MonthReportView;
