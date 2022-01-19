import s from './MonthReportView.module.css';
import Report from 'components/Report/Report';
import Container from 'components/Container';
import ReportAmount from 'components/Report/ReportAmount/ReportAmount';

const MonthReportView = () => {
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
