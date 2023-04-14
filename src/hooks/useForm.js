import { useState } from "react";

export function useForm(initialValues, onSubmitHandler) {
    const [values, setValues] = useState(initialValues);

    function changeHandler(e) {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        

        onSubmitHandler(values);
        setValues(initialValues)
    }

    function changeValues(newValues){
        setValues(newValues)
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    };
}
