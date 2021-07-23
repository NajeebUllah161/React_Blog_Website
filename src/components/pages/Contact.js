import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/contact.png';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    section: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name *', validation: '"Please enter your name.' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *', validation: '"Please enter your email address.' },
            { name: 'phone', elementName: 'input', type: 'tel', placeholder: 'Your Phone *', validation: '"Please enter your phone number.' },
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message *', validation: '"Please enter a message.' },
        ]
    ]
}

class Contact extends Component {

    render() {
        return (
            <div>
                {!(this.props.showHeader) &&
                    <Header
                        title="Contact Us!"
                        subtitle="WE WILL RESPOND QUICKLY"
                        showButton={false}
                        image={image}
                    />
                }

                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                            <div className="row align-items-stretch mb-5">
                                {fields.section.map((section, sectionIndex) => {
                                    console.log("rendering", sectionIndex, "with", section);
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>
                                            {section.map((field, i) => {
                                                return <Field
                                                    {...field}
                                                    key={i}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={this.props.touched[field.name]}
                                                    errors={this.props.errors[field.name]}
                                                    rows={9}
                                                />
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send
                        Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Your name should be longer than that.')
            .max(30, 'Your name is too long')
            .required('Please add your name.'),
        email: Yup.string().email('Please enter a valid email address.')
            .required('Please enter your email address.'),
        phone: Yup.string().min(10, 'Phone number should be atleast 10 digits long.')
            .max(15, 'Your phone number is too long.')
            .required('Please enter your phone number.'),
        message: Yup.string().min(100, 'We need more detailed information')
            .max(500, 'Your message is very long')
            .required('Please add your message.')

    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        alert("You've submitted the form.", JSON.stringify(values));
    }


})(Contact);


