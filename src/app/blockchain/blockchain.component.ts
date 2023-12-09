import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';
import { Block } from '../model/block';
import { Data, DataForm } from '../model/data';


@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit{

  blockchain: Block[]

  constructor(private blockchainService: BlockchainService) {}


  ngOnInit(): void {
  
    this.getBlockchain()
  }


  private getBlockchain(){
    this.blockchainService.getBlockchain()
    .subscribe(data => this.blockchain = data)
  }

  onStart(){
    this.blockchainService.startBlockchain()
    .subscribe(data => this.blockchain = data)
  }
  

  dataform: DataForm = new DataForm()
  onCreate(){

    this.blockchainService.createBlock(this.dataform)
      .subscribe({
        next: (data) => console.log("Creating: "+data),
        error: (error) => {console.log(error)
                          window.alert("Seems like you are getting an error!!")},
        complete: () => this.getBlockchain()
      })
  }

}
