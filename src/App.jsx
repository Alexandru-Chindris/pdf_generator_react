import { useState } from 'react'
import './App.css'
import { jsPDF } from "jspdf";

function App() {
  const[date, setDate] = useState('')
  const[docc, setDoc] = useState('')
  const[name, setName] = useState('')
  const[address, setAddress] = useState('')
  const[piva, setPiva] = useState('')
  const[fiscal, setFiscal] = useState('')
  const[uniqueId, setUniqueId] = useState('')
  const[articleId, setArticleId] = useState('')
  const[qtn, setQtn] = useState('')
  const[price, setPrice] = useState('')
  const[fileName, setFileName] = useState('')

  const handleDate = event => {
    setDate(event.target.value)
  };

  const handleDoc = event => {
    setDoc(event.target.value)
  };

  const handleName = event => {
    setName(event.target.value)
  };

  const handleAddress = event => {
    setAddress(event.target.value)
  };

  const handlePiva = event => {
    setPiva(event.target.value)
  };

  const handleFiscal = event => {
    setFiscal(event.target.value)
  };

  const handleUniqueId = event => {
    setUniqueId(event.target.value)
  };

  const handleArticleId = event => {
    setArticleId(event.target.value)
  };

  const handleQtn = event => {
    setQtn(event.target.value)
  };

  const handlePrice = event => {
    setPrice(event.target.value)
  };

  const handleFileName = event =>{
    setFileName(event.target.value)
  };
// Test function
 /*  const handleSubmit = event => {
    event.preventDefault();
    alert(`Dati inseriti: \n 
            DataFattura: ${date} \n 
            NumFattura: ${doc} \n
            Informazioni destinatario
            NomeCompleto: ${name} \n
            Indirizzo: ${address} \n
            Piva: ${piva} \n
            Codice fiscale: ${fiscal} \n
            Codice univoco: ${uniqueId} \n
            Contenuto
            NomeArt: ${articleId} \n
            Qta: ${qtn} \n
            PrezzoUnitario: ${price} \n
            `);
  }; */

  function handlePDF() {
    const doc = new jsPDF();

    // timestamp
    const now = new Date();
    doc.text(20,20, `Generated at: ${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`);

    //data insertion
    doc.text(`Date: ${date}`,20,40 );
    doc.text(`Document number: ${docc}`,20,60 );
    doc.text(`Name: ${name}`,20,80 );
    doc.text(`Address: ${address}`,20,100 );
    doc.text(`iban: ${piva}`,20,120 );
    doc.text(`Fiscal ID: ${fiscal}`,20,140 );
    doc.text(`Unique ID: ${uniqueId}`,20,160 );
    doc.text(`Article name:${articleId}`,20,180 );
    doc.text(`Amount: ${qtn}`,20,200 );
    doc.text(`Price: ${price}`,20,220 );

    doc.save(fileName+".pdf"); 
  }

  return (
    <div>
        <form onSubmit={handlePDF} class="container">
          <h3>Dati generali</h3>
          <div>
            <input class="input" type="date" required="required" value={date} onChange={handleDate}/>
          </div>
          <div >
          <input class="input" type="number" placeholder="insert docoment number" required="required" value={docc} onChange={handleDoc}/>
          </div>
          <h3>Informazioni destinatario</h3>
          <div>
            <input class="input" type="text" placeholder="Insert your name" required="required" value={name} onChange={handleName}/>
          </div>
          <div>
            <input class="input" type="text" placeholder="Insert your address" required="required" value={address} onChange={handleAddress}/>
          </div>
          <div>
            <input class="input" type="text" placeholder="Insert your IBAN" required="required" value={piva} onChange={handlePiva}/>
          </div>
          <div>
            <input class="input" type="text" placeholder="Insert your fiscal id" required="required" value={fiscal} onChange={handleFiscal}/>
          </div>
          <div>
            <input class="input" type="text" placeholder="insert your unique id" required="required" value={uniqueId} onChange={handleUniqueId}/>
          </div>
          <div>
          <h3>Content</h3>
          <div>
            <input class="input" type="text" placeholder="article name" required="required" value={articleId} onChange={handleArticleId}/>
          </div>
          <div>
            <input class="input" type="number" placeholder="amount" required="required" value={qtn} onChange={handleQtn}/>
          </div>
          <div>
            <input class="input" type="number" step="any" placeholder="price" required="required" value={price} onChange={handlePrice}/>
          </div>
        </div>
        <h3>Additional information for generating PDF</h3>
          <div>
            <input class="input" type="text" placeholder="pdf name" required="required" value={fileName} onChange={handleFileName}/>
          </div>
          <button type='submit' class="submit">
            Crea PDF
          </button>
        </form>
    </div>
  )
}

export default App
