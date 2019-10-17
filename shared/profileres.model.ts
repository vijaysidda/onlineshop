
export class UserProfileRes{
    message:string;
    firstname:string;
    lastname:string;
    countryCode?: String;
    number : string;
    _id:string;
    email:string;
    createdAt?:string;
    updatedAt?:string;

    constructor(userResponse:any){
        //this.message = userResponse.message;
        this.firstname=userResponse.data.name.first;
        this.lastname=userResponse.data.name.last;
       // this.countryCode=userResponse.data.mobile.countrycode;
       this.number=userResponse.data.mobile.number;
       this._id=userResponse.data._id;

       this.email=userResponse.data.email;

    }
    
}