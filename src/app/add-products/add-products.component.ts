import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productCode = ""
  name =""
  manDate=""
  expDate=""
  brand=""
  price = ""
  sellerName =""
  distributorName=""
  
  constructor(private api:ApiService){}

  readValues = () =>{
    let data:any={
        "productCode":this.productCode,
        "name":this.name,
        "manDate":this.manDate,
        "expDate":this.expDate,
        "brand":this.brand,
        "price":this.price,
        "sellerName":this.sellerName,
        "distributorName":this.distributorName

      }
    console.log(data)
    this.api.addProducts(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == 200) {
          alert("Products Added SuccessFully")
            this.productCode = ""
            this.name =""
            this.manDate=""
            this.expDate=""
            this.brand=""
            this.price = ""
            this.sellerName =""
            this.distributorName=""
        } else {
          alert("Something went wrong!!!")
        }
      }
    )
  }
}
