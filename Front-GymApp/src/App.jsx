import { Route, Routes } from "react-router-dom";

//___Importamos nuestra páginas a nuestra App
import { HomePagePublic } from "./pages/HomePagePublic.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { AddActivity } from "./pages/AddActivity.jsx";
import { LikePage } from "./pages/LikePage.jsx";
import { ActivityPage} from "./pages/ActivityPage.jsx";
import { EditInformationActivityPage } from "./pages/EditInformationActivityPage.jsx";
import { DeleteInformationActivityPage } from "./pages/DeleteInformationActivityPage.jsx";
import { Header } from "./componentes/Header.jsx";
import { AuthProviderComponent } from "./context/AuthContext.jsx";


function App() {
  return (
    <AuthProviderComponent>
      <Header />
      <main
        style={{
          overflow: "scroll",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          gap: "8px",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePagePublic />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/activity/:id" element={<ActivityPage />} />
          <Route path="/activity/:id/new" element={<AddActivity />} />
          <Route path="/activities/:id/favorite" element={<LikePage />} />
          <Route path="/activities/:id/editInformation" element={<EditInformationActivityPage />} />
          <Route path="/activities/:id/delete" element={<DeleteInformationActivityPage />} />
         
        </Routes>
      </main>
    </AuthProviderComponent>
  );
}

export default App;
