import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  note:any[]=[]
  message:any ='';
// name:any ='';
postData:any;
msg:any
id:any


// const note: { [key: string]: any } = { someKey: 'value' };

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.get()

    
  }
  get(){
    this.http.get("http://localhost:3000/data").subscribe(response=>{
      this.data=response


    })

  }
  edit(postData:any,id:any){
    

    this.http.put("http://localhost:3000/data/"+id,postData).subscribe(data=>{
    // console.log(data);
    // this.msg=JSON.stringify(data)
    this.message=postData
    // console.log(postData);
    // this.data=this.post()
    this.delete(id)
    this.get()
    
    
    })
}
  post() {
    // Create an object to hold the data to be posted
    const postData = {
      message: this.message,
      // name: this.name
    };
  
    // Send a POST request to the server with the data
    this.http.post("http://localhost:3000/data", postData).subscribe(res => {
      console.log(res);
      console.log(postData);
      this.message="";

      
      this.get(); // Refresh the data after posting
    });
  }
  delete(id:any){
    
    this.http.delete("http://localhost:3000/data/"+ id).subscribe(r=>{
    console.log(r);
    this.get()
    
    })
  }
 
}