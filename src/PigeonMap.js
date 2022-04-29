import React from "react";
import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

export function MyMap() {
  return (
    <Map
      provider={osm}
      height={200}
      defaultCenter={[50.879, 4.6997]}
      defaultZoom={11}
    />
  );
}
