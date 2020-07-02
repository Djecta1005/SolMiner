import axios from 'axios'
const url = 'http://localhost:3000/supply/';


class FournituresService{
// Create Fourniture

    static insertFourniture( req) {
        return axios.post(url+'add',req)
          .then(function (response) {
            req.unshift(response.data)
            
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      
        
        
    }
    static updateStockFourniture(wilaya,Establishment,supply,text)
    {
        console.log(text.supplystockNumber)
        return axios.patch(url+'update/Stock/'+wilaya+'/'+Establishment+'/'+supply,text)
        .then(function (response) {
            text.unshift(response.data)
            
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    static updateRequestFourniture(wilaya,Establishment,supply,text)
    {
        console.log(text.supplyrequestNumber)
        return axios.patch(url+'update/Request/'+wilaya+'/'+Establishment+'/'+supply,text)
        .then(function (response) {
            text.unshift(response.data)
            
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    static deleteFourniture(req)
    {
        
        return axios.delete(url+'delete/',{data:req})
        .then(function (response) {
          req.unshift(response.data)
          
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

}
export default FournituresService;