

//conexión con el servidor para traer la infromación de la actividad
export const getSigleActivityService = async (id) => {
    const response = wait fetch(`${process.env.REACT_APP_BACKEND}/activity/${id}`), 

    const json = await response.json();
    if (!response.ok){
    throw new Error (json.message);
};

return json.data;
};

//conexión con el servidor para el login del usuario
export const loginUserServices = async (email, password)=> 
const response = await fetch (`${process.env.REACT_APP_BACKEND}/login`,{
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

export const getUserData  async ({token}) =>
const response = await fetch (`${process.env.REACT_APP_BACKEND}/User`,)
headers: {
    Authorization: token
},
});

const json =await response.json ();
if (1response.ok){
    throw new Error (json.message);
}
return json.data;
};