import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './MonthReportView.module.css';
import Report from 'components/Report/Report';
import Container from 'components/Container';
import ReportAmount from 'components/Report/ReportAmount/ReportAmount';
import {
  fetchDataByCategories,
  getIsDataGettingByCategories,
} from 'redux/transaction';

const MonthReportView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataByCategories('2022-01'));
  }, []);

  return (
    <>
      <Container>
        <ReportAmount />
      </Container>

      <Container>
        <Report />
      </Container>
    </>
  );
};

MonthReportView.propTypes = {};

export default MonthReportView;
