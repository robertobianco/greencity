import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker,
 //GoogleMapsMapTypeId
} from 'ionic-native';

/*
  Generated class for the Spots page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-spots',
  templateUrl: 'spots.html'
})
export class SpotsPage {
  selectedItem: any;
  
 constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
 
 }

// Load map only after view is initialize
ngAfterViewInit() {
 this.loadMap();
}

loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map = new GoogleMap(element);

 // create LatLng object
 let fh_dortmund: GoogleMapsLatLng = new GoogleMapsLatLng(51.493510,7.418933);

 // create CameraPosition
 let position: CameraPosition = {
   target: fh_dortmund,
   zoom: 18,
   tilt: 30
 };

 // listen to MAP_READY event
 map.one(GoogleMapsEvent.MAP_READY).then(() => {
   // move the map's camera to position
   map.moveCamera(position); // works on iOS and Android
});


 // create new marker
 let markerOptions: GoogleMapsMarkerOptions = {
   position: fh_dortmund,
   title: 'FH Dortmund'
 };

 map.addMarker(markerOptions)
   .then((marker: GoogleMapsMarker) => {
      marker.showInfoWindow();
    });
 }
};