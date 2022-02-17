import client from './client'
const endpoint ='/listings'
const getListings=()=>client.get(endpoint)
const addListing=(listing,onUploadProgress)=>{
    //here we use the apiClient to post the 
    //each http request has a header called content type with this request we tell the sever what kind of data we send to the request
    //when we send json the contenttype is set to the application/json
    //for uploading file and images we use special kind of multipart/form-data
     //when we send formdata using apisauce it will internally set the contentype to multipart/form data
const data=new FormData();
data.append("title",listing.title);
data.append('price',listing.price);
data.append('rating',listing.rating);
data.append('categoryId',listing.category.value)
data.append("description",listing.description)
listing.images.forEach((image,index)=> data.append('images',{
    name:'image'+index,
    type:'image/jpeg',
    uri:image
}));
if(listing.location)
data.append('location',JSON.stringify(listing.location))
return client.post(endpoint,data,{
    onUploadProgress:progress=>onUploadProgress(progress.loaded/progress.total)
}) //it return the promise so we have to return from a
}
export default{
    getListings,
    addListing,
}