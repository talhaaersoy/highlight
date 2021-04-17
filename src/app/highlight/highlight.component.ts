import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {
  content=
  'Siber Güvenlik Çözümleri, Teknolojinin ilerlemesiyle bir çok sektör çok daha karmaşık, motive ve eş güdümlü siber saldırı ve tehditler ile karşı karşıya kalmaktadır. ARD Bilişim, Siber Güvenlik Çözümlerimiz ile tehdit ortamında gelişmiş teknolojiyi kullanan saldırılara karşı saldırı gerçekleşmeden önce tahmin sistemi ile önleyebilir yada saldırı gerçekleşmesi sırasında sistemlerinizin zarar görmesini engelleyen bir kalkan sunabilmektedir.';

  query:string[] = ["Güvenlik","Teknoloji"];
  constructor() { }

  ngOnInit(): void { this.checkWordInText()}
  
  checkWordInText(){
    this.query.map(element => {
      if(this.content.search(element)){
         this.content =this.content.split(element).join(`<span appHighlight>` + element + "</span>").toString();
      }
    });
  }
  
    
  
}
