import { Injectable } from "@angular/core";

@Injectable()
export class SharedService
{
    public userData;
    public policymoney;
    public userId;
    public vehicleId;
    public allthree:[];
    public IDV_price;
    public Policy_price;
    public Vehicle_Id;
    public paymentData;
    public finalData;
    public profileData;
    public policyIdForClaim;
    public policyIdForRenew;
    public policyId;
    public renewProfileData;

    public adminEmail;
    public CustomerId;
    public RetailerId;

    public getCustomerId(){
        return this.CustomerId;
    }
    public setCustomerId(Id){
        this.CustomerId=Id;
    }
    public setadminEmail(email)
    {
            this.adminEmail=email;
    }
    public getadminEmail()
    {
        return this.adminEmail;
    }
    public getRetailerId(){
        return this.RetailerId;
    }
    public setRetailerId(email){
        this.RetailerId=email;
    }


    public setrenewProfileData(renewdata)
    {
            this.renewProfileData=renewdata;
    }

    public getrenewProfileData()
    {
            return this.renewProfileData;
    }




    public setPolicyId(policy)
    {
        this.policyId=policy;
    }

    public getPolicyId()
    {
        return this.policyId;

    }
   





public setPolicyIdForRenew(policyIdforrenew)
{

this.policyIdForRenew=policyIdforrenew;

}


public getPolicyIdForRenew()
{

return this.policyIdForRenew;

}



public setPolicyIdForClaim(policyids)
{
    
this.policyIdForClaim=policyids;
console.log("In set policy id for claim");
console.log(this.policyIdForClaim);

}

public getPolicyIdForClaim()
{
    console.log("In get policy id for claim");
    console.log(this.policyIdForClaim);

    return this.policyIdForClaim;

    
}





    public setprofileDatass(profile)
    {
        this.profileData=profile;
        console.log(profile);
        //console.log(this.profileData);
       // console.log(profile);
       // console.log("In profile service");
    }

    public getprofileDatass()
    {
        return this.profileData;
    }

public setfinalDetails(finaldata)
{
    this.finalData=finaldata;
}

public getfinalDetails()
{
    return this.finalData;

}




public setpaymentDetails(paymentdata)
{
    this.paymentData=paymentdata;
}

public getpaymentDetails()
{
    return this.paymentData;
}


public setAllDetails(allthree)
{
   this.allthree=allthree;
}



public getAllDetails()
{
   return this.allthree;
}



    public setVehicleId(vehicle_Id)
    {
        this.vehicleId=vehicle_Id;
    }

    public getVehicleId()
    {
        return this.vehicleId;
    }

    public setuserData(data)
    {
        this.userData=data;
    }

    public getuserData()
    {
        return this.userData;
    }

    public setuserId(userId)
    {
        this.userId=userId;
       // console.log("setuserid");
    }



    public getuserId()
    {
        return this.userId;
        //console.log("in userid");
    }

    
}


