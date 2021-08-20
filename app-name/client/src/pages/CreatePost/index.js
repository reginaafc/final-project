import React, { useState } from "react";
// import { DatePicker } from 'antd';
// import asd from '../../assets/projectImg_mockup.jpg';
import bgImage from "../../assets/createPostBG2.png";
import "./CreatePost.css";

import { Form, Input, Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

export default function CreatePost() {
  const { Dragger } = Upload;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
      
  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="createPostContainer">
      <div className="bgImage" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bgImageText">
          Welcome to the family<br></br>Tell us more about your project
        </div>
      </div>
      <div className="createPostBodyContainer">
        <div className="createPostFormTitle">
          Please fulfill the following fields
        </div>
        <div className="createPostFormContainer">
          <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
            className="createPostForm"
          >
            <Form.Item label="Author">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Email">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Project Name">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea rows={4} placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Donation Destiny">
              <Input placeholder="Doctors without borders" />
            </Form.Item>
            <Form.Item label="Fundraise Account">
              <Input placeholder="123456789" />
            </Form.Item>
            <Form.Item label="Previous Results">
              <Input placeholder="So far we have planted more than 1000 trees and saved..." />
            </Form.Item>
            <Form.Item label="Donation Amount Being Asked">
              <Input placeholder="3000" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="createPostUploadContainer">
          <div className="createPostUploadTitle">
            <div>Upload Project Image</div>
          </div>
          <div className="createPostUpload">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </div>
        </div>
      </div>
    </div>
  );
}
