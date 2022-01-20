import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Report from 'components/Report/Report';
import ReportAmount from 'components/Report/ReportAmount/ReportAmount';
import {
  fetchDataByCategories,
  getIsDataGettingByCategories,
} from 'redux/transaction';
import ReportNavigation from 'components/Report/ReportNavigation/ReportNavigation';
import Spinner from 'components/Spinner';

const MonthReportView = () => {
  const dispatch = useDispatch();
  const isDataGettingByCategories = useSelector(getIsDataGettingByCategories);

  useEffect(() => {
    dispatch(fetchDataByCategories('2022-01'));
  }, []);

  return (
    <>
      <ReportNavigation />
      <ReportAmount />
      {isDataGettingByCategories ? <Spinner /> : <Report />}
    </>
  );
};

MonthReportView.propTypes = {};

export default MonthReportView;
