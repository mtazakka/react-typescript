import { Card, Row, Col, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  LineChartsSample,
  PieChartsSample,
  BarChartsSample,
  ColumnChartsSample,
  RoseChartsSample,
  GaugeChartsSample,
  MultiLineChartsSample,
  DonutChartsSample,
} from "../../components/charts/Charts";
import { Widget } from "../../components/dashboard/Widget";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <Content style={{ padding: 16 }}>
      <Widget />
      <Row gutter={5}>
        <Col xs={24} xl={12}>
          <Card title="Line Chart" size="small" style={{ margin: 5 }}>
            <LineChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Multiline Chart" size="small" style={{ margin: 5 }}>
            <MultiLineChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Pie Chart" size="small" style={{ margin: 5 }}>
            <PieChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Donut Chart" size="small" style={{ margin: 5 }}>
            <DonutChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Bar Chart" size="small" style={{ margin: 5 }}>
            <BarChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Column Chart" size="small" style={{ margin: 5 }}>
            <ColumnChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Rose Chart" size="small" style={{ margin: 5 }}>
            <RoseChartsSample />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Gauge Chart" size="small" style={{ margin: 5 }}>
            <GaugeChartsSample />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Dashboard;
