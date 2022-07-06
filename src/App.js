import React, { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./supabaseClient";
import moment from "jalali-moment";

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const getData = async () => {
    try {
      if (loading) return;
      setLoading(true);
      const { data, error } = await supabase.from("filimosms").select();
      setTimeout(() => {
        if (data) {
          setMessage(data[0].message);
          setCreatedTime(data[0].time);
        }
        setLoading(false);
      }, 1000);
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1B2845",
        flexDirection: "column",
        direction: "rtl",
      }}
    >
      <div
        style={{
          background: "#335C81",
          color: "white",
          padding: "20px",
          borderRadius: "3px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <span>{loading ? <progress></progress> : `${message}`}</span>
      </div>
      <div
        style={{
          background: "#335C81",
          color: "white",
          padding: "20px",
          borderRadius: "3px",
          minWidth: "300px",
          marginTop: "10px",
          textAlign: "center",
          direction: "ltr",
        }}
      >
        <span>{loading ? <progress></progress> : `${createdTime}`}</span>
      </div>

      <div
        className="button"
        style={{
          background: loading ? "rgba(34, 111, 84, 0.4)" : "#226F54",
          color: "white",
          padding: "20px",
          borderRadius: "3px",
          minWidth: "300px",
          marginTop: "10px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={getData}
        disabled={loading}
      >
        <span>بروزرسانی</span>
      </div>
    </div>
  );
}

export default App;
