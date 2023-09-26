

//conexión con el servidor para traer la información de la actividad
export const getSigleActivityService = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/activity/${id}`)

    const json = await response.json();
    if (!response.ok){
    throw new Error (json.message);
    }
    return json.data;
};

//conexión con el servidor para el login del usuario
export const loginUserServices = async (email, password)=> { 
    const response = await fetch (`${import.meta.env.VITE_APP_BACKEND}/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password})
    });
    const json = await response.json(); 
    if(!response.ok) {
        throw new Error (json.message);
    }

    return json.data; 
}
// Añadir REgistro de usuarios

export const registerUserService = async (user)=> { 
    const response = await fetch (`${import.meta.env.VITE_APP_BACKEND}/user`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    });
    const json = await response.json();
    if(!response.ok) {
        throw new Error (json.message);
    }
}

export const getUserDataService = async ({token}) => {
    const response = await fetch (`${import.meta.env.VITE_APP_BACKEND}/User`, {
        headers: {
            Authorization: token
        },
    });

    const json =await response.json ();
    if (!response.ok){
        throw new Error (json.message);
    }
    return json.data;
};