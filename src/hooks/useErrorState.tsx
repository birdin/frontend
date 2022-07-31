import { useState } from "react";

const useErrorState = () => {
    const [error, setError] = useState({
        email: false,
        password: false
    });
    return {error, setError};
    }
export default useErrorState;
