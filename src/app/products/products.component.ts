import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productlist:any=[]
  constructor(private use:UserService,private cartservice:CartService){}
  ngOnInit(): void {

    this.use.getproduct().subscribe(res=>{
     
      this.productlist=res;
      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.cartservice.addtocart(item);
  }
  
 

  



}
