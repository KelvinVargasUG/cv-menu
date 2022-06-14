import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.page.html',
  styleUrls: ['./referencias.page.scss'],
})
export class ReferenciasPage implements OnInit {

  nombrePage={ 
    title: 'Referencias', 
    icon: 'people' 
  };

  constructor() { }

  ngOnInit() {
  }

  referenciaPersonal: String[][]=[
       ['Jostin Gabriel Nacipucha Chafle','0985462485'],
       ['Emily Vanesa Andrade Montero','0974565974'],
       ['Aron Bryan Nacipucha Chafle','0965482354']
  ];

  referenciaLaboral: String[][]=[
    ['Humberto Albarado', '0945821697'],
    ['Manuel Rodas','0964521896'],
  ];

  

}
