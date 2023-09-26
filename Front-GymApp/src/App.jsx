import { Route, Routes } from "react-router-dom";

//import { Footer } from "./components/Footer.jsx";

//import { AllPostsPage } from "./pages/all-posts-page.jsx";
//import { LoginPage } from "./pages/login-page.jsx";
//import { NotFoundPage } from "./pages/not-found-page.jsx";
//import { RegisterPage } from "./pages/register-page.jsx";
//import { ValidateEmailPage } from "./pages/validate-email-page.jsx";
//import { PostDetailPage } from "./pages/post-detail.jsx";
//import { CreatePostPage } from "./pages/create-post-page.jsx";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//import { NewCommentPage } from "./pages/new-comment-page.jsx";
//import { EditCommentPage } from "./pages/edit-comment-page.jsx";

//___Importamos nuestra páginas a nuestra App
import { HomePagePublic } from "./pages/HomePagePublic.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { ValidateEmailPage } from "./pages/ValidateEmailPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { AddActivity } from "./pages/AddActivity.jsx";
import { LikePage } from "./pages/LikePage.jsx";
import { MoreInformationActivityPage } from "./pages/MoreInformationActivityPage.jsx";
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
          {/*<Route path="/activity/:id" element={<ActivityPage />} />*/}
          <Route path="/activity/:id/new" element={<AddActivity />} />
          <Route path="/activities/:id/favorite" element={<LikePage />} />
          <Route path="/activities/:id/moreInformation" element={<MoreInformationActivityPage />} />
          <Route path="/activities/:id/editInformation" element={<EditInformationActivityPage />} />
          <Route path="/activities/:id/delete" element={<DeleteInformationActivityPage />} />
         
        </Routes>
      </main>
    </AuthProviderComponent>
  );
}

export default App;
