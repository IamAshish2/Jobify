import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectIfAuthenticated = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const validateToken = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5079/api/Login/verify-token",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            navigate("/", { replace: true });
          }
        } catch (err) {
          console.log(err);
        }
      };
      validateToken();
    }
  }, [navigate, token]);

  return children;
};

export default RedirectIfAuthenticated;
