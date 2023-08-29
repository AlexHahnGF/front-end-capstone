import React from "react"
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa6'
import ConfirmationDialogue from "./ConfirmationDialog";
import '../styles/bookingForm.css'

function changeDate(date) {
    const opt = {
        weekday: 'short',
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    }

    return date.toLocaleDateString("en-GB", opt);
}


function DatePicker( {setProvidedDate, setDate} ) {
    const now = new Date();
    let max = new Date(now)
    max.setDate(now.getDate() +14);
    return (
        <input
            className="date paragraph"
            type="date"
            data-date={changeDate(now)}
            min={now.toISOString().split("T")[0]}
            max={max.toISOString().split("T")[0]}
            onChange={(e) => {
                const currDate = new Date(e.target.value);
                setDate(currDate);
                setProvidedDate(currDate);
                const newValue = changeDate(currDate);
                e.target.setAttribute('data-date', newValue)
            }}>
        </input>
    )
}

export default function BookingForm({ submitFormData, availableTimes, setDates }) {
    const [time, setTime] = useState(availableTimes[0]);
    const [date, setDate] = useState(new Date());
    // const [confirmation, setConfirmation] = useState(false);
    const navigate = useNavigate();

    const setProvidedDate = (date) => {
        setDates({ type: "GET DATE", data: date })
    }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            numberOfPeople: 2,
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
            // reservationDate: Yup.date()
            //     .required('Required')
        }),
        onSubmit: () => { navigate("/success") },
    })
    console.log(formik.errors);
    return (
            <form className="form-container">
                <nav className="reserve-nav">
                    <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        <FaArrowLeft className="reserve-back"/>
                    </div>
                    <h1 className="section-title">Reserve a Table</h1>
                    <div/>
                </nav>
                <div className="book-container">
                    <h1 className="lead-text mb-12">Contact Information</h1>
                    <label htmlFor="name">
                        <h3 className="paragraph">Name</h3>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange('firstName')}
                        onBlur={formik.handleBlur}
                        placeholder="Max Mustermann"
                        className={`book-input ${formik.errors.firstName ? 'input-error' : ''}`}
                    />
                    {(formik.errors.firstName && formik.touched.firstName) ? (
                        <div className="error-container">
                            {formik.errors.firstName}
                        </div>
                    ) : null}

                    <label htmlFor="email">
                        <h3 className="paragraph">E-Mail</h3>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        onBlur={formik.handleBlur}
                        placeholder="example@mail.com"
                        className={`book-input ${formik.errors.email ? 'input-error' : ''}`}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <div className="error-container">
                            {formik.errors.email}
                        </div>
                        ) : null}

                    <h3 className="lead-text mt-24 mb-9">Reservation Date and Time</h3>
                    <div className="date-time-picker">
                        <DatePicker className="date paragraph" setProvidedDate={setProvidedDate} setDate={setDate} />
                        <select name="reservationDate" className="time paragraph" onChange={(e) => setTime(e.target.value)}>
                            {
                                availableTimes.map((time, idx) => (
                                    <option key={idx} value={time}>{time}</option>
                                ))
                            }
                        </select>
                    </div>
                    <label htmlFor="numOfPeople">
                        <h3 className="paragraph">Number of people</h3>
                    </label>
                    <input
                        type="number"
                        name="numberOfPeople"
                        value={formik.values.numberOfPeople}
                        onChange={formik.handleChange('numberOfPeople')}
                        className="book-input"
                        min="1"
                    />
                    <div className="button-container">
                        <button
                        className="yellow-rounded lead-text"
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                        onClick={submitFormData}
                        style={!(formik.isValid && formik.dirty) ? {backgroundColor: 'grey'} : {} }>
                            Reserve
                        </button>
                    </div>
                    <h3 className="lead-text mt-24">Please notice that...</h3>
                        <ul className="paragraph">
                            <li>Your reservation confirmation will be sent into your e-mail so please make sure your contact information is correct.</li>
                            <li>If you don't arrive by 30 minutes we will give your table to someone else.</li>
                            <li>There is an extra service charge of 50 cents by using our online reservation.</li>
                    </ul>
                </div>
            </form>
    )
}