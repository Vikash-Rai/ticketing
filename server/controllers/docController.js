//import registerModel from "../modals/docModels/registerSchema.js"
//import signupdocModel from "../modals/docModels/signupdocSchema.js";
import fetch from 'node-fetch';
import FormData from 'form-data';
import { statSync, createReadStream } from 'fs';
import createTicket from "../services/ticketService.js"
// const { Readable } = require('stream');
import {Readable} from 'stream'

// const stream = Readable.from(myBuffer.toString());


export const uploadFiles = async(request,response)=>{
    console.log(request.file);
    // const filePath = request.file.path;
    // // const sendData = createReadStream(filePath)
    const form = new FormData();
    // // const stats = statSync(filePath);
    // // const fileSizeInBytes = stats.size;
    // form.append('file', createReadStream(filePath));
    const stream = Readable.from(request.file.buffer);
    form.append('file', stream);

//
 fetch('https://vikashrai.atlassian.net/rest/api/2/issue/VR-79/attachments', {
     method: 'POST',
     body: form, 
     headers: {
        'Authorization': `Basic ${Buffer.from(
        'vikashraiaws@gmail.com:token'//enter token
        ).toString('base64')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/octet-stream',
        'X-Atlassian-Token': 'no-check'
    }
 })
     .then(response => {
         console.log(
             `Response: ${response.status} ${response.statusText}`
         );
         return response.text();
     })
     .then(text => console.log(text))
     .catch(err => console.error(err));
    
    
}
export const issueTicket=async(request,response)=>{
    
    await createTicket(request.body) //ticketService
    
}


