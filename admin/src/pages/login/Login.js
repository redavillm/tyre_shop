import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

export const Login = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (authData) => {
    const { username, password } = authData; // Данные формы передаются напрямую
    try {
      await login({ username, password });
      navigate("/tyres");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <Content
      style={{
        padding: "0 48px",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit} // Передаем обработчик для успешной отправки
        onFinishFailed={() => setError("Form submission failed.")}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form>
    </Content>
  );
};
