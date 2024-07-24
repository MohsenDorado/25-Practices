"use client"
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
    const [qrcode, setQrcode] = useState<string>('')
    const [input, setInput] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)


    useEffect(() => {
        if (input&&input.trim()!=="") {

            
            setButtonDisabled(false)
        }
        if (input.length<=0&&input.trim()=='') {
            setButtonDisabled(true)
            
        }


    }, [input])
    
    const handleButton=()=>{
        setQrcode(input)

    }
    return (
        
        
        <div className="flex items-center justify-center flex-col">
            <h1 className="font-semibold text-3xl my-2">QR Code Generator</h1>
            <h3 className="text-center">Paste the uri or any kind of link you wish.<br/>You are also more than welcome to enter any kinna text for the conversion...</h3>
            <div className="flex items-center my-3">

            <input
            onChange={(e)=>setInput(e.target.value)}
            type="text" className="h-[30px] border placeholder:text-xs placeholder:text-center cursor-text" placeholder="Enter the text to be QR Coded!" />
            <button
            disabled={buttonDisabled}
            onClick={handleButton}
            className="disabled:hover:bg-sky-50 p-[2px] h-[30px] border bg-sky-50 hover:bg-sky-100 rounded-sm px-8">Generate</button>
            </div>
            <QRCode
            id="qr-code-valu"
            value={qrcode}
            size={400}
            bgColor="white"/>

    </div> );
}
 
export default QrCode;