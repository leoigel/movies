import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import useMovies from '../hooks/useMovies';
import * as yup from 'yup';
// import '../css/style.css';
import '../css/login.css';
const Login = ({ history }) => {
    const { upLoadedImage, setUpLoadedImage } = useMovies();

    const handleSubmit = (values) => {
        const { email, userName } = values;
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email);
        localStorage.setItem('upLoadedImage', upLoadedImage);
        history.push('/');
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        userName: yup.string().max(8).required()
    })
    const handleImage = (event) => {
        setUpLoadedImage(URL.createObjectURL(event.target.files[0]));
    }
    return (
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <h1>Login</h1>
                    <div className='upload-image-wrapper'>
                        <img src={upLoadedImage} className='upload-image' alt='img-profile' />
                    </div>
                    <div className="upload-btn-wrapper">
                        <button className="btn">Upload a image</button>
                        <input type='file' name='image' onChange={handleImage} />
                    </div>
                    <div className="Login-Group">
                        <label htmlFor='email'>Email</label>
                        <Field
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>

                    <div className="Login-Group">
                        <label htmlFor='userName'>Name</label>
                        <Field
                            name="userName"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="userName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <label htmlFor='password'>Password</label>
                        <Field
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                </Form>
            </Formik>
    )
}

export default Login;


