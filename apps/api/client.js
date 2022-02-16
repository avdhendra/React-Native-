import{create} from 'apisauce'
const apiClient=create({
    baseURL:"http://192.168.43.185:9000/api"
})

export default apiClient





// apiClient.get('/listings').then(response=>{
//     //no need of try catch block
//     if(!response.ok){
//         response.problem
//     }
// })

//good thing about apisauce is whenever we call the server promises are always resolve