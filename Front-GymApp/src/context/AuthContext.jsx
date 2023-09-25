import { createContext } from "react"; 

export const AuthContext = createContext();

export const AuthProviderComponent = ({children}) => {
const [token, setToken] = useState (localStorage.getItem("token")); 
const [user, setUser]= useState(null);

useEffect(()=>{
    localStorage.setItem("token", token);
}, [token]);


//Información del usuario logado 
useEffect(()=>{
const getUserData =async () =>{
    try{
        const data= await getUserDataService({token})
        setUser (data);
    }catch (error){

    }
}
if(token) getUserData()
}, [token])

const login = (token) => {
    setToken(token);
};

constlogout = ()=> {
setToken('');
setUser(null)
};

return (
        <AuthContext.Provider value= {{token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
 