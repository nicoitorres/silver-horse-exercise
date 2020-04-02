import { Component, OnInit, Input } from '@angular/core';
import { Coordinates } from 'src/app/support/Coordinates';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() public map: Coordinates;

  constructor(public sanitise: DomSanitizer) { }

  mapUrl: any = '';

  ngOnInit(): void {
    this.mapUrl = this.getMapUrl();
  }
  getMapUrl(){
    return this.sanitise.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.map?.lat},${this.map?.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  }
}
