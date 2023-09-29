import React from 'react';
import  { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";





const RegistrerForm = () => {
    return(
<Formik
        initialValues = {{lastname: "", firstname: "", email: "", password: "", passwordConfirm: ""}}
        validationSchema={ Yup.object({
            lastname: Yup.string()
                .min(3, "Doit être 3 caractères ou plus")
                .max(15, "Doit être 15 caractères ou moins")
                .required("Requis"),
            firstname: Yup.string()
                .max(20, "Doit être 20 caractères ou moins")
                .required("Requis"),
            email: Yup.string()
                .email("Adresse email invalide")
                .required("Requis"),
            password: Yup.string()
                .min(8, "Doit être 8 caractères ou plus")
                .required("Requis"),
            passwordConfirm: Yup.string()
                .oneOf([Yup.ref("passwordConfirm"), null], "Les mots de passe doivent correspondre")
                .required("Requis")
        })}
        onSubmit={(values, {setSubmitting}) => {
            alert("coucou");
            setSubmitting(false);
        }}>





        <h1 className="text-3xl">Inscription</h1>
        <div className="flex flex-col h-screen ">


            <Form  className="flex flex-col flex-grow justify-center ">
                {/*<div className="form-control ">*/}
                <label htmlFor="lastname">Nom</label>
                <Field className=" mx-20  border-2 " type="text" id="lastname" name="lastname" placeholder="Votre nom" required/>
                <ErrorMessage name="lastname"/>

                       {/*value={formik.values.lastname} onBlur={formik.handleBlur}/>*/}
                {/*</div>*/}
                {/*{formik.touched.lastname && formik.errors.lastname ? <div className="text-red-600">{formik.errors.lastname}</div> : null}*/}

                {/*<div className="form-control ">*/}
                <label htmlFor="firstname">Prénom</label>
                <Field className=" mx-20 border-2 " type="text" id="firstname" name="firstname" placeholder="Votre prénom" required />
                <ErrorMessage name="firstname"/>
                {/*</div>*/}
                {/*{formik.touched.firstname && formik.errors.firstname ? <div className="text-red-600">{formik.errors.firstname}</div> : null}*/}

                {/*<div className="form-control ">*/}
                <label htmlFor="email">Email</label>
                <Field className="  mx-20 border-2 " type="email" id="email" name="email" placeholder="Votre email" required />
                <ErrorMessage name="email"/>
                {/*</div>*/}
                {/*{formik.touched.email && formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}*/}

                {/*<div className="form-control ">*/}
                <label htmlFor="password">Mot de passe</label>
                <Field className=" mx-20 border-2 " type="password" id="password" name="password" placeholder="Votre mot de passe" required />
                <ErrorMessage name="password"/>
                {/*</div>*/}
                {/*{formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}*/}

                {/*<div className="form-control ">*/}
                <label htmlFor="passwordConfirm">Confirmation du mot de passe</label>
                <Field className=" mx-20 border-2 " type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirmez votre mot de passe" required />
                <ErrorMessage name="passwordConfirm"/>

                {/*</div>*/}
                {/*{formik.touched.passwordConfirm && formik.errors.passwordConfirm ? <div className="text-red-600">{formik.errors.passwordConfirm}</div> : null}*/}


                <button  className = "m-20 bg-blue-600" type="submit">S'inscrire</button>

            </Form>
        </div>

</Formik>

    );
};




export default RegistrerForm;