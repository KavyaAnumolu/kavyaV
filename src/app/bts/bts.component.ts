import { Component, OnInit } from '@angular/core';
import { Itae } from './btss';
// import { Taehyung } from '../taehyung';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.css']
})
export class BtsComponent implements OnInit {
 text:string;
 showImage:boolean=false;
 imageWidth:number=50;
 imageMargin:number=2;
 kavya:string='Members';
taehyung:Array<Itae>=[

  {
    id:94,
    name:'RM',
    title:'Leader of the group,Main Rapper',
    imageURL:"assets/images/nodejs.png"
    },
    {
      id:92,
      name:'Jin',
      title:'Oldest Member,Vocalist',
      imageURL:"assets/images/nodejs.png"
      },
    {
      id:93,
      name:'Suga',
      title:'Rapper,Composer,Producer',
      imageURL:"assets/images/nodejs.png"
      },
    {
      id:94,
      name:'JHope',
      title:'Rapper,Lead-Dancer',
      imageURL:"assets/images/nodejs.png"
      },
      {
        id:95,
        name:'Park Jimin',
        title:'Main Vocalist,Lead-Dancer',
        imageURL:"assets/images/nodejs.png"
        },
   
{
  id:95,
  name:'Kim Taehyung',
  title:'Main Visuals,Vocalist,Lead-Dancer',
  imageURL:"assets/images/unix.png"
},
{
id:97,
name:'Jungkook',
title:'Lead Vocalist,Center of Group,Lead-Dancer,Golden-Maknae',
imageURL:"assets/images/ts.png"

},

];
jimin() : void{
this.showImage= !this.showImage;
}
  constructor() { }

  ngOnInit() {
     this.text=" Bangtan ";
     console.log(this.text)
  }

}
