import { GoogleLogin } from "@react-oauth/google";
import logoImage from "../assets/claude-logo.svg";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={logoImage}
            alt="Claude Logo"
            className="w-20 h-20 mb-6"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/80x80?text=Claude";
            }}
          />
          <h1 className="text-2xl font-semibold mb-1 text-center">
            Welcome to Claude
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Your helpful AI assistant
          </p>
        </div>

        <div className="space-y-4">
          {/* Google Login Button */}
          <div className="flex justify-center mb-6">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Google login successful:", credentialResponse);
                onLogin();
              }}
              onError={() => {
                console.log("Google login failed");
                // For demo purposes, let's still allow login even if Google fails
                onLogin();
              }}
              useOneTap
              width="300px"
            />
          </div>

          {/* Demo login button */}
          <button
            onClick={onLogin}
            className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
          >
            Continue with Demo Account
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing, you agree to Claude's Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
