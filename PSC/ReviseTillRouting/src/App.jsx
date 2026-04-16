
import Navbar from "./components/common/Navbar";
import AuthProvider from "./context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <div>
      <AuthProvider>
      <Navbar />
    <AppRoutes/>
    </AuthProvider>
    </div>
  );
};

export default App;
