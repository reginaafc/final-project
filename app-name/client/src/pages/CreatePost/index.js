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
  const formLayout = "vertical";

  // Store form data
  const [userFormData, setUserFormData] = useState({
    project_name: "",
    description: "",
    fundraise_destination: "",
    fundraise_account: "",
    results: "",
    location: "",
    donation_desired: "",
  });

  // Handle form change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log("name", name, "\nvalue", value);
    // console.log('userformdata',userFormData);
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormFail = async (event) => {
    console.log("Please fill all the fields");
    // console.log(event);
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    try {
      console.log("Trying to create post");
      console.log("formData", userFormData);
      const postData = userFormData;
      await addPost({
        variables: { postData },
      });
    } catch (err) {
      console.error(err);
      console.log(error);
    }

    setUserFormData({
      project_name: "",
      description: "",
      fundraise_destination: "",
      fundraise_account: "",
      results: "",
      location: "",
      donation_desired: "",
    });
  };

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
            layout={formLayout}
            form={form}
            // onValuesChange={onFormLayoutChange}
            className="createPostForm"
            onFinish={handleFormSubmit}
            onFinishFailed={handleFormFail}
          >
            <Form.Item
              label="Project Name"
              name="formName"
              onChange={handleInputChange}
              value={userFormData.project_name}
              rules={[
                {
                  required: true,
                  message: "Please input the name of your project!",
                },
              ]}
            >
              <Input placeholder="input placeholder" name="project_name" />
            </Form.Item>
            <Form.Item
              label="Description"
              onChange={handleInputChange}
              value={userFormData.description}
              rules={[
                {
                  required: true,
                  message: "Please input the description of your project!",
                },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Describe your project"
                name="description"
              />
            </Form.Item>
            <Form.Item
              label="Fundraise Destination"
              onChange={handleInputChange}
              value={userFormData.fundraise_destination}
              name="formDestination"
              rules={[
                {
                  required: true,
                  message: "Please input your fundraise destination!",
                },
              ]}
            >
              <Input
                placeholder="Doctors without borders"
                name="fundraise_destination"
              />
            </Form.Item>
            <Form.Item
              label="Fundraise Account"
              onChange={handleInputChange}
              value={userFormData.fundraise_account}
              name="formAccount"
              rules={[
                {
                  required: true,
                  message: "Please input your fundraise account!",
                },
              ]}
            >
              <Input placeholder="123456789" name="fundraise_account" />
            </Form.Item>
            <Form.Item
              label="Previous Results"
              onChange={handleInputChange}
              value={userFormData.results}
              name="formResults"
              rules={[
                {
                  required: true,
                  message: "Please input your previous results",
                },
              ]}
            >
              <Input
                placeholder="So far we have planted more than 1000 trees and saved..."
                name="results"
              />
            </Form.Item>
            <Form.Item
              label="Location"
              onChange={handleInputChange}
              value={userFormData.location}
              name="formLocation"
              rules={[
                {
                  required: true,
                  message: "Please input your project location!",
                },
              ]}
            >
              <Input placeholder="Zapopan, Jalisco, Mexico" name="location" />
            </Form.Item>
            <Form.Item
              label="Donation Amount Desired"
              onChange={handleInputChange}
              value={userFormData.donation_desired}
              name="formDonationDesired"
            >
              <Input placeholder="3000" name="donation_desired" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
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
