import React, {useState} from 'react'

export default function Texts() {

  const handleupClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleloClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleClear = ()=>{
    let newText="";
    setText(newText)
  }

  const handleCopy = ()=>{
   setText(this.state.textToCopy);
  }
  

  const handleOnChange = (event)=>{
    setText(event.target.value);

  }
  const [text, setText]= useState('');
  
  return (<>
   <div>
   <h1>Write Your Text Here</h1>
<div className="textbox">
  
 
 <textarea className='form-control' id='box' rows='6' cols={100} value={text} onChange={handleOnChange}></textarea>
</div>


<button type="button" class="btn btn-primary mx-2 my-2" id='b1' onClick={handleupClick}>Contvert to uppercase</button>
<button type="button" class="btn btn-primary mx-2" id='b2' onClick={handleloClick}>Contvert to lowercase</button>
<button type="button" class="btn btn-primary mx-2" id='b3' onClick={handleClear}>Clear</button>
<button type="button" class="btn btn-primary mx-2" id='b4' onClick={handleCopy}>Copy</button>





</div>
<div className='container'>
<h1>Your Text Summary</h1>
<p>{text.split(" ").length} Words and {text.length} Character</p>
<h1>Time to read the text</h1>
<p>{0.08*text.split("").length}Minutes to Read</p>
<h1>Preview</h1>
<p>{text}</p>
</div>
</>
  )
}
