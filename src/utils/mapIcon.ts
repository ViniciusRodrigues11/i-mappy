import L from 'leaflet'
import mapMarkerImg from '../images/map-marker.svg'

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,
    iconSize: [80, 80],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })
  

export default happyMapIcon