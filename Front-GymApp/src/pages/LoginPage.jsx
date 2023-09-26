import { AuthContext } from "../context/AuthContext";
import { loginUserServices } from "../services";

export const LoginPage = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]=useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext)
    const navigate = useNavigate ();

    const handleForm =async (e) =>{
        e.preventDefault();
        try {
            const data = await loginUserServices ({email, password});
            login(data);
            navigate("/activities/:id");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
    <section> 
    <h1> Login Page </h1> 
    <form onSubmit={handleForm}>
        <fieldset>
            <label htmlFor ="email">Email</label>
            <input 
            type="email"
            id="email" 
            name="email" 
            required
            onChange={(e) => setEmail(e.target.value)} />
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        required
        onChange={(e) => setPassword(e.target.value)} />
        </fieldset>

        <button>Login</button>
        {error ? <p> {error} </p>:null} 
    </form>
    </section>
    );
    };