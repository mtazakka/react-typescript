import {
  Card,
  Space,
  Typography,
  Form,
  Row,
  Col,
  message,
  Input,
  Select,
  Button,
} from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IQuotation, QuotationSchema } from "../type/QuotationType";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const CreateQuotation = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IQuotation>({
    resolver: zodResolver(QuotationSchema),
    defaultValues: {
      id: 1,
    },
  });

  const onSubmit = (data: IQuotation) => {
    // Perform form submission logic here
    console.log(data);
    message.success("New Quotation Added");
    navigate("/leasing-request");
  };

  return (
    <Space
      direction="vertical"
      style={{ margin: 10, width: "-webkit-fill-available" }}
    >
      <Card title={"Create Quotation"}>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Space>
            <Title level={5} type="secondary">
              Quotation No
            </Title>
            <Title level={4}>Q3918-102</Title>
          </Space>
          <Row gutter={16}>
            <Col span={24}>
              <Title
                level={4}
                style={{ color: "#0C377C", textTransform: "uppercase" }}
              >
                Customer Details
              </Title>
            </Col>
            <Col span={12}>
              <Form.Item label="Name">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      disabled
                      defaultValue={"Abdul Muhammad bin Yusof"}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Contact No">
                <Controller
                  name="contactNo"
                  control={control}
                  render={({ field }) => (
                    <Input disabled defaultValue={"0123456789"} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email Address">
                <Controller
                  name="emailAddress"
                  control={control}
                  render={({ field }) => (
                    <Input
                      disabled
                      defaultValue={"abdulmuhammad@gmail.com"}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Company Name">
                <Controller
                  name="companyName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      disabled
                      defaultValue={"Agmo Studio Sdn Bhd"}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Business Nature">
                <Controller
                  name="businessNature"
                  control={control}
                  render={({ field }) => (
                    <Input disabled defaultValue={"Automotive"} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Title
                level={4}
                style={{ color: "#0C377C", textTransform: "uppercase" }}
              >
                Leasing Details
              </Title>
            </Col>
            <Col span={12}>
              <Form.Item label="Total Fleet Size">
                <Controller
                  name="totalFleetSize"
                  control={control}
                  render={({ field }) => (
                    <Input disabled defaultValue={10} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Leasing Period">
                <Controller
                  name="leasingPeriod"
                  control={control}
                  render={({ field }) => (
                    <Input disabled defaultValue={"3 years"} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Price based on Model">
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <Input type="number" prefix="RM" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Payment Cycle">
                <Controller
                  name="paymentCycle"
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder="Please Select"
                      options={[
                        { value: "Daily", label: "Daily" },
                        { value: "Weekly", label: "Weekly" },
                      ]}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Remarks">
                <Controller
                  name="remarks"
                  control={control}
                  render={({ field }) => (
                    <Input placeholder="Add remarks" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Title
                level={4}
                style={{ color: "#0C377C", textTransform: "uppercase" }}
              >
                Leasing Price
              </Title>
            </Col>
            <Col span={24}>Table</Col>
          </Row>
        </Form>
      </Card>
      <Row style={{ float: "right" }}>
        <Space>
          <Button>Cancel</Button>
          <Button>Create Quotation</Button>
        </Space>
      </Row>
    </Space>
  );
};

export default CreateQuotation;
