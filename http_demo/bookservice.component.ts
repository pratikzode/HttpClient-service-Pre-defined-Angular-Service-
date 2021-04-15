import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Book } from "./book";
@Component({
  selector: 'app-bookservice',
  templateUrl: './bookservice.component.html', 
})
export class BookServiceComponent {
bks:Book[];
errmessage:string;
readonly book_URL = 'api/books';
 status:boolean=false;
constructor(private http: HttpClient) {  
}

listAllBooks()
{
     this.http.get<Book[]>(this.book_URL)
      .subscribe(data=>{
                        this.status=true;
                          console.log("got the data");
                        this.bks=data;
                       },      
          error=>{
                this.status=false;
                this.errmessage="data fetch failed";
                 console.log("data fetch failed")
            }
    ); 
}


}



