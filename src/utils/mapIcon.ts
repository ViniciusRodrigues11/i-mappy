import L from 'leaflet'
import mapMarkerImg from '../images/map-marker.svg'
import NewInfectionMarker from '../images/newinfection-marker.png'

export const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [80, 80],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export const newInfectionMarker = L.icon({
  iconUrl: NewInfectionMarker,
  iconSize: [40, 40],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})


