import SignInForm from "./SignInForm"
import RegisterForm from "./RegisterForm"
import AddStudentForm from "./AddStudentForm"
import AddClassForm from './AddClassForm'
import AddAssignmentForm from './AddAssignmentForm'

export default function Main () {


    return (
        <div className="main">
            <SignInForm/>
            <RegisterForm/>
            <AddStudentForm />
            <AddClassForm />
            <AddAssignmentForm />
        </div>
    )
}