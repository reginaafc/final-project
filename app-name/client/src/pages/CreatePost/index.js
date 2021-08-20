import React, { useState } from "react";
// import { DatePicker } from 'antd';
// import asd from '../../assets/projectImg_mockup.jpg';
import bgImage from "../../assets/createPostBG2.png";
import "./CreatePost.css";

import { Form, Input, Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";

export default function CreatePost() {
  // Settin up the addpost mutation
  const [addPost, { error }] = useMutation(ADD_POST);

  // Setting up the dragbox (upload file)
  const { Dragger } = Upload;
  const { TextArea } = Input;

  // Setting up the form
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  // Store form data
  const [userFormData, setUserFormData] = useState({
    project_name: "",
    description: "",
    fundraise_destination: "",
    fundraise_account: "",
    results: "",
    location: "",
  });

  // Handle form change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('name',name,'\nvalue',value);
    // console.log('userformdata',userFormData);
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    let today = new Date();
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(today);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(today);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(today);
    console.log(`${da}-${mo}-${ye}`);

    try {
      console.log("Trying to create post");
      // const { data } = await addPost({
      //   variables: { ...userFormData },
      // });
    } catch (err) {
      console.error(err);
    }
  };

  // Setting up form layout
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  // Setting up form items layout
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

  // Setting up  the form button layout
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  // Configuring dragbox
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
            onSubmit={handleFormSubmit}
          >
            <Form.Item label="Project Name">
              <Input
                placeholder="input placeholder"
                onChange={handleInputChange}
                value={userFormData.project_name}
                name="project_name"
              />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea
                rows={4}
                placeholder="input placeholder"
                onChange={handleInputChange}
                value={userFormData.description}
                name="description"
              />
            </Form.Item>
            <Form.Item label="Fundraise Destination">
              <Input
                placeholder="Doctors without borders"
                onChange={handleInputChange}
                value={userFormData.fundraise_destination}
                name="fundraise_destination"
              />
            </Form.Item>
            <Form.Item label="Fundraise Account">
              <Input
                placeholder="123456789"
                onChange={handleInputChange}
                value={userFormData.fundraise_account}
                name="fundraise_account"
              />
            </Form.Item>
            <Form.Item label="Previous Results">
              <Input
                placeholder="So far we have planted more than 1000 trees and saved..."
                onChange={handleInputChange}
                value={userFormData.results}
                name="results"
              />
            </Form.Item>
            <Form.Item label="Location">
              <Input
                placeholder="Zapopan, Jalisco, Mexico"
                onChange={handleInputChange}
                value={userFormData.location}
                name="location"
              />
            </Form.Item>
            {/* <Form.Item label="Donation Amount Being Asked">
              <Input placeholder="3000" />
            </Form.Item> */}
            <Form.Item {...buttonItemLayout}>
              <Button type='submit' variant='success'>Submit</Button>
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
