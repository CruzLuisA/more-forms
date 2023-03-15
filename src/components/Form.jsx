import { useState } from "react"

const Form = () => {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [firstNameErrors, setFirstNameErrors] = useState(null)
    const [lastName, setLastName] = useState('')
    const [lastNameErrors, setLastNameErrors] = useState(null)
    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState(null)

    const firstNameHandler = (e) =>{
        setFirstName(e.target.value)
        if (firstName.length < 2){
            setFirstNameErrors('First name must be at least 2 characters')
        } else{
            setFirstNameErrors(null)
        }
    }
    const lastNameHandler = (e) =>{
        setLastName(e.target.value)
        if (lastName.length < 2){
            setLastNameErrors('Last name must be at least 2 characters')
        } else{
            setLastNameErrors(null)
        }
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value)
        if (email.length < 2){
            setEmailErrors('Email name must be at least 2 characters')
        } else{
            setEmailErrors(null)
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(password.length < 8){
            setPasswordErrors('Password must be at least 8 characters')
        } else{
            setPasswordErrors(null)
        }
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
        if(confirmPassword !== password){
            setConfirmPasswordErrors('Password must match')
        } else{
            setConfirmPasswordErrors(null)
        }
    }

    return (
    <div  className='card mt-3'> 
        <div className='card-body'>
            <h4 className='card-title'></h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    className="form-control"
                    value={firstName}
                    onChange={firstNameHandler}
                    />
                    {firstNameHandler && (
                        <span className="form-text text-danger">
                            {firstNameErrors}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    className="form-control"
                    value={lastName}
                    onChange={lastNameHandler}
                    />
                    {lastNameHandler && (
                        <span className="form-text text-danger">
                            {lastNameErrors}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    className="form-control"
                    value={email}
                    onChange={emailHandler}
                    />
                    {emailHandler && (
                        <span className="form-text text-danger">
                            {emailErrors}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="form-control"
                    value={password}
                    onChange={passwordHandler}
                    />
                    {passwordHandler && (
                        <span className="form-text text-danger">
                            {passwordErrors}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="form-control"
                    value={confirmPassword}
                    onChange={confirmPasswordHandler}
                    />
                    {confirmPasswordErrors && (
                        <span className="form-text text-danger">
                            {confirmPasswordErrors}</span>
                    )}
                </div>
            </form>
        </div>
    </div>
    )
}

export default Form