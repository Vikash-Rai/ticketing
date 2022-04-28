
import fetch from 'node-fetch';
const createTicket = async(ticketBody)=>{
    const newsummary = ticketBody.summary;
    const newdesc = ticketBody.description;
    const newissue = ticketBody.issuetype;
    const bodyData = {
        "fields":{
            "project":{
                "key":"VR"
            },
            "summary":newsummary,
            "description":newdesc,
            "issuetype":{
                "name":newissue             //use Epic or Task
            }
        }
    }
    try {
        fetch('https://vikashrai.atlassian.net/rest/api/2/issue', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(
                'vikashraiaws@gmail.com:token'//enter token
                ).toString('base64')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
            })
            .then(response => {
                console.log(
                `Response: ${response.status} ${response.statusText}`
                );
                return response.json();
            })
            .then(text => console.log(text))
            .catch(err => console.error(err));
        
       
      } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Ticket Service Problem');
      }
}

export default createTicket;

