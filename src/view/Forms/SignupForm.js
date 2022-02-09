import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router";
import * as Yup from "yup";
import "./Form.scss";
class SignupForm extends React.Component {
  handleSubmit = () => {
    console.log(
      ">>>> Check submit: ",
      this.props.values.username,
      this.props.values.password,
      this.props.values.email
    );
    {
      this.props.values.username === "admin" &&
        this.props.values.email === "admin@gmail.com" &&
        this.props.history.push("/formTask");
    }
  };
  render() {
    console.log(">>>Check props Formik: ", this.props);
    return (
      <Form>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          className="container"
        >
          <Grid item xs={6} md={4}>
            <Paper
              elevation={4}
              style={{
                padding: "20px 15px",
                marginTop: "30px",
              }}
            >
              <h3>Signup</h3>
              {/*  */}
              <FormControl
                className="formInput"
                fullWidth
                margin="normal"
                /* hiện lỗi đỏ khi nhập sai và tránh việc click sai 1 input thì báo đỏ toàn bộ form*/
                error={
                  this.props.touched.username && !!this.props.errors.username
                }
              >
                <InputLabel>Username</InputLabel>
                {
                  /* <Input
                  fullWidth
                  name="username"
                  /*Formik hỗ trợ sẵn values*/
                  // value={this.props.values.username}
                  /*Formik hỗ trợ sẵn function handleChange*/
                  // onChange={this.props.handleChange}/>
                  // dùng Field để tránh việc click sai 1 input thì báo đỏ toàn bộ form
                }
                <Field
                  name="username"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                <FormHelperText>{this.props.errors.username}</FormHelperText>
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={this.props.touched.email && !!this.props.errors.email}
              >
                <InputLabel>Email</InputLabel>
                <Field
                  name="email"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                <FormHelperText>{this.props.errors.email}</FormHelperText>
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={
                  this.props.touched.password && !!this.props.errors.password
                }
              >
                <InputLabel>Password</InputLabel>
                <Field
                  name="password"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                <FormHelperText>{this.props.errors.password}</FormHelperText>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Plan</InputLabel>
                <Select
                  name="plan"
                  value={this.props.values.plan}
                  onChange={this.props.handleChange}
                >
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="advance">Advance</MenuItem>
                  <MenuItem value="enterprise">Enterprise</MenuItem>
                </Select>
              </FormControl>
              <Field
                name="receiveLetter"
                type="checkbox"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Receive new letter"
                  />
                )}
              />
              <FormControl fullWidth margin="normal">
                <Button
                  color="primary"
                  type="submit"
                  // /*Formik hỗ trợ sẵn function handleSubmit*/
                  onClick={() => this.handleSubmit()}
                >
                  Signup
                </Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Form>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      username: "",
      email: "",
      password: "",
      plan: "basic",
      receiveLetter: true,
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    username: Yup.string()
      .required("Username is required")
      .min(5, "Username must have min 5 characters")
      .max(10, "Username have max 10 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must have min 5 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  }),
})(SignupForm);

export default withRouter(FormikForm);
