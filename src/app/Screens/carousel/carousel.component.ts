import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  peliculas:any[]=[
    {
      img: 'assets/Images/Filtros multimedia.jpg'
    },
    {
      img: 'assets/Images/Osmosis inversa.jpg'
    },
    {
      img: 'assets/Images/Tratamiento de aguas servidas.jpg'
    },
    {
      img: 'assets/Images/Tratamiento de Riles.jpg'
    },
  ];



  constructor(private _config: NgbCarouselConfig) { 
    _config.interval = 7000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;


  }

  ngOnInit(): void {
  }

}
