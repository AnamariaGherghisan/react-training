# Formik Yup

## What is Formik and Yup?

Formik is an open-source form library for React. It can be used to manage state in forms along with handling events triggered in forms.

Yup is a schema builder for runtime value parsing and validation. We can define a schema specific for our application and ensure that values adhere to the schema and also define how to set the error messages accordingly.

## Usage of Formik and Yup

```js
const MyForm = () => {
  // step 1 - define the initialValues of each form field
  const initialValues = {
    firstName: "",
  };

  // step 2 - define the validationSchema as a Yup schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter a valid first name."),
  });

  // step 3 - define the onSubmit function which is executed on submission of the form
  const onSubmit = (values) => {
    // this function has access to all the values tracked by formik in state
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
    </form>
  );
};
```
