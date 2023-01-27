import React, { useState } from "react"
// this hook within React allows us to use various types of form validations, like email validation (ensuring an @ symbol is inputted) and requiring fields not to be left blank
import { useForm } from "react-hook-form"
import { Button, Form, Input } from "antd"

const contactFormLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

const validateForm = {
  required: "${label} is required",
  types: {
    email: "${label} is not a valid email",
  },
}

export default function Contact() {
  // const { register, errors, handleSubmit } = useForm({ mode: "onBlur" })
  // const onSubmit = (data) => {
  //   console.log(data)
  // }
  const [form] = Form.useForm()
  const { TextArea } = Input

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <section className="container-no-flex">
      <h3>Get in touch:</h3>

      <Form
        form={form}
        {...contactFormLayout}
        name="nest-messages"
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateForm}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "message"]}
          label="Message"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...contactFormLayout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>

          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields()
            }}
          >
            Clear
          </Button>
        </Form.Item>
      </Form>
    </section>
  )
}
