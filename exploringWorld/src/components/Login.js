import {Formik, Form, Field} from "formik"

const Login = () => {
return(
    <>
    <Formik initialValues={{
        email:"",
        password:""
    }}
    onSubmit={
        (values) => {
       alert(`${values.email}`)
        }
    }
    >
        <Form>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email"/>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password"/>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
    </>
)
}

export default Login