import { useState } from 'react'
import styled from "styled-components";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Page = styled.div`
  min-height: 50vh;
  background-color: #3a434c;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

const Page1 = styled.div`
  min-height: 50vh;
  background-color: #7ea7d1;
  padding: 40px;
  font-family: Arial, sans-serif;
`;
const Mybutton = styled.div`
  min-height: 50vh;
  background-color: #142a3f;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-danger">Danger</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-light">Light</button>
                    <button className="btn btn-dark">Dark</button>

                    <button className="btn btn-outline-primary">Primary</button>
                    <button className="btn btn-outline-success">Success</button>
                    <button className="btn btn-outline-danger">Danger</button>
      <Page>
        <h1>this is a styled component page for div with special style</h1>
      </Page>

      <br /><br />

      <Page1>
        <h1>this is styled component for div with special styles</h1>
      </Page1>

       <Mybutton>
        <h1>this is styled component for div with special styles</h1>
      </Mybutton>
    </>
  )
}

export default App
