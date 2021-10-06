

import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', pass_word: '', confirmPassword: ''}


const Auth = () =>{


    const [formData, setFormData] = useState(initialState);


    const handleSubmit = (e) =>{
        e.preventDefault();

        if(isSignup){
            dispatch(signup(formData, history))
        }else{
            dispatch(signin(formData, history))
        }
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }


}