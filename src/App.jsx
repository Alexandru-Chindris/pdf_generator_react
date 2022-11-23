import { useState } from 'react'
import './App.css'

function App() {
  const[date, setDate] = useState('')
  const[doc, setDoc] = useState('')
  const[name, setName] = useState('')
  const[address, setAddress] = useState('')
  const[piva, setPiva] = useState('')
  const[fiscal, setFiscal] = useState('')
  const[uniqueId, setUniqueId] = useState('')
  const[articleId, setArticleId] = useState('')
  const[qtn, setQtn] = useState('')
  const[price, setPrice] = useState('')

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

  const handleSubmit = event => {
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
            PrezzoUnitario: ${price} \n`);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h3>Dati generali</h3>
          <div>
            <input type="date" required="required" value={date} onChange={handleDate}/>
          </div>
          <div>
          <input type="number" placeholder="Inserisci il numero della fattura" required="required" value={doc} onChange={handleDoc}/>
          </div>
          <h3>Informazioni destinatario</h3>
          <div>
            <input type="text" placeholder="Inserisci il tuo nome" required="required" value={name} onChange={handleName}/>
          </div>
          <div>
            <input type="text" placeholder="Inserisci il tuo inidirizzo" required="required" value={address} onChange={handleAddress}/>
          </div>
          <div>
            <input type="text" placeholder="Inserisci il PIVA" required="required" value={piva} onChange={handlePiva}/>
          </div>
          <div>
            <input type="text" placeholder="Inserisci il tuo codice fiscale" required="required" value={fiscal} onChange={handleFiscal}/>
          </div>
          <div>
            <input type="text" placeholder="Inserisci il codice univoco" required="required" value={uniqueId} onChange={handleUniqueId}/>
          </div>
          <h3>Contenuto</h3>
          <div>
            <input type="text" placeholder="nome articolo" required="required" value={articleId} onChange={handleArticleId}/>
          </div>
          <div>
            <input type="number" placeholder="quantita" required="required" value={qtn} onChange={handleQtn}/>
          </div>
          <div>
            <input type="number" step="any" placeholder="prezzo unitario" required="required" value={price} onChange={handlePrice}/>
          </div>
          <button type="submit">
            Crea PDF
          </button>
        </form>
    </div>
  )
}

export default App
