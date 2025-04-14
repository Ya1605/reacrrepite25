import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import {AuthDataModels} from "../models/AuthDataModels";

const FormComponent = () => {
   const {handleSubmit,
          register
   } =  useForm <AuthDataModels>({defaultValues: {username: 'userSZ1', password: 'P@$$word1'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

   const authenticate = async (formData:AuthDataModels)=>{
       const isAuth = await authService.authenticate(formData);
       setIsAuthState(isAuth);
   };

    return (
        <div>

            <h3> login form</h3>

            <div>
                {
                    isAuthState? <span>ok</span> : <span> not ok</span>
                }
            </div>
         <form onSubmit = {handleSubmit(authenticate)}>
             <input type="text" {...register('username')}/>
             <input type="text" {...register('password')}/>
         </form>
        </div>
    );
};

export default FormComponent;