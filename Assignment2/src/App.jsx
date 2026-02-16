import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [readData, setReadData] = useState("") // 👈 NEW
  const [systemData,setSystemData]= useState({})


  const imagestyle = {
    height: '80px',
    width: '80px',
    objectFit: 'contain'
  }

  const maincontainer = {
    height: '600px',
    width: '400px',
    border: '2px solid red'
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'white'
  }

  const header = {
    height: '80px',
    width: '400px',
    display: 'flex',
    justifyContent: "space-evenly",
    alignItems: "center",
     textColor:"white"
  }

  const navStyle = {
    display: 'flex',
    gap: '20px',
   
  }

  const textareaStyle = {
    width: '90%',
    height: '120px',
    margin: '10px'
  }

  const buttonStyle = {
    margin: '10px',
    padding: '8px 14px',
    cursor: 'pointer'
  }

  // 🔹 FS CREATE (write)
  const fsCreate = async () => {
    const res = await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
    const data = await res.json()
    setMessage(data.message)
  }

  
  async function systeminfo(params) {
    const res=await fetch("http://localhost:5000/getSystem")
    const data=await res.json()
    console.log(data);
    
    setSystemData(data)
  }
  useEffect(()=>{
   systeminfo()
  },[])
  // 🔹 FS READ (show below)
  const fsRead = async () => {
    const res = await fetch("http://localhost:5000/read")
    const data = await res.json()
    setReadData(data.text) // 👈 show below
  }

  return (
    <>
      <div style={maincontainer}>

        {/* HEADER */}
        <div style={header}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.kHklXgjn2YmB4WzCeHv-jgHaHa?pid=Api&P=0&h=180"
            style={imagestyle}
            alt="logo"
          />

          <div style={navStyle}>
            <a href="/home" style={linkStyle}>Home</a>
            <a href="/about" style={linkStyle}>About</a>
            <a href="/contact" style={linkStyle}>Contact</a>
            <a href="/services" style={linkStyle}>Services</a>
          </div>
        </div>

        <hr style={{ border: "2px solid red" }} />

        {/* WRITE */}
        {/* SYSTEM DATA */}
{systemData.pf && (
  <div style={{ margin: "10px", padding: "10px", border: "1px solid green" }}>
    <h3>System Information</h3>

    <p><b>Platform:</b> {systemData.pf}</p>

    <p><b>Username:</b> {systemData.ui?.username}</p>

    <p><b>Hostname:</b> {systemData.hn}</p>

    <p><b>Total Memory:</b> {(systemData.tm / 1024 / 1024 / 1024).toFixed(2)} GB</p>

    <p><b>Free Memory:</b> {(systemData.fm / 1024 / 1024 / 1024).toFixed(2)} GB</p>
  </div>
)}

       

        {/* READ OUTPUT BELOW */}
        {readData && (
          <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <strong>Read Data:</strong>
            <p>{readData}</p>
          </div>
        )}

        <p>{message}</p>

      </div>
    </>
  )
}

export default App
  