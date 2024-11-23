"use client";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://social-login.druckland.de/api/v1/user/signin",
        {
          email,
          password,
        }
      );
      toast.success(response.data.message || "Login successful");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <TopBar />
      <Header />
      <div className="hero-container">
        <div className="image-container">
          <p>Image or Video of our services</p>
        </div>
        <LoginForm />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
